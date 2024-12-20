const UserModel = require('../models/userModel');
const connection = require('../../db');

const checkUser = (email, callback) => {
  const query = 'SELECT * FROM users WHERE user_email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) {
      return callback("Error checking email in database", null);
    }
    if (results.length > 0) {
      return callback('Email already exists', null);
    }
    callback(null, 'Email is available');
  });
};

const addUserService = (name, email, password, passwordConfirm, callback) => {
  if(passwordConfirm !== password) {
    return callback('Password doesn\'t match');
  }
  if (password.length < 8) {
    return callback('Password must atleast 8 character ');
  }
  if (!/[A-Z]/.test(password)) {
    return callback('Password must contain uppercase');
  }
  if (!/[a-z]/.test(password)) {
    return callback('Password must contian lowercase');
  }
  if (!/[0-9]/.test(password)) {
    return callback('Password must contain number');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return callback('Password must contain symbol');
  }

  checkUser(email, (err, message) => {
    if (err) {
      return callback(err);
    }

    UserModel.addUser(name, email, password, (err, results) => {
      if (err) {
        return callback('Failed to create user');
      }
      callback(null, 'Successfully to creeate user');
    });
  });
};

const getUsersService = (callback) => {
  UserModel.getUsers((err, results) => {
    if (err) {
      return callback('Failed to find user', null);
    }
    callback(null, results);
  });
};

const getUserService = (id, callback) => {
  UserModel.getUser(id, (err, results) => {
    if(err) {
      return callback('Error to find user', null);
    }
    callback(null, results);
  });
}

const updateUserService = (id, name, email, callback) => {
  UserModel.updateUser(id, name, email, (err, results) => {
    
    if (err) {
      return callback('Error updating data', null);
    }
    
    checkUser(email, (err, message) => {
      if (err) {
        return callback(err, "Email has been taken");
      }
      
      callback(null, 'Data updated successfully');
    });
  });
};

const deleteUserService = (id, callback) => {
  UserModel.deleteUser(id, (err, results) => {
    if (err) {
      return callback('Error deleting data', null);
    }
    callback(null, 'Data deleted successfully');
  });
};

module.exports = {
  addUserService,
  getUsersService,
  getUserService,
  updateUserService,
  deleteUserService
};
