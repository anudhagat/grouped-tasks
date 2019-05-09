import data from './data';

export function fetchGroups() {
  let hash = {};
  let groupName, completedAt;
  for (let i = 0; i < data.length; i++) {
    groupName = data[i].group;
    completedAt = data[i].completedAt;

    if (hash.hasOwnProperty(groupName)) {
      hash[groupName].tasks.push(data[i].id);
      if (completedAt) {
        hash[groupName].numCompleted++;
      }
    } else {
      hash[groupName] = {
        name: groupName,
        tasks: [data[i].id],
        numCompleted: completedAt ? 1 : 0,
      };
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Object.values(hash)), 400);
  });
}

export function fetchTasks(group) {
  const tasks = data.filter(task => task.group === group);

  let hashTasks = {};
  for (let i = 0; i < data.length; i++) {
    hashTasks[data[i].id] = data[i];
  }

  let taskDependencies;
  // add locked flag
  for (let i = 0; i < tasks.length; i++) {
    taskDependencies = tasks[i].dependencyIds;
    if (taskDependencies.length === 0) {
      tasks[i].locked = false;
    } else {
      tasks[i].locked = taskDependencies.reduce((acc, curr) => {
        const isCurrentTaskNotCompleted =
          hashTasks[curr].completedAt === null ||
          hashTasks[curr].completedAt === undefined;
        return acc || isCurrentTaskNotCompleted;
      }, false);
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(tasks), 400);
  });
}
