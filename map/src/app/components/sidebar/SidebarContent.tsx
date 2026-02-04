import type { HoverState, Task, TaskProgress } from '../shared/types';
import { Logo } from './Logo';
import { TasksGroup } from './TasksGroup';

interface SidebarContentProps {
  hoverState: HoverState;
  expandedCategory: HoverState;
  taskData: Record<string, Task[]>;
  taskProgress: TaskProgress;
  onHover: (state: HoverState) => void;
  onLeave: () => void;
  onCategoryClick: (category: HoverState) => void;
}

export function SidebarContent({
  hoverState,
  expandedCategory,
  taskData,
  taskProgress,
  onHover,
  onLeave,
  onCategoryClick
}: SidebarContentProps) {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="div">
      <Logo />
      <TasksGroup
        hoverState={hoverState}
        expandedCategory={expandedCategory}
        taskData={taskData}
        taskProgress={taskProgress}
        onHover={onHover}
        onLeave={onLeave}
        onCategoryClick={onCategoryClick}
      />
    </div>
  );
}
