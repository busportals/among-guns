// Task blip positions computed from world coordinates via worldToSvg formula
// Offsets are relative to SVG center (506.05, 334.265)
const TASK_POSITIONS: { taskNum: number; offsetX: number; offsetY: number }[] = [
  { taskNum: 1,  offsetX: 380.8,  offsetY: -218.5 },
  { taskNum: 2,  offsetX: 697.7,  offsetY: 95.0   }, // off-map until recalibration
  { taskNum: 3,  offsetX: 51.0,   offsetY: -135.4 },
  { taskNum: 4,  offsetX: 338.2,  offsetY: 49.8   },
  { taskNum: 5,  offsetX: 687.1,  offsetY: -55.4  }, // off-map until recalibration
  { taskNum: 6,  offsetX: -9.2,   offsetY: -196.2 },
  { taskNum: 7,  offsetX: 164.5,  offsetY: 33.7   },
  { taskNum: 8,  offsetX: 174.2,  offsetY: 89.9   },
  { taskNum: 9,  offsetX: 630.9,  offsetY: 21.3   }, // off-map until recalibration
  { taskNum: 10, offsetX: 36.4,   offsetY: 21.8   },
  // Task 11: MISSING - no world position
  { taskNum: 12, offsetX: 625.1,  offsetY: -91.8  }, // off-map until recalibration
  { taskNum: 13, offsetX: 164.5,  offsetY: -53.9  },
  { taskNum: 14, offsetX: 572.7,  offsetY: -142.1 }, // off-map until recalibration
  { taskNum: 15, offsetX: 202.3,  offsetY: -204.5 },
  { taskNum: 16, offsetX: 164.5,  offsetY: 58.1   },
  { taskNum: 17, offsetX: -366.0, offsetY: 22.8   },
  { taskNum: 18, offsetX: 164.5,  offsetY: -100.1 },
  { taskNum: 19, offsetX: 352.7,  offsetY: -86.6  },
  { taskNum: 20, offsetX: 569.8,  offsetY: -153.0 }, // off-map until recalibration
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
