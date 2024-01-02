const express = require("express");
const {userRegisterController,userLoginController} = require("../controllers/userController")

const router = express.Router();

//User Registration || POST
router.post("/register",userRegisterController);

//User Login || POST
router.post("/login",userLoginController);


module.exports = router;