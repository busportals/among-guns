import type { HoverState, Task, TaskProgress } from '../shared/types';
import { SidebarContent } from './SidebarContent';

interface SidebarProps {
  hoverState: HoverState;
  expandedCategory: HoverState;
  taskData: Record<string, Task[]>;
  taskProgress: TaskProgress;
  onHover: (state: HoverState) => void;
  onLeave: () => void;
  onCategoryClick: (category: HoverState) => void;
}

export function Sidebar({
  hoverState,
  expandedCategory,
  taskData,
  taskProgress,
  onHover,
  onLeave,
  onCategoryClick
}: SidebarProps) {
  return (
    <div className="absolute inset-y-0 left-0 z-10">
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-y-0 left-0 w-[368px]"
        style={{ backgroundColor: 'rgba(15, 21, 25, 0.85)' }}
      />
      {/* Sidebar content */}
      <div className="absolute content-stretch flex flex-col items-start left-[54px] top-[63px] w-[260px]">
        <SidebarContent
          hoverState={hoverState}
          expandedCategory={expandedCategory}
          taskData={taskData}
          taskProgress={taskProgress}
          onHover={onHover}
          onLeave={onLeave}
          onCategoryClick={onCategoryClick}
        />
      </div>
    </div>
  );
}
