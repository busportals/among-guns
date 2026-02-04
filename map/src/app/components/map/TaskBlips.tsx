// Task blip marker with radar pulse animation
function TaskBlip({ color, position, delay = 0 }: { color: string; position: string; delay?: number }) {
  return (
    <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${position} size-[6px]`}>
      {/* Center dot */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 4px ${color}, 0 0 8px ${color}40`
        }}
      />
      {/* Expanding ring 1 */}
      <div
        className="absolute inset-0 rounded-full animate-radar-pulse"
        style={{
          border: `1px solid ${color}`,
          animationDelay: `${delay}s`
        }}
      />
      {/* Expanding ring 2 */}
      <div
        className="absolute inset-0 rounded-full animate-radar-pulse"
        style={{
          border: `1px solid ${color}`,
          animationDelay: `${delay + 0.5}s`
        }}
      />
    </div>
  );
}

export function MedbayBlips({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+175px)] top-[calc(50%-20.63px)]" data-name="MEDBAY BLIPS">
      {/* Blip positions in the medbay area */}
      <TaskBlip color="#3DD1DC" position="left-[calc(50%-290px)] top-[calc(50%+35px)]" delay={0} />
      <TaskBlip color="#3DD1DC" position="left-[calc(50%-260px)] top-[calc(50%+60px)]" delay={0.3} />
      <TaskBlip color="#3DD1DC" position="left-[calc(50%-285px)] top-[calc(50%+10px)]" delay={0.6} />
    </div>
  );
}

export function BotanicsBlips({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+175px)] top-[calc(50%-20.63px)]" data-name="BOTANICS BLIPS">
      {/* Blip positions in the botanics area */}
      <TaskBlip color="#1BFF63" position="left-[calc(50%-250px)] top-[calc(50%-210px)]" delay={0} />
      <TaskBlip color="#1BFF63" position="left-[calc(50%-270px)] top-[calc(50%-185px)]" delay={0.4} />
    </div>
  );
}

export function OfficesBlips({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+175px)] top-[calc(50%-20.63px)]" data-name="OFFICES BLIPS">
      {/* Blip positions in the offices areas */}
      <TaskBlip color="#E17E58" position="left-[calc(50%+120px)] top-[calc(50%-250px)]" delay={0} />
      <TaskBlip color="#E17E58" position="left-[calc(50%+245px)] top-[calc(50%-127px)]" delay={0.3} />
    </div>
  );
}

export function StorageBlips({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+175px)] top-[calc(50%-20.63px)]" data-name="STORAGE BLIPS">
      {/* Blip positions in the storage deck area */}
      <TaskBlip color="#D7E569" position="left-[calc(50%+300px)] top-[calc(50%+80px)]" delay={0} />
      <TaskBlip color="#D7E569" position="left-[calc(50%+350px)] top-[calc(50%+95px)]" delay={0.35} />
    </div>
  );
}
