import svgPaths from "../../../imports/svg-pea7b3wqhj";

export function StorageRooms({ isHighlighted }: { isHighlighted: boolean }) {
  const fillColor = isHighlighted ? "var(--color-storage)" : "#36464E";

  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[383.794px] left-[calc(50%-10.8px)] top-[calc(50%-105px)] w-[870.835px] transition-all duration-300"
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
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%-195.9px)] top-[calc(50%-343.9px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+277.1px)] top-[calc(50%+173.1px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+477.1px)] top-[calc(50%+26.1px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%-411.9px)] top-[calc(50%+142.1px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+210.1px)] top-[calc(50%-374.9px)]" />
      <VentComponent isHighlighted={isHighlighted} position="left-[calc(50%+478.1px)] top-[calc(50%-139.9px)]" />
    </div>
  );
}
