import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tasks.db');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, groupId INTEGER, title TEXT, description TEXT, status TEXT);'
    );
  });
};

export const insertGroup = (name, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO groups (name) VALUES (?);',
      [name],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};

export const insertTask = (groupId, title, description, status, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tasks (groupId, title, description, status) VALUES (?, ?, ?, ?);',
      [groupId, title, description, status],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};

export const getGroups = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM groups;',
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.log(error)
    );
  });
};

export const getTasks = (groupId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM tasks WHERE groupId = ?;',
      [groupId],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.log(error)
    );
  });
};

export const updateTaskStatus = (id, status, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE tasks SET status = ? WHERE id = ?;',
      [status, id],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};

export const deleteTask = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM tasks WHERE id = ?;',
      [id],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};
