const express = require("express");
const router = express.Router();
const { getCustomersAll, createCustomers, getById, deleteById, updateById } = require("../controllers/customer.controller");

router.get('/customers', getCustomersAll);

router.post('/customers', createCustomers);

router.get('/customers/:id', getById);

router.delete('/customers/:id', deleteById);

router.put('/customers/:id', updateById);

module.exports = router;