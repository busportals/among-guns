import type { HoverState, Task } from '../shared/types';
import { TaskItem } from './TaskItem';

interface TaskCategoryProps {
  icon: React.ReactNode;
  label: string;
  categoryId: HoverState;
  count: number;
  tasks: Task[];
  isActive?: boolean;
  isExpanded?: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

export function TaskCategory({
  icon,
  label,
  categoryId,
  count,
  tasks,
  isActive,
  isExpanded,
  onHover,
  onLeave,
  onClick
}: TaskCategoryProps) {
  return (
    <div
      className="content-stretch flex flex-col gap-[7.161px] items-start relative shrink-0 w-[260px]"
      data-name="task category"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer"
        onClick={onClick}
      >
        <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
          {icon}
          <p
            className={`font-['Space_Mono','PP_Supply_Mono',monospace] leading-[0.911] not-italic relative shrink-0 text-[18px] text-center text-shadow-[0px_4.062px_23.519px_#080f15] tracking-[4.86px] ${isActive ? 'text-[#c0c9d2]' : 'text-[#6c7b8b]'}`}
            style={{ transition: 'color 0.4s ease-in-out' }}
          >
            {label}
          </p>
        </div>
        <p
          className={`font-['Space_Mono','PP_Supply_Mono',monospace] leading-[0.911] not-italic relative shrink-0 text-[18px] text-center text-shadow-[0px_4.062px_23.519px_#080f15] tracking-[4.86px] ${isActive ? 'text-[#c0c9d2]' : 'text-[#6c7b8b]'}`}
          style={{ transition: 'color 0.4s ease-in-out' }}
        >
          {count}
        </p>
      </div>

      {/* Expandable task list */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out w-full"
        style={{
          maxHeight: isExpanded ? `${tasks.length * 25 + 16}px` : '0px',
          opacity: isExpanded ? 1 : 0
        }}
      >
        <div className="flex flex-col gap-[8px] pl-0 pt-[8px] pb-[8px] pr-0">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>

      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.24px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 0.477398">
            <path d="M0 0.238699H260" id="Vector 58" stroke="var(--stroke-0, #1E2529)" strokeWidth="0.477398" />
          </svg>
        </div>
      </div>
    </div>
  );
}
