// app.js
const express = require('express');
const app = express();

const UserController = require('./controllers/userController');

app.use(express.json());

app.post('/add', UserController.addUserController);
app.get('/users', UserController.getUsersController);
app.get('/user', UserController.getUserController);
app.put('/update', UserController.updateUserController);
app.delete('/delete', UserController.deleteUserController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
