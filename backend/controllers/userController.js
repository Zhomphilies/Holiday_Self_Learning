const UserService = require('../services/userService');

const addUserController = (req, res) => {
  const { name, email } = req.body;
  UserService.addUserService(name, email, (err, message) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(message);
  });
};

const getUsersController = (req, res) => {
  UserService.getUsersService((err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(users);
  });
};

const getUserController = (req, res) => {
  const id = req.query.id;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID harus berupa angka' });
  }

  UserService.getUserService(id, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(user);
  });
};

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  UserService.updateUserService(id, name, email, (err, message) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(message);
  });
};

const deleteUserController = (req, res) => {
  const { id } = req.params;
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
