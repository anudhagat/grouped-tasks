## Endpoints

In this app, we have two views, the groups view where the user sees the list of task sets (groups) and the tasks view where the user can see the list of tasks in a given group. Let's assume my api is served from https://myapi.com/api/v1. To support the two views, we need to have the following two `GET` endpoints:

1. GET `https://myapi.com/api/v1/groups` : This will return the list of groups of tasks in an array of objects. For each group object, we have the following fields:

- `id`: type int, id from the task_set table)
- `name`: type string, group_name from the task_set table)
- `numCompleted`: type int, an aggregate value obtained by combining task_set and task tables where completedAt column is not null
- `tasks` type array of int, array of ids from the task table having the same group id).

Example Request:

```
$ curl https://myapi.com/api/v1/groups
```

Example Response:

```
[
    {
        "id": 1,
        "name": "Purchases",
        "numCompleted": 0,
        tasks: [ 1, 2, 3, 4, 5 ]
    },
    {
        "id": 2,
        "name": "Build Airplane",
        "numCompleted": 0,
        tasks: [ 6,7,8 ]
    }
]
```

2. GET `https://myapi.com/api/v1/tasks/<group_id>`: This will return an array of task objects. Each task object has the following fields:

- `id`: type int, id from the task table
- `completedAt`: type string, timestamp in ISO format or null; completedAt field from the task table
- `group`: type string, group_name from the task_set table
- `task`: type string, task_name from the task table
- `locked`: type boolean, calculated from using the dependency and task tables

Example Request:

```
$ curl https://myapi.com/api/v1/tasks/2
```

Example Response:

```
[
    {
        completedAt: null,
        group: "Build Airplane",
        id: 6,
        locked: true,
        task: "Hammer nails into wood"
    },
    {
        completedAt: null,
        group: "Build Airplane",
        id: 7,
        locked: true,
        task: "Paint wings"
    },
    {
        completedAt: null,
        group: "Build Airplane",
        id: 8,
        locked: false,
        task: "Have a snack"
    }
]
```

To support toggling the status of a task, we need an additional endpoint that will update the `completedAt` timestamp for a given task:

3. PUT `https://myapi.com/api/v1/tasks/<task_id>`

Parameters required are: `completed`, a boolean value. If true, the completedAt timestamp column is filled with the current time on the server in ISO format. If false, it is set to a null value.

Example Request:

```
$ curl -X PUT -d completed=true https://myapi.com/api/v1/tasks/1
```

Example Response:

Success: 200

```
    {
        completedAt: '2019-05-09T08:18:24.798Z'
        dependencyIds: []
        group: "Purchases"
        id: 1
        locked: false
        task: "Go to the bank"
    }
```

Error: 400

- error msg: 'task with this id does not exist'
- error msg: 'required parameter was not provided'
