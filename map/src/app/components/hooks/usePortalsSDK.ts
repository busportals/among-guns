import { useState, useEffect, useRef, useCallback } from 'react';
import type { TaskProgress, PlayerPosition } from '../shared/types';

// ===== Map bounds (calibrated to match HUD minimap) =====
const MAP_Z_MIN = -61.72;
const MAP_Z_MAX = 59.675;
const MAP_X_MIN = -34.518;
const MAP_X_MAX = 55.363;
const SVG_W = 1017;
const SVG_H = 749;
const SMOOTHING = 0.15;

// ===== Parsing =====

function parseTaskActivation(message: string): { taskNum: number; active: boolean } | null {
  const match = message.match(/^Task\s+(\d+)\s+(Active|Complete|Inactive)$/i);
  if (!match) return null;
  const taskNum = parseInt(match[1], 10);
  const active = match[2].toLowerCase() === 'active';
  return { taskNum, active };
}

function parseTaskProgress(message: string): TaskProgress | null {
  const completedMatch = message.match(/taskscompleted\s*:\s*(\d+)/i);
  const requiredMatch = message.match(/tasksrequired\s*:\s*(\d+)/i);
  if (!completedMatch || !requiredMatch) return null;

  const completed = parseInt(completedMatch[1], 10);
  const required = parseInt(requiredMatch[1], 10);
  if (isNaN(completed) || isNaN(required) || required < 0 || completed < 0) return null;

  return { completed, required };
}

function parsePositionMessage(
  message: string,
  state: TrackingState
): boolean {
  const posMatch = message.match(/"([^"]+)"pos:\{(.+)\}/);
  if (!posMatch) return false;

  state.myName = posMatch[1];
  const dataStr = posMatch[2];
  const playerRegex = /"([^"]+)"\s*=\s*"\(([^)]+)\)"/g;
  let match;
  while ((match = playerRegex.exec(dataStr)) !== null) {
    const name = match[1];
    const coords = match[2].split(',');
    const wx = parseFloat(coords[0]) || 0;
    const wz = parseFloat(coords[2]) || 0;
    if (name === state.myName) {
      state.targetX = wx;
      state.targetZ = wz;
    }
  }
  return true;
}

function parseRotationMessage(
  message: string,
  state: TrackingState
): boolean {
  const rotMatch = message.match(/"([^"]+)"rot:\{(.+)\}/);
  if (!rotMatch) return false;

  const dataStr = rotMatch[2];
  const playerRegex = /"([^"]+)"\s*=\s*"([^"]+)"/g;
  let match;
  while ((match = playerRegex.exec(dataStr)) !== null) {
    const name = match[1];
    const deg = parseFloat(match[2]) || 0;
    if (name === state.myName) {
      state.targetRot = deg;
    }
  }
  return true;
}

// ===== Conversion =====

function worldToSvg(worldX: number, worldZ: number): { x: number; y: number } {
  return {
    x: (worldZ - MAP_Z_MIN) / (MAP_Z_MAX - MAP_Z_MIN) * SVG_W,
    y: (worldX - MAP_X_MIN) / (MAP_X_MAX - MAP_X_MIN) * SVG_H,
  };
}

// ===== Lerp helpers =====

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number): number {
  let diff = b - a;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  return a + diff * t;
}

// ===== Tracking state (mutable ref, not React state — avoids re-renders per frame) =====

interface TrackingState {
  myName: string | null;
  targetX: number;
  targetZ: number;
  targetRot: number;
  displayX: number;
  displayZ: number;
  displayRot: number;
  hasData: boolean;
  lastFrameTime: number;
  rafId: number;
}

/**
 * Hook for Portals SDK integration.
 * Manages task progress AND player position tracking.
 */
