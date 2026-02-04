import svgPaths from "../../../imports/svg-pea7b3wqhj";

interface StorageIconProps {
  isActive?: boolean;
}

export function StorageIcon({ isActive }: StorageIconProps) {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Component 1">
          <path
            d={svgPaths.p2be76b80}
            fill={isActive ? "var(--color-storage)" : "#48626F"}
            id="Vector"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
          <path
            d={svgPaths.pc5f1c80}
            fill={isActive ? "var(--color-storage)" : "#48626F"}
            id="Vector_2"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
          <path
            d={svgPaths.p185a0b00}
            fill={isActive ? "var(--color-storage)" : "#48626F"}
            id="Vector_3"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
          <path
            d={svgPaths.p3f610880}
            fill={isActive ? "var(--color-storage)" : "#48626F"}
            id="Vector_4"
            style={{ transition: 'fill var(--transition-hover)' }}
          />
        </g>
      </svg>
    </div>
  );
}
