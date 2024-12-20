const UserModel = require('../models/userModel');

const addUserService = (name, email, callback) => {
  UserModel.addUser(name, email, (err, results) => {
    if (err) {
      return callback('Error inserting data', null);
    }
    callback(null, 'Data inserted successfully');
  });
};

const getUsersService = (callback) => {
  UserModel.getUsers((err, results) => {
    if (err) {
      return callback('Error to find the data', null);
    }
    callback(null, results);
  });
};

const getUserService = (id, callback) => {
  UserModel.getUser(id, (err, results) => {
    if(err) {
      return callback('Error to find the data');
    }
    callback(null, results);
  });
}

const updateUserService = (id, name, email, callback) => {
  UserModel.updateUser(id, name, email, (err, results) => {
    if (err) {
      return callback('Error updating data', null);
    }
    callback(null, 'Data updated successfully');
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
