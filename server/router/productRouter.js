const express = require('express');
const { getProducts, createProduct } = require('../controllers/controllers.js');

const router = express.Router();

router.get('/products', getProducts);
router.post('/product', createProduct);

module.exports = router