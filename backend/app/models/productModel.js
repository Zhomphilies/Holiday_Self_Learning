const connection = require('../../db');

const addProduct = (name, price, description, stock, callback) => {
    const query = 'INSERT INTO products (product_name, product_price, product_description, product_stock) VALUE (?, ?, ?, ?)';
    connection.query(query, [name, price, description, stock], (err, result) => {
        callback(err, result); 
    });
};

const getProducts = (callback) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, result) => {
        callback(err, result);
    });
};

const getProduct = (id, callback) => {
    const query = 'SELECT * FROM products WHERE product_ID = ?';
    connection.query(query, [id], (err, result) => {
        callback(err, result);
    });
};

const updateProduct = (id, name, price, description, stock, callback) => {
    const query = 'UPDATE products SET product_name = ?, product_price = ?, product_description = ?, product_stock = ? WHERE product_ID = ?';
    connection.query(query, [name, price, description, stock, id], (err, result) => {
        callback(err, result);
    });
};

const deleteProduct = (id, callback) => {
    const query = 'DELETE FROM products WHERE product_ID = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return callback('Failed to delete product', null);
        }
        if (results.affectedRows === 0) {
            return callback('Failed to delete product', null);
        }
        callback(null, 'Success to delete product');
    });
};

module.exports = {
    addProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};