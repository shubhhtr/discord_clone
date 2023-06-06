const express = require("express");

const authControllers = require("../controllers/authentication/authControllers");

const router = express.Router();

router.post("/login", authControllers.postLogin);

router.post("/signup", authControllers.postSignUp);

module.exports = router;
