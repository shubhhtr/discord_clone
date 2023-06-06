const express = require("express");

const { getUsers, addUsers } = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers);

module.exports = router;
