import React from 'react';

function Task(props) {
  const { setViewGroups } = props;

  return (
    <div>
      <button onClick={() => setViewGroups(true)}>Groups </button>
      <div>Task View</div>
    </div>
  );
}

export default Task;
