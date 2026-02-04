import { useState, useEffect } from 'react';
import type { HoverState, Task, TaskProgress } from '../shared/types';
import { ProgressBar } from './ProgressBar';
import { TaskCategories } from './TaskCategories';

interface TasksGroupProps {
  hoverState: HoverState;
  expandedCategory: HoverState;
  taskData: Record<string, Task[]>;
  taskProgress: TaskProgress;
  onHover: (state: HoverState) => void;
  onLeave: () => void;
  onCategoryClick: (category: HoverState) => void;
}

export function TasksGroup({
  hoverState,
  expandedCategory,
  taskData,
  taskProgress,
  onHover,
  onLeave,
  onCategoryClick
}: TasksGroupProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Calculate progress percentage from Portals data
  const progressPercentage = taskProgress.required > 0
    ? Math.round((taskProgress.completed / taskProgress.required) * 100)
    : 0;

  // Animate progress bar when percentage changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="tasks group">
      <p className="bg-clip-text bg-gradient-to-t font-['Bungee:Regular',sans-serif] from-[#7897a9] from-[9.789%] leading-[0.911] not-italic relative shrink-0 text-[34.194px] to-[141.82%] to-white tracking-[2.7355px] w-full whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        TASKS
      </p>

      <ProgressBar percentage={progressPercentage} animatedPercentage={animatedProgress} />

      <TaskCategories
        hoverState={hoverState}
        expandedCategory={expandedCategory}
        taskData={taskData}
        onHover={onHover}
        onLeave={onLeave}
        onCategoryClick={onCategoryClick}
      />
    </div>
  );
}
