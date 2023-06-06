const User = require("../../config/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postSignUp = async (req, resp) => {
	try {
		const { username, email, password } = req.body;

		//All the field validations are already being done through db schema

		// const isUserAlreadyExist = await User.exists({
		// 	email: email.toLowerCase(),
		// });
		// if (isUserAlreadyExist) {
		// 	resp.status(409).send("E-mail already in use");
		// }

		const encryptedPass = await bcrypt.hash(password, 10);

		const user = await User.create({
			username,
			email: email.toLowerCase(),
			password: encryptedPass,
		});

		const token = jwt.sign(
			{
				userId: user._id,
				email: user.email,
			},
			process.env.JWT_KEY,
			{
				expiresIn: "24h",
			}
		);

		resp.status(201).json({
			userDetails: {
				username: user.username,
				token,
				email: user.email,
			},
		});
	} catch (err) {
		resp.status(500).send(err.message);
	}
};

module.exports = postSignUp;
