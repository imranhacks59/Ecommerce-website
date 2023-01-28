const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteproduct, getProductDetails} = require("../controllers/productController");
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(isAuthenticateUser, createProduct);
// upar aur kuchh niche me isAuthuse krng jo admin hai wahi kar ske

router.route("/product/:id").get(getProductDetails)

module.exports = router;