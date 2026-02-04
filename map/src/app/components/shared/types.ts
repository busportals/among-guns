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
