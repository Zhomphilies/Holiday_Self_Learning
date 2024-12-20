const connection = require('../db');

const addUser = (name, email, password, callback) => {
  const query = 'INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, password], (err, results) => {
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
  const query = 'UPDATE users SET user_name = ?, user_email = ? WHERE user_ID = ?';
  connection.query(query, [name, email, id], (err, results) => {
    callback(err, results);
  });
};

const deleteUser = (id, callback) => {
  const query = 'DELETE FROM users WHERE user_ID = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback('Error deleting data', null);
    }
    if (results.affectedRows === 0) {
      return callback('User not found', null);
    }
    callback(null, 'Data deleted successfully');
  });
};

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
