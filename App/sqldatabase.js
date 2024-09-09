import SQLite from 'react-native-sqlite-storage';

const database_name = "aqad.db";
const database_version = "1.0";
const database_displayname = "ADAQ Database";
const database_size = 200000;

const db = SQLite.openDatabase(
  database_name,
  database_version,
  database_displayname,
  database_size
);


export const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, age INTEGER)',
        [],
        () => { console.log('Table created successfully'); },
        error => { console.log('Error creating table: ', error.message); }
      );
    });
  };



  export const addUser = (email, name, age) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (email, name, age) VALUES (?, ?, ?)',
        [email, name, age],
        () => { console.log('User added successfully'); },
        error => { console.log('Error adding user: ', error.message); }
      );
    });
  };
  

  export const getUsers = (callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (tx, results) => {
          const rows = results.rows.raw(); // or results.rows.item(i)
          callback(rows);
        },
        error => { console.log('Error fetching users: ', error.message); }
      );
    });
  };


  export const updateUser = (id, name, age) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE users SET name = ?, age = ? WHERE id = ?',
        [name, age, id],
        () => { console.log('User updated successfully'); },
        error => { console.log('Error updating user: ', error.message); }
      );
    });
  };
  
  
  

export default db;
