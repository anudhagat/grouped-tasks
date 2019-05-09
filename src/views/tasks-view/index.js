import React, { useState, useEffect } from 'react';
import TaskItem from '../../components/task-item';
import { fetchTasks } from '../../services/task-service';

function TasksView(props) {
  const [groupTasks, setGroupTasks] = useState([]);

  const { setViewGroups, selectedGroup } = props;

  useEffect(() => {
    fetchTasks(selectedGroup).then(data => {
      setGroupTasks(data);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setViewGroups(true)}>Groups </button>
      {groupTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksView;
