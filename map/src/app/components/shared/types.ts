/**
 * Location types for the Among Guns map
 */
export type HoverState = 'botanics' | 'medbay' | 'offices' | 'storage' | 'power' | 'vents' | null;

/**
 * Task data structure
 */
export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

/**
 * Task progress from Portals SDK
 */
export interface TaskProgress {
  completed: number;
  required: number;
}

/**
 * Player position in SVG pixel space (within the map viewBox)
 */
export interface PlayerPosition {
  x: number;       // SVG pixel X (0..1012.1)
  y: number;       // SVG pixel Y (0..668.529)
  rotation: number; // degrees
}
