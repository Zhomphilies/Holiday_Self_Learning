const ProductService = require('../services/productServices');

const addProductController = (req, res) => {
    const { name, price, description, stock } = req.body;
    ProductService.addProductService(name, price, description, stock, (err, message) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(message);
    });
};

const getProductsController = (req, res) => {
    ProductService.getProductsService((err, products) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(products);
    });
};

const getProductController = (req, res) => {
    const id = req.query.id;

    ProductService.getProductService(id, (err, product) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(product);
    });
};

const updateProductController = (req, res) => {
    const id = req.query.id;
    const { name, price, description, stock } = req.body;

    ProductService.updateProductService(id, name, price, description, stock, (err, message) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(message);
    });
};

const deleteProductController = (req, res) => {
    const id = req.query.id;

    ProductService.deleteProductService(id, (err, message) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(message);
    });
};

module.exports = {
    addProductController,
    getProductsController,
    getProductController,
    updateProductController,
    deleteProductController
}