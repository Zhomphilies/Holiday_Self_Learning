const connection = require('../db');

const addUser = (name, email, callback) => {
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  connection.query(query, [name, email], (err, results) => {
    callback(err, results);
  });
};

const getUsers = (callback) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    callback(err, results);
  });
};

const getUser = (id, callback) => {
    const query = 'SELECT * FROM users WHERE user_ID = ?';
    connection.query(query, [id], (err, results) => {
      callback(err, results);
    });
}

const updateUser = (id, name, email, callback) => {
  const query = 'UPDATE users SET name = ?, email = ? WHERE user_ID = ?';
  connection.query(query, [name, email, id], (err, results) => {
    callback(err, results);
  });
};

const deleteUser = (id, callback) => {
  const query = 'DELETE FROM users WHERE user_ID = ?';
  connection.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
