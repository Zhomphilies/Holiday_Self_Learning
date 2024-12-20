const ProductModel = require('../models/productModel');

const addProductService = (name, price, description, stock, callback) => {
    ProductModel.addProduct(name, price, description, stock, (err, result) => {
        if (err) {
            return callback('Failed to create product');
        }
        callback(null, 'Success to create product');
    });
};

const getProductsService = (callback) => {
    ProductModel.getProducts((err, results) => {
        if (err) {
            return callback('Failed to find product', null);
        }
        callback(null, results);
    });
};

const getProductService = (id, callback) => {
    ProductModel.getProduct(id, (err, result) => {
        if (err) {
            return callback('Failed to find product', null);
        }
        callback(null, result);
    });
};

const updateProductService = (id, name, price, description, stock, callback) => {
    ProductModel.updateProduct(id, name, price, description, stock, (err, result) => {
        if (err) {
            return callback('Failed to update product', null);
        }
        callback(null, 'Success to update product');
    });
};

const deleteProductService = (id, callback) => {
    ProductModel.deleteProduct(id, (err, result) => {
        if (err) {
            return callback('Failed to delete product', null);
        }
        callback(null, 'Success to delete product');
    });
}

module.exports = {
    addProductService,
    getProductsService,
    getProductService,
    updateProductService,
    deleteProductService
};