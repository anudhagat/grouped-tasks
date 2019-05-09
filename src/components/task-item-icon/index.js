import React from 'react';
import { ReactComponent as CompletedSvg } from '../../assets/completed.svg';
import { ReactComponent as LockedSvg } from '../../assets/locked.svg';
import { ReactComponent as IncompleteSvg } from '../../assets/incomplete.svg';

function TaskItemIcon({ locked, completedAt }) {
  return locked ? (
    <LockedSvg />
  ) : !!completedAt ? (
    <CompletedSvg />
  ) : (
    <IncompleteSvg />
  );
}

export default TaskItemIcon;
