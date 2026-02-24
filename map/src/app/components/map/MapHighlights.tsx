import svgPaths from "../../../imports/svg-pea7b3wqhj";

export function StorageRooms({ isHighlighted }: { isHighlighted: boolean }) {
  const fillColor = isHighlighted ? "var(--color-storage)" : "#36464E";

  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.794px] left-[calc(50%-11.2px)] top-[calc(50%-101.9px)] w-[870.835px] transition-all duration-300"
      style={{ opacity: isHighlighted ? 1 : 0 }}
      data-name="STORAGE ROOMS"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870.835 383.794">
        <g id="STORAGE ROOMS">
          <path d={svgPaths.p289f5800} fill={fillColor} id="Vector" />
          <path d={svgPaths.p2bfc1b00} fill={fillColor} id="Vector_2" />
          <path d={svgPaths.p125cd80} fill={fillColor} id="Vector_3" />
          <path d={svgPaths.p2b44ae80} fill={fillColor} id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function VentComponent({ isHighlighted, position }: { isHighlighted: boolean; position: string }) {
  const fillColor = isHighlighted ? "var(--color-vents)" : "#36464E";

  return (
    <div
      className={`-translate-x-1/2 -translate-y-1/2 absolute ${position} size-[22.248px] transition-all duration-300`}
      style={{ opacity: isHighlighted ? 1 : 0 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2484 22.2484">
        <g id="Component 1">
          <path d={svgPaths.p1d547c80} fill={fillColor} id="Union" />
        </g>
      </svg>
    </div>
  );
}

export function Vents({ isHighlighted }: { isHighlighted: boolean }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents" data-name="VENTS">
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%-202px)] top-[calc(50%-333.6px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+285.7px)] top-[calc(50%+167.9px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+491.9px)] top-[calc(50%+25.3px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%-424.8px)] top-[calc(50%+137.9px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+216.6px)] top-[calc(50%-363.6px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+493px)] top-[calc(50%-135.7px)]" />
    </div>
  );
}
