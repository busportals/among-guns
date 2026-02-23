import svgPaths from "../../../imports/svg-pea7b3wqhj";
import type { PlayerPosition } from "../shared/types";

interface PlayerMarkerProps {
  position: PlayerPosition | null;
}

export function PlayerMarker({ position }: PlayerMarkerProps) {
  if (!position) return null;

  return (
    <div
      className="absolute"
      data-name="PLAYER MARKER"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`,
        width: 20.489,
        height: 24.587,
      }}
    >
      <div className="absolute inset-[-72.04%_-95.94%_-87.87%_-95.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.8064 63.9042">
          <g id="PLAYER MARKER">
            <g filter="url(#filter0_d_1_17)" id="Vector 59">
              <path d={svgPaths.p7216200} fill="var(--fill-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="63.9042" id="filter0_d_1_17" width="59.8064" x="0" y="-5.96046e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.94639" />
              <feGaussianBlur stdDeviation="9.82925" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_17" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_17" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
