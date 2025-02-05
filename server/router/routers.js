
const express = require('express');
const { createUser, createProduct, createOrder} = require('../controllers/controllers.js');

const router = express.Router();

router.post('/user', createUser);
router.post('/product', createProduct);
router.post('/order', createOrder);


module.exports = router;