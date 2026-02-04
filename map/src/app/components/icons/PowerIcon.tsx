import svgPaths from "../../../imports/svg-pea7b3wqhj";

interface PowerIconProps {
  isActive?: boolean;
}

export function PowerIcon({ isActive }: PowerIconProps) {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Component 1">
          <path
            d={svgPaths.p35392b00}
            fill={isActive ? "var(--color-power)" : "#48626F"}
            id="Vector"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
        </g>
      </svg>
    </div>
  );
}
