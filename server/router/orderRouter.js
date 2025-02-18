const express = require('express');
const { getOrders, createOrder } = require('../controllers/controllers.js');

const router = express.Router();

router.get('/orders', getOrders);
router.post('/order', createOrder);

module.exports = router