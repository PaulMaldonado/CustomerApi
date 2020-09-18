const express = require("express");
const router = express.Router();
const { getProductsAll, createProducts, getByIdProducts, deleteProduct, updateProduct } = require("../controllers/product.controller");

router.get('/products', getProductsAll);

router.post('/products', createProducts);

router.get('/products/:id', getByIdProducts);

router.delete('/products/:id', deleteProduct);

router.put('/products/:id', updateProduct);


module.exports = router;