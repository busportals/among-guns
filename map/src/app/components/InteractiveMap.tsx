import { useState } from 'react';
import { usePortalsSDK } from './hooks/usePortalsSDK';
import type { HoverState, Task } from './shared/types';
import { Sidebar } from './sidebar/Sidebar';
import { GameMap } from './map/GameMap';

const TASK_DATA: Record<string, Task[]> = {
  botanics: [
    { id: 'bot-1', description: 'sort and label biological samples', completed: true },
    { id: 'bot-2', description: 'extract dna from plant sample', completed: false },
  ],
  medbay: [
    { id: 'med-1', description: 'run diagnostic on medical scanner', completed: true },
    { id: 'med-2', description: 'restock emergency medical supplies', completed: false },
    { id: 'med-3', description: 'calibrate life support monitors', completed: false },
    { id: 'med-4', description: 'sterilize surgical equipment', completed: true },
  ],
  offices: [
    { id: 'off-1', description: 'review and sign personnel reports', completed: false },
    { id: 'off-2', description: 'update crew schedules in system', completed: true },
  ],
  storage: [
    { id: 'sto-1', description: 'organize cargo containers by priority', completed: false },
    { id: 'sto-2', description: 'verify inventory records match stock', completed: true },
  ],
  power: [
    { id: 'pow-1', description: 'reset circuit breaker in reactor room', completed: true },
    { id: 'pow-2', description: 'replace damaged power conduits', completed: false },
  ],
  vents: [
    { id: 'ven-1', description: 'clear debris from ventilation shaft', completed: false },
    { id: 'ven-2', description: 'inspect air filter integrity', completed: true },
    { id: 'ven-3', description: 'repair vent cover in corridor', completed: false },
    { id: 'ven-4', description: 'check airflow sensors', completed: true },
    { id: 'ven-5', description: 'clean intake vents', completed: false },
    { id: 'ven-6', description: 'seal leaking ventilation pipe', completed: true },
    { id: 'ven-7', description: 'test emergency vent system', completed: false },
  ],
};

function CloseButton() {
  const handleClose = () => {
    try {
      // Use Portals SDK if available
      if (typeof window.PortalsSdk !== 'undefined' && window.PortalsSdk?.closeIframe) {
        window.PortalsSdk.closeIframe();
        console.log('[Portals Map] Iframe closed via Portals SDK');
      } else {
        // Fallback: postMessage to parent
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'CLOSE_IFRAME' }, '*');
          console.log('[Portals Map] Close message sent to parent (SDK unavailable)');
        }
      }
    } catch (error) {
      console.error('[Portals Map] Failed to close iframe:', error);
    }
  };

  return (
    <button
      className="absolute top-[40px] right-[40px] z-20 cursor-pointer transition-opacity hover:opacity-70"
      aria-label="Close"
      onClick={handleClose}
    >
      <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.4141 1.41406L23.3281 20.5L43.8281 41L42.4141 42.4141L21.9141 21.9141L1.41406 42.4141L0 41L20.5 20.5L1.41406 1.41406L2.82812 0L21.9141 19.0859L41 0L42.4141 1.41406Z" fill="#465D6A"/>
      </svg>
    </button>
  );
}

export default function InteractiveMap() {
  const [hoverState, setHoverState] = useState<HoverState>(null);
  const [expandedCategory, setExpandedCategory] = useState<HoverState>(null);
  const { taskProgress } = usePortalsSDK();

  const handleCategoryClick = (category: HoverState) => {
    // Toggle: if clicking the same category, collapse it
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="relative size-full" style={{ backgroundColor: 'var(--color-background)' }} data-name="map">
      <Sidebar
        hoverState={hoverState}
        expandedCategory={expandedCategory}
        taskData={TASK_DATA}
        taskProgress={taskProgress}
        onHover={(state) => setHoverState(state)}
        onLeave={() => setHoverState(null)}
        onCategoryClick={handleCategoryClick}
      />
      <CloseButton />
      <GameMap hoverState={hoverState} />
    </div>
  );
}
