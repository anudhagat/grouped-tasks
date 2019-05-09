CREATE DATABASE tasks;

CREATE TABLE task_set
(
    id int NOT NULL PRIMARY KEY,
    group_name varchar(255)
);

CREATE TABLE task
(
    id int NOT NULL PRIMARY KEY,
    task_name varchar(255),
    completedAt VARCHAR(255) DEFAULT NULL,
    task_set_id int FOREIGN KEY REFERENCES task_set(id)
);

CREATE TABLE dependency
(
    id int NOT NULL PRIMARY KEY,
    task_id int FOREIGN KEY REFERENCES task(id),
    dependency_id int FOREIGN KEY REFERENCES task(id)
);