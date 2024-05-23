const express = require("express");

const{ getAllProducts,createProducts, updateProducts, deleteProducts, getProductDetails, getProductReviews, deleteReview}=require("../contollers/productController")
const{isAuthenticatedUser,authorizeRoles} = require("../middleware/auth")
const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProducts);
router.route("/products/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProducts).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProducts).get(getProductDetails);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)
module.exports = router