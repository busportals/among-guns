import svgPaths from "../../../imports/svg-pea7b3wqhj";

interface VentsIconProps {
  isActive?: boolean;
}

export function VentsIcon({ isActive }: VentsIconProps) {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Component 1">
          <path
            d={svgPaths.p355be700}
            fill={isActive ? "var(--color-vents)" : "#48626F"}
            id="Union"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
        </g>
      </svg>
    </div>
  );
}
