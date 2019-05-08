import React, { useState } from 'react';
import Groups from './views/groups-view';
import Task from './views/task-view';
import './App.css';

function App() {
  const [viewGroups, setViewGroups] = useState(true);

  return (
    <div>
      {viewGroups ? (
        <Groups setViewGroups={setViewGroups} />
      ) : (
        <Task setViewGroups={setViewGroups} />
      )}
    </div>
  );
}

export default App;
