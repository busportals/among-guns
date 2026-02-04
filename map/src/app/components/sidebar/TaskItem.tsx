import type { Task } from '../shared/types';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <p
      className="font-['PP_Supply_Mono',monospace] whitespace-nowrap overflow-hidden text-ellipsis pr-0"
      style={{
        color: task.completed ? '#41556A' : '#97AABF',
        textAlign: 'left',
        textShadow: '0 4.062px 23.519px #080F15',
        WebkitTextStrokeWidth: '0.2px',
        WebkitTextStrokeColor: '#69957B',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '91.092%',
        letterSpacing: '0.3px',
        textDecoration: task.completed ? 'line-through' : 'none',
        textDecorationColor: '#41556A',
        transition: 'all 0.3s ease-in-out',
        textTransform: 'uppercase',
        paddingRight: 0
      }}
    >
      {task.description}
    </p>
  );
}
