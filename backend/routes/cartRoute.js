const express = require('express');
const { createCart } = require('../controllers/cartController');

const router = express.Router();


router.route('/addToCart').post(createCart);

module.exports = router