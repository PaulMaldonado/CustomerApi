const express = require("express");
const router = express.Router();
const { getProductsAll, createProducts, getByIdProducts } = require("../controllers/product.controller");

router.get('/products', getProductsAll);

router.post('/products', createProducts);

router.get('/products/:id', getByIdProducts);


module.exports = router;