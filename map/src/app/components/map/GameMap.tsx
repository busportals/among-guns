import type { HoverState } from '../shared/types';
import { useMapScale } from '../hooks/useMapScale';
import { Component8, Group1 } from './MapCanvas';
import { StorageRooms, Vents } from './MapHighlights';
import { PlayerMarker } from './PlayerMarker';
import { MapLocations } from './MapLocations';
import { MedbayBlips, BotanicsBlips, OfficesBlips, StorageBlips } from './TaskBlips';

interface GameMapProps {
  hoverState: HoverState;
}

export function GameMap({ hoverState }: GameMapProps) {
  const scale = useMapScale();

  return (
    <div
      className="absolute left-1/2 top-1/2"
      data-name="GAME MAP"
      style={{
        transform: `translate(-50%, -50%) scale(${scale})`,
        transition: 'transform var(--transition-scale)'
      }}
    >
      <Component8 />
      <Group1 />
      <StorageRooms isHighlighted={hoverState === 'storage'} />
      <Vents isHighlighted={hoverState === 'vents'} />
      <PlayerMarker />
      <MapLocations hoverState={hoverState} />
      <MedbayBlips isVisible={hoverState === 'medbay'} />
      <BotanicsBlips isVisible={hoverState === 'botanics'} />
      <OfficesBlips isVisible={hoverState === 'offices'} />
      <StorageBlips isVisible={hoverState === 'storage'} />
    </div>
  );
}
