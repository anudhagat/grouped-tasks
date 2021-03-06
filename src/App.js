import React, { useState, useEffect } from 'react';
import GroupsView from './views/groups-view';
import TasksView from './views/tasks-view';
import './App.css';
import { fetchGroups } from './services/task-service';

function App() {
  const [viewGroups, setViewGroups] = useState(true);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState();

  useEffect(() => {
    fetchGroups().then(data => {
      setGroups(data);
    });
  }, []);

  return (
    <div className="app">
      {viewGroups ? (
        <GroupsView
          setViewGroups={setViewGroups}
          groups={groups}
          setSelectedGroup={setSelectedGroup}
        />
      ) : (
        <TasksView
          setViewGroups={setViewGroups}
          selectedGroup={selectedGroup}
        />
      )}
    </div>
  );
}

export default App;
