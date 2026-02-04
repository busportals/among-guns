import svgPaths from "../../../imports/svg-pea7b3wqhj";

interface BotanicsIconProps {
  isActive?: boolean;
}

export function BotanicsIcon({ isActive }: BotanicsIconProps) {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Component 1">
          <path
            d={svgPaths.p12050a00}
            fill={isActive ? "var(--color-botanics)" : "#48626F"}
            id="Vector"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
        </g>
      </svg>
    </div>
  );
}
