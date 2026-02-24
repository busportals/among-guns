// Task blip positions computed from world coordinates via worldToSvg formula
// Bounds: Z(-61.72..59.675) X(-34.518..55.363), SVG 986×772, center (493, 386)
// World coords: (x, z) from Unity — Z maps to SVG X, X maps to SVG Y
const TASK_POSITIONS: { taskNum: number; offsetX: number; offsetY: number }[] = [
  { taskNum: 1,  offsetX: 185.4,  offsetY: -368.7 },  // world (-32.5, 21.8)
  { taskNum: 2,  offsetX: 451.0,  offsetY: 149.3  },  // world (27.8, 54.5)
  { taskNum: 3,  offsetX: -90.8,  offsetY: -232.1 },  // world (-16.6, -12.2)
  { taskNum: 4,  offsetX: 149.6,  offsetY: 74.5   },  // world (19.1, 17.4)
  { taskNum: 5,  offsetX: 442.0,  offsetY: -99.8  },  // world (-1.2, 53.4)
  { taskNum: 6,  offsetX: -141.2, offsetY: -332.6 },  // world (-28.3, -18.4)
  { taskNum: 7,  offsetX: -352.3, offsetY: 37.6   },  // world (14.8, -44.4)
  { taskNum: 8,  offsetX: -337.7, offsetY: 130.4  },  // world (25.6, -42.6)
  { taskNum: 9,  offsetX: 394.9,  offsetY: 27.3   },  // world (13.6, 47.6)
  { taskNum: 10, offsetX: -103.0, offsetY: 28.2   },  // world (13.7, -13.7)
  // Task 11: MISSING — no world position
  { taskNum: 12, offsetX: 390.1,  offsetY: -159.1 },  // world (-8.1, 47.0)
  { taskNum: 13, offsetX: -293.8, offsetY: -107.5 },  // world (-2.1, -37.2)
  { taskNum: 14, offsetX: 346.2,  offsetY: -243.3 },  // world (-17.9, 41.6)
  { taskNum: 15, offsetX: 35.9,   offsetY: -346.3 },  // world (-29.9, 3.4)
  { taskNum: 16, offsetX: -185.0, offsetY: 77.9   },  // world (19.5, -23.8)
  { taskNum: 17, offsetX: -440.0, offsetY: 29.9   },  // world (13.9, -55.2)
  { taskNum: 18, offsetX: -340.9, offsetY: -184.0 },  // world (-11.0, -43.0)
  { taskNum: 19, offsetX: 161.0,  offsetY: -151.4 },  // world (-7.2, 18.8)
  { taskNum: 20, offsetX: 342.9,  offsetY: -266.4 },  // world (-20.6, 41.2)
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
