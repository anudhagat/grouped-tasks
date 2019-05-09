import React, { useState } from 'react';
import TaskItemIcon from '../task-item-icon';
import './styles.css';

function TaskItem({ task }) {
  const { task: taskName, completedAt, locked } = task;
  const isComplete = completedAt !== null && completedAt !== undefined;

  const [complete, setComplete] = useState(isComplete);
  const taskStyle = locked ? 'locked' : complete ? 'completed' : 'incomplete';

  function handleCompleteToggle(complete) {
    // call to backend to change task status
    // .then (() => ...
    setComplete(!complete);
  }

  return (
    <label className="item">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => handleCompleteToggle(complete)}
      />

      <span className="icon">
        <TaskItemIcon locked={locked} completedAt={complete} />
      </span>
      <div className={taskStyle}>{taskName}</div>
    </label>
  );
}

export default TaskItem;
