import React from 'react';
import TaskItemIcon from '../task-item-icon';
import './styles.css';

function TaskItem({ task }) {
  const { task: taskName, completedAt, locked } = task;
  const taskStyle = locked
    ? 'locked'
    : !completedAt
    ? 'incomplete'
    : 'completed';
  return (
    <div className="item">
      <span className="icon">
        <TaskItemIcon locked={locked} completedAt={completedAt} />
      </span>
      <div className={taskStyle}>{taskName}</div>
    </div>
  );
}

export default TaskItem;
