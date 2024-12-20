// app.js
const express = require('express');
const app = express();

const UserController = require('./app/controllers/userController');
const ProductController = require('./app/controllers/productController');

app.use(express.json());

app.get('/users', UserController.getUsersController);
app.get('/user', UserController.getUserController);
app.post('/user/add', UserController.addUserController);
app.put('/user/update', UserController.updateUserController);
app.delete('/user/delete', UserController.deleteUserController);

app.get('/products', ProductController.getProductsController);
app.get('/product', ProductController.getProductController);
app.post('/product/add', ProductController.addProductController);
app.put('/product/update', ProductController.updateProductController);
app.delete('/product/delete', ProductController.deleteProductController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
