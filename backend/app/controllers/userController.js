const UserService = require('../services/userService');

const addUserController = (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;
  UserService.addUserService(name, email, password, passwordConfirm, (err, message) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(message);
  });
};

const getUsersController = (req, res) => {
  UserService.getUsersService((err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(users);
  });
};

const getUserController = (req, res) => {
  const id = req.query.id;

  UserService.getUserService(id, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

const updateUserController = (req, res) => {
  const id = req.query.id;
  const { name, email } = req.body;
  
  UserService.updateUserService(id, name, email, (err, message) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(message);
  });
};

const deleteUserController = (req, res) => {
  const id = req.query.id;
  UserService.deleteUserService(id, (err, message) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(message);
  });
};

module.exports = {
  addUserController,
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController
};
