const express = require("express");

const User = require("../config/users");

const authControllers = require("../controllers/authentication/authControllers");
const validateToken = require("../middlewares/auth");

const router = express.Router();

router.post("/login", authControllers.postLogin);
router.post("/signup", authControllers.postSignUp);
router.get("/test", validateToken, async (req, resp) => {
	const result = await User.find();
	resp.json(result);
});

module.exports = router;
