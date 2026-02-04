import svgPaths from "../../../imports/svg-pea7b3wqhj";

interface MedbayIconProps {
  isActive?: boolean;
}

export function MedbayIcon({ isActive }: MedbayIconProps) {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Component 1">
          <path
            d={svgPaths.pf9f1c00}
            fill={isActive ? "var(--color-medbay)" : "#48626F"}
            id="Vector"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
        </g>
      </svg>
    </div>
  );
}
