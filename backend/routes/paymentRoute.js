const express  = require('express');
const { processPayment, sendStripeApiKey } = require('../controllers/paymentController');
const { isAuthenticateUser } = require("../middleware/auth");

const router=express.Router();

router.route('/payment/process').post(isAuthenticateUser,processPayment)

router.route('/stripeapikey').get(isAuthenticateUser,sendStripeApiKey)

module.exports = router