import React from 'react';

export default function GroupsView(props) {
  const { setViewGroups, groups, setSelectedGroup } = props;

  function onGroupClick(groupName) {
    setViewGroups(false);
    setSelectedGroup(groupName);
  }

  return (
    <div>
      <div>Groups View</div>
      {groups.map(group => {
        return (
          <button key={group.name} onClick={() => onGroupClick(group.name)}>
            {group.name}
          </button>
        );
      })}
    </div>
  );
}
