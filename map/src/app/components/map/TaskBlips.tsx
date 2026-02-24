// Task blip positions computed from world coordinates via worldToSvg formula
// Bounds: Z(-61.72..59.675) X(-34.518..55.363), SVG 1017×749, center (508.5, 374.5)
// World coords: (x, z) from Unity — Z maps to SVG X, X maps to SVG Y
const TASK_POSITIONS: { taskNum: number; offsetX: number; offsetY: number }[] = [
  { taskNum: 1,  offsetX: 191.2,  offsetY: -357.7 },  // world (-32.5, 21.8)
  { taskNum: 2,  offsetX: 465.1,  offsetY: 144.8  },  // world (27.8, 54.5)
  { taskNum: 3,  offsetX: -93.6,  offsetY: -225.2 },  // world (-16.6, -12.2)
  { taskNum: 4,  offsetX: 154.3,  offsetY: 72.3   },  // world (19.1, 17.4)
  { taskNum: 5,  offsetX: 455.9,  offsetY: -96.8  },  // world (-1.2, 53.4)
  { taskNum: 6,  offsetX: -145.6, offsetY: -322.7 },  // world (-28.3, -18.4)
  { taskNum: 7,  offsetX: -363.4, offsetY: 36.5   },  // world (14.8, -44.4)
  { taskNum: 8,  offsetX: -348.3, offsetY: 126.5  },  // world (25.6, -42.6)
  { taskNum: 9,  offsetX: 407.4,  offsetY: 26.5   },  // world (13.6, 47.6)
  { taskNum: 10, offsetX: -106.2, offsetY: 27.3   },  // world (13.7, -13.7)
  // Task 11: MISSING — no world position
  { taskNum: 12, offsetX: 402.3,  offsetY: -154.3 },  // world (-8.1, 47.0)
  { taskNum: 13, offsetX: -303.1, offsetY: -104.3 },  // world (-2.1, -37.2)
  { taskNum: 14, offsetX: 357.1,  offsetY: -236.0 },  // world (-17.9, 41.6)
  { taskNum: 15, offsetX: 37.1,   offsetY: -336.0 },  // world (-29.9, 3.4)
  { taskNum: 16, offsetX: -190.8, offsetY: 75.7   },  // world (19.5, -23.8)
  { taskNum: 17, offsetX: -453.9, offsetY: 29.0   },  // world (13.9, -55.2)
  { taskNum: 18, offsetX: -351.7, offsetY: -178.5 },  // world (-11.0, -43.0)
  { taskNum: 19, offsetX: 166.1,  offsetY: -146.8 },  // world (-7.2, 18.8)
  { taskNum: 20, offsetX: 353.7,  offsetY: -258.5 },  // world (-20.6, 41.2)
];

const BLIP_COLOR = '#3DD1DC';

// Task blip marker with radar pulse animation
function TaskBlip({ offsetX, offsetY, delay = 0 }: { offsetX: number; offsetY: number; delay?: number }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 size-[6px]"
      style={{
        left: `calc(50% + ${offsetX}px)`,
        top: `calc(50% + ${offsetY}px)`,
      }}
    >
      {/* Center dot */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: BLIP_COLOR,
          boxShadow: `0 0 4px ${BLIP_COLOR}, 0 0 8px ${BLIP_COLOR}40`,
        }}
      />
      {/* Expanding ring 1 */}
      <div
        className="absolute inset-0 rounded-full animate-radar-pulse"
        style={{
          border: `1px solid ${BLIP_COLOR}`,
          animationDelay: `${delay}s`,
        }}
      />
      {/* Expanding ring 2 */}
      <div
        className="absolute inset-0 rounded-full animate-radar-pulse"
        style={{
          border: `1px solid ${BLIP_COLOR}`,
          animationDelay: `${delay + 0.5}s`,
        }}
      />
    </div>
  );
}

export function TaskBlips({ activeTasks }: { activeTasks: Set<number> }) {
  return (
    <div className="absolute contents" data-name="TASK BLIPS">
      {TASK_POSITIONS.map((task, i) =>
        activeTasks.has(task.taskNum) ? (
          <TaskBlip
            key={task.taskNum}
            offsetX={task.offsetX}
            offsetY={task.offsetY}
            delay={(i % 5) * 0.2}
          />
        ) : null
      )}
    </div>
  );
}
