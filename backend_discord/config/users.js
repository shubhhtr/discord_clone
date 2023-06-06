const mongoose = require("mongoose");
const validator = require("validator");
require("./db");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: [true, "username already in use"],
		required: true,
		lowercase: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email"],
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
});

module.exports = mongoose.model("users", userSchema);
