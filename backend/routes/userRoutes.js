const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout, forgetPassword, resetPassword, getUserDetails, updateProfile, updatePassword, getAllUser, getSingleUser, updateRole, deleteProfile } = require("../contollers/userControler"); // Import the registerUser function from the controller.
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(isAuthenticatedUser,updatePassword);
router.route("/me/update").put(isAuthenticatedUser,updateProfile);
router.route("/admin/user").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser);
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser).put(isAuthenticatedUser,authorizeRoles("admin"),updateRole).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProfile);
module.exports = router;
