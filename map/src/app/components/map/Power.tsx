import svgPaths from "../../../imports/svg-pea7b3wqhj";

function MapPowerIcon({ isHighlighted, position }: { isHighlighted: boolean; position: string }) {
  const fillColor = isHighlighted ? "#C8FF49" : "#4E636F";

  return (
    <div
      className={`-translate-x-1/2 -translate-y-1/2 absolute ${position} h-[33px] w-[31px] transition-all duration-300`}
      style={{ opacity: isHighlighted ? 1 : 0 }}
      data-name="map locations"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 33">
        <g id="map locations">
          <path d={svgPaths.p18875600} fill={fillColor} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Power({ isHighlighted }: { isHighlighted: boolean }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents" data-name="POWER">
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%-472.8px)] top-[calc(50%-16px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+492.4px)] top-[calc(50%-48px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+138.7px)] top-[calc(50%+101.4px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+425.3px)] top-[calc(50%-242px)]" />
    </div>
  );
}

export { MapPowerIcon, Power };
