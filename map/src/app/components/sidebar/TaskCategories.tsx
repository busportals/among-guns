import type { HoverState, Task } from '../shared/types';
import { TaskCategory } from './TaskCategory';
import { BotanicsIcon } from '../icons/BotanicsIcon';
import { MedbayIcon } from '../icons/MedbayIcon';
import { OfficesIcon } from '../icons/OfficesIcon';
import { StorageIcon } from '../icons/StorageIcon';
import { PowerIcon } from '../icons/PowerIcon';
import { VentsIcon } from '../icons/VentsIcon';

interface TaskCategoriesProps {
  hoverState: HoverState;
  expandedCategory: HoverState;
  taskData: Record<string, Task[]>;
  onHover: (state: HoverState) => void;
  onLeave: () => void;
  onCategoryClick: (category: HoverState) => void;
}

export function TaskCategories({
  hoverState,
  expandedCategory,
  taskData,
  onHover,
  onLeave,
  onCategoryClick
}: TaskCategoriesProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16.25px] items-start relative shrink-0 w-full" data-name="TASK CATEGORIES">
      <TaskCategory
        icon={<BotanicsIcon isActive={hoverState === 'botanics'} />}
        label="BOTANICS"
        categoryId="botanics"
        count={2}
        tasks={taskData.botanics || []}
        isActive={hoverState === 'botanics'}
        isExpanded={expandedCategory === 'botanics'}
        onHover={() => onHover('botanics')}
        onLeave={onLeave}
        onClick={() => onCategoryClick('botanics')}
      />
      <TaskCategory
        icon={<MedbayIcon isActive={hoverState === 'medbay'} />}
        label="MEDBAY"
        categoryId="medbay"
        count={4}
        tasks={taskData.medbay || []}
        isActive={hoverState === 'medbay'}
        isExpanded={expandedCategory === 'medbay'}
        onHover={() => onHover('medbay')}
        onLeave={onLeave}
        onClick={() => onCategoryClick('medbay')}
      />
      <TaskCategory
        icon={<OfficesIcon isActive={hoverState === 'offices'} />}
        label="OFFICES"
        categoryId="offices"
        count={2}
        tasks={taskData.offices || []}
        isActive={hoverState === 'offices'}
        isExpanded={expandedCategory === 'offices'}
        onHover={() => onHover('offices')}
        onLeave={onLeave}
        onClick={() => onCategoryClick('offices')}
      />
      <TaskCategory
        icon={<StorageIcon isActive={hoverState === 'storage'} />}
        label="STORAGE"
        categoryId="storage"
        count={2}
        tasks={taskData.storage || []}
        isActive={hoverState === 'storage'}
        isExpanded={expandedCategory === 'storage'}
        onHover={() => onHover('storage')}
        onLeave={onLeave}
        onClick={() => onCategoryClick('storage')}
      />
      <TaskCategory
        icon={<PowerIcon isActive={hoverState === 'power'} />}
        label="POWER"
        categoryId="power"
        count={2}
        tasks={taskData.power || []}
        isActive={hoverState === 'power'}
        isExpanded={expandedCategory === 'power'}
        onHover={() => onHover('power')}
        onLeave={onLeave}
        onClick={() => onCategoryClick('power')}
      />
      <TaskCategory
        icon={<VentsIcon isActive={hoverState === 'vents'} />}
        label="VENTS"
        categoryId="vents"
        count={7}
        tasks={taskData.vents || []}
        isActive={hoverState === 'vents'}
        isExpanded={expandedCategory === 'vents'}
        onHover={() => onHover('vents')}
        onLeave={onLeave}
        onClick={() => onCategoryClick('vents')}
      />
    </div>
  );
}
