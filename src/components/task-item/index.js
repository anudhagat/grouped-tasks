import React from 'react';

function TaskItem({ task }) {
  const { id, group, task: taskName, completedAt, locked } = task;

  return (
    <div>
      <div>{taskName}</div>
    </div>
  );
}

export default TaskItem;