export function usePortalsSDK() {
  const [taskProgress, setTaskProgress] = useState<TaskProgress>({
    completed: 0,
    required: 1,
  });
  const [playerPosition, setPlayerPosition] = useState<PlayerPosition | null>(null);
  const [activeTasks, setActiveTasks] = useState<Set<number>>(new Set());

  const trackingRef = useRef<TrackingState>({
    myName: null,
    targetX: 0,
    targetZ: 0,
    targetRot: 0,
    displayX: 0,
    displayZ: 0,
    displayRot: 0,
    hasData: false,
    lastFrameTime: 0,
    rafId: 0,
  });

  // Stable callback so the render loop can always read the latest setter
  const updatePosition = useCallback((pos: PlayerPosition) => {
    setPlayerPosition(pos);
  }, []);

  useEffect(() => {
    const state = trackingRef.current;

    // --- Render loop: lerp toward targets and emit position ---
    function renderFrame(now: number) {
      state.rafId = requestAnimationFrame(renderFrame);
      if (!state.hasData) return;

      const dt = state.lastFrameTime ? (now - state.lastFrameTime) / 1000 : 0.016;
      state.lastFrameTime = now;
      const t = 1 - Math.pow(1 - SMOOTHING, dt * 60);

      state.displayX = lerp(state.displayX, state.targetX, t);
      state.displayZ = lerp(state.displayZ, state.targetZ, t);
      state.displayRot = lerpAngle(state.displayRot, state.targetRot, t);
      state.displayRot = ((state.displayRot % 360) + 360) % 360;

      const svg = worldToSvg(state.displayX, state.displayZ);
      // Debug: log world coords and SVG position every ~2 seconds
      if (Math.floor(now / 2000) !== Math.floor((now - dt * 1000) / 2000)) {
        console.log('[Map] World:', { x: state.displayX.toFixed(1), z: state.displayZ.toFixed(1), rot: state.displayRot.toFixed(0) },
          '→ SVG:', { x: svg.x.toFixed(0), y: svg.y.toFixed(0) });
      }
      updatePosition({ x: svg.x, y: svg.y, rotation: state.displayRot });
    }

    state.rafId = requestAnimationFrame(renderFrame);

    // --- Message listener (single callback for all message types) ---
    function handleMessage(message: string) {
      const trimmed = message.trim();

      // Task activation (e.g. "Task 1 Active", "Task 1 Complete")
      const taskActivation = parseTaskActivation(trimmed);
      if (taskActivation) {
        setActiveTasks(prev => {
          const next = new Set(prev);
          if (taskActivation.active) {
            next.add(taskActivation.taskNum);
          } else {
            next.delete(taskActivation.taskNum);
          }
          return next;
        });
        return;
      }

      // Task progress
      const progress = parseTaskProgress(trimmed);
      if (progress) {
        setTaskProgress(progress);
        return;
      }

      // Position / rotation
      const posUpdated = parsePositionMessage(trimmed, state);
      const rotUpdated = parseRotationMessage(trimmed, state);

      if ((posUpdated || rotUpdated) && !state.hasData) {
        state.hasData = true;
        state.displayX = state.targetX;
        state.displayZ = state.targetZ;
        state.displayRot = state.targetRot;
      }
    }

    if (typeof PortalsSdk !== 'undefined' && PortalsSdk.setMessageListener) {
      PortalsSdk.setMessageListener(handleMessage);
    } else {
      // Fallback: postMessage
      const onMessage = (event: MessageEvent) => {
        let messageData: string;
        if (typeof event.data === 'string') {
          messageData = event.data;
        } else if (typeof event.data === 'object' && event.data !== null) {
          messageData = JSON.stringify(event.data).replace(/[{}"]/g, '').replace(/,/g, ', ');
        } else {
          return;
        }
        handleMessage(messageData);
      };
      window.addEventListener('message', onMessage);
      return () => {
        cancelAnimationFrame(state.rafId);
        window.removeEventListener('message', onMessage);
      };
    }

    return () => {
      cancelAnimationFrame(state.rafId);
    };
  }, [updatePosition]);

  return { taskProgress, playerPosition, activeTasks };
}
