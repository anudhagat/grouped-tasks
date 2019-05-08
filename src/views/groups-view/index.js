import React from 'react';

function Groups(props) {
  const { setViewGroups } = props;

  return (
    <div>
      <button onClick={() => setViewGroups(false)}>Tasks </button>
      <div>Groups View</div>
    </div>
  );
}

export default Groups;
