
const express = require('express');
const { createUser, createProduct, createOrder, getOrders,getProducts,getUsers} = require('../controllers/controllers.js');

const router = express.Router();

router.post('/user', createUser);
router.post('/product', createProduct);
router.post('/order', createOrder);
router.get('/users', getUsers);
router.get('/products', getProducts);
router.get('/orders', getOrders);


module.exports = router;