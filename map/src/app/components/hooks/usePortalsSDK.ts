import { useState, useEffect } from 'react';
import type { TaskProgress } from '../shared/types';

/**
 * Parse task progress from Portals SDK message
 * Expected format: "taskscompleted: 5, tasksrequired: 10"
 */
function parseTaskProgress(message: string): TaskProgress | null {
  try {
    // Case-insensitive regex matching
    const completedMatch = message.match(/taskscompleted\s*:\s*(\d+)/i);
    const requiredMatch = message.match(/tasksrequired\s*:\s*(\d+)/i);

    if (!completedMatch || !requiredMatch) {
      console.warn('[Portals Map] Invalid message format:', message);
      return null;
    }

    const completed = parseInt(completedMatch[1], 10);
    const required = parseInt(requiredMatch[1], 10);

    // Validate parsed values
    if (isNaN(completed) || isNaN(required) || required < 0 || completed < 0) {
      console.warn('[Portals Map] Invalid task values:', { completed, required });
      return null;
    }

    return { completed, required };
  } catch (error) {
    console.error('[Portals Map] Error parsing task progress:', error);
    return null;
  }
}

/**
 * Hook for Portals SDK integration
 * Manages task progress updates and iframe control
 */
export function usePortalsSDK() {
  const [taskProgress, setTaskProgress] = useState<TaskProgress>({
    completed: 0,
    required: 1
  });

  useEffect(() => {
    // First try PortalsSdk API if available
    if (typeof PortalsSdk !== 'undefined' && PortalsSdk.setMessageListener) {
      PortalsSdk.setMessageListener((message: string) => {
        console.log('[Portals Map] Received message via SDK:', message);

        const progress = parseTaskProgress(message);
        if (progress) {
          console.log('[Portals Map] Updating task progress:', progress);
          setTaskProgress(progress);
        }
      });
      console.log('[Portals Map] Task progress listener initialized via SDK');
      return;
    }

    // Fallback to postMessage API
    console.log('[Portals Map] Using postMessage for communication');

    const handleMessage = (event: MessageEvent) => {
      // Parse the message - it could be an object or a string
      let messageData: string;

      if (typeof event.data === 'string') {
        messageData = event.data;
      } else if (typeof event.data === 'object' && event.data !== null) {
        // Convert object to string format: {key:value, key2:value2}
        messageData = JSON.stringify(event.data)
          .replace(/[{}"]/g, '')
          .replace(/,/g, ', ');
      } else {
        return;
      }

      console.log('[Portals Map] Received postMessage:', messageData);

      const progress = parseTaskProgress(messageData);
      if (progress) {
        console.log('[Portals Map] Updating task progress:', progress);
        setTaskProgress(progress);
      }
    };

    window.addEventListener('message', handleMessage);
    console.log('[Portals Map] Task progress listener initialized via postMessage');

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const closeIframe = () => {
    try {
      if (typeof PortalsSdk !== 'undefined' && PortalsSdk?.closeIframe) {
        PortalsSdk.closeIframe();
        console.log('[Portals Map] Iframe closed via Portals SDK');
      } else {
        // Fallback: send message to parent window
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'CLOSE_IFRAME' }, '*');
          console.log('[Portals Map] Close message sent to parent (SDK unavailable)');
        }
      }
    } catch (error) {
      console.error('[Portals Map] Failed to close iframe:', error);
    }
  };

  return { taskProgress, closeIframe };
}
