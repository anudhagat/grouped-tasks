import React from 'react';
import { ReactComponent as GroupSvg } from '../../assets/group.svg';
import './styles.css';

export default function GroupsView(props) {
  const { setViewGroups, groups, setSelectedGroup } = props;

  function onGroupClick(groupName) {
    setViewGroups(false);
    setSelectedGroup(groupName);
  }

  return (
    <div className="view">
      <h2 className="title">Things To Do</h2>
      <ul className="list">
        {groups.map(group => {
          const tasksCompletedText = `${group.numCompleted} of ${
            group.tasks.length
          } tasks complete`;
          return (
            <li key={group.name} className="listItem">
              <button
                onClick={() => onGroupClick(group.name)}
                className="groupLink"
              >
                <span className="groupSvg">
                  <GroupSvg />
                </span>
                <span className="groupInfo">
                  <span className="groupName">{group.name}</span>
                  <span className="completedText">{tasksCompletedText}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
