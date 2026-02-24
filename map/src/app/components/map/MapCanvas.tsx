import baseMap from "../../../assets/base-map.svg";

// Background marker component (Figma Make artifact, invisible)
export function Component8() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-[calc(50%+413.27px)] size-[36.008px] top-[calc(50%+73.35px)]" data-name="Component 9" />;
}

// Main SVG background — clean room outlines only (Union from Figma, 986×772 frame)
export function Group() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      style={{ width: 986, height: 772, left: '50%', top: '50%' }}
    >
      <img
        src={baseMap}
        alt=""
        className="block size-full"
        draggable={false}
      />
    </div>
  );
}

// Background wrapper
export function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0px)] top-[calc(50%+0px)]">
      <Group />
    </div>
  );
}
