import svgPaths from "../../../imports/svg-pea7b3wqhj";

// Background marker component
export function Component8() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-[calc(50%+413.27px)] size-[36.008px] top-[calc(50%+73.35px)]" data-name="Component 9" />;
}

// Main SVG background
export function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[607.427px] left-[calc(50%+154.5px)] top-[calc(50%-2.97px)] w-[951px]">
      <div className="absolute inset-[-0.19%_-3.47%_-9.87%_-2.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1012.1 668.529">
          <g id="Group 143726365">
            <g filter="url(#filter0_d_1_80)" id="Union">
              <path clipRule="evenodd" d={svgPaths.p24831000} fill="url(#paint0_linear_1_80)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="668.529" id="filter0_d_1_80" width="1012.1" x="7.15256e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2.43298" dy="29.3929" />
              <feGaussianBlur stdDeviation="15.2754" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0162964 0 0 0 0 0.0355462 0 0 0 0 0.0431565 0 0 0 0.4 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_80" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_80" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_80" x1="503.618" x2="503.618" y1="1.1579" y2="608.585">
              <stop stopColor="#3A4B54" />
              <stop offset="1" stopColor="#202B2A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Background wrapper
export function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+154.5px)] top-[calc(50%-2.97px)]">
      <Group />
    </div>
  );
}
