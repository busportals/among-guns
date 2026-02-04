import svgPaths from "../../../imports/svg-pea7b3wqhj";

function MapPowerIcon({ isHighlighted, position }: { isHighlighted: boolean; position: string }) {
  const fillColor = isHighlighted ? "#C8FF49" : "#4E636F";

  return (
    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${position} h-[33px] w-[31px] transition-all duration-300`} data-name="map locations">
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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+212.5px)] top-[calc(50%-72px)]" data-name="POWER">
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%-230.5px)] top-[calc(50%-43.5px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+106.5px)] top-[calc(50%-217.5px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+508.5px)] top-[calc(50%-296.5px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+655.5px)] top-[calc(50%-91.5px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+655.5px)] top-[calc(50%+70.5px)]" />
      <MapPowerIcon isHighlighted={isHighlighted} position="left-[calc(50%+306.5px)] top-[calc(50%+152.5px)]" />
    </div>
  );
}

export { MapPowerIcon, Power };
