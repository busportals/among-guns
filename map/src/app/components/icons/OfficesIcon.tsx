import svgPaths from "../../../imports/svg-pea7b3wqhj";

interface OfficesIconProps {
  isActive?: boolean;
}

export function OfficesIcon({ isActive }: OfficesIconProps) {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Component 1">
          <path
            d={svgPaths.p1253c8f0}
            fill={isActive ? "var(--color-offices)" : "#48626F"}
            id="Vector"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
          <path
            d={svgPaths.p2ed0fa00}
            fill={isActive ? "var(--color-offices)" : "#48626F"}
            id="Subtract"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
        </g>
      </svg>
    </div>
  );
}
