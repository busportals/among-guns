// Task blip positions computed from world coordinates via worldToSvg formula
// Bounds: Z(-61.72..59.675) X(-34.518..55.363), SVG 1017×749, center (508.5, 374.5)
const TASK_POSITIONS: { taskNum: number; offsetX: number; offsetY: number }[] = [
  { taskNum: 1,  offsetX: 191.2,  offsetY: -358.5 },
  { taskNum: 2,  offsetX: 465.1,  offsetY: 144.8  }, // off-map until recalibration
  { taskNum: 3,  offsetX: -93.6,  offsetY: -225.2 },
  { taskNum: 4,  offsetX: 154.3,  offsetY: 72.3   },
  { taskNum: 5,  offsetX: 455.9,  offsetY: -96.9  }, // off-map until recalibration
  { taskNum: 6,  offsetX: -145.6, offsetY: -322.7 },
  { taskNum: 7,  offsetX: 4.4,    offsetY: 46.5   },
  { taskNum: 8,  offsetX: 12.8,   offsetY: 136.5  },
  { taskNum: 9,  offsetX: 407.3,  offsetY: 26.5   }, // off-map until recalibration
  { taskNum: 10, offsetX: -106.2, offsetY: 27.3   },
  // Task 11: MISSING - no world position
  { taskNum: 12, offsetX: 402.3,  offsetY: -155.2 }, // off-map until recalibration
  { taskNum: 13, offsetX: 4.4,    offsetY: -94.4  },
  { taskNum: 14, offsetX: 357.1,  offsetY: -236.0 }, // off-map until recalibration
  { taskNum: 15, offsetX: 37.0,   offsetY: -336.0 },
  { taskNum: 16, offsetX: 4.4,    offsetY: 85.6   },
  { taskNum: 17, offsetX: -453.9, offsetY: 29.0   },
  { taskNum: 18, offsetX: 4.4,    offsetY: -168.5 },
  { taskNum: 19, offsetX: 166.9,  offsetY: -146.9 },
  { taskNum: 20, offsetX: 354.6,  offsetY: -258.5 }, // off-map until recalibration
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
