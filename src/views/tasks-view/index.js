import React, { useState, useEffect } from 'react';
import TaskItem from '../../components/task-item';
import { fetchTasks } from '../../services/task-service';
import './styles.css';

function TasksView(props) {
  const [groupTasks, setGroupTasks] = useState([]);

  const { setViewGroups, selectedGroup } = props;

  useEffect(() => {
    fetchTasks(selectedGroup).then(data => {
      setGroupTasks(data);
    });
  }, []);

  return (
    <div className="view">
      <div className="title">
        <h2 className="titleText">{selectedGroup}</h2>
        <button className="backButton" onClick={() => setViewGroups(true)}>
          All Groups{' '}
        </button>
      </div>
      <ul className="list">
        {groupTasks.map(task => (
          <li key={task.id} className="listItem">
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksView;
