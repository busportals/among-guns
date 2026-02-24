import type { HoverState, PlayerPosition } from '../shared/types';
import { useMapScale } from '../hooks/useMapScale';
import { Component8, Group1 } from './MapCanvas';
import { StorageRooms, Vents } from './MapHighlights';
import { PlayerMarker } from './PlayerMarker';
import { MapLocations } from './MapLocations';
import { TaskBlips } from './TaskBlips';

interface GameMapProps {
  hoverState: HoverState;
  playerPosition: PlayerPosition | null;
  activeTasks: Set<number>;
}

export function GameMap({ hoverState, playerPosition, activeTasks }: GameMapProps) {
  const scale = useMapScale();

  return (
    <div
      className="absolute top-1/2"
      data-name="GAME MAP"
      style={{
        left: 'calc(50% + var(--sidebar-width) / 2)',
        transform: `translate(-50%, -50%) scale(${scale})`,
        transition: 'transform var(--transition-scale)'
      }}
    >
      <Component8 />
      <Group1 />
      <StorageRooms isHighlighted={hoverState === 'storage'} />
      <Vents isHighlighted={hoverState === 'vents'} />
      <PlayerMarker position={playerPosition} />
      <MapLocations hoverState={hoverState} />
      <TaskBlips activeTasks={activeTasks} />
    </div>
  );
}
