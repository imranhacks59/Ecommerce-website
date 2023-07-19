const express = require("express");
const { registerUser, loginUser, logout, getUserDetails } = require("../controllers/userController");
const { isAuthenticateUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticateUser, getUserDetails)

module.exports = router