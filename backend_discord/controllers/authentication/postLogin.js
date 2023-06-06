const User = require("../../config/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, resp) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email: email.toLowerCase() });

		if (user && (await bcrypt.compare(password, user.password))) {
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

			resp.status(200).json({
				userDetails: {
					username: user.username,
					token,
					email: user.email,
				},
			});
		} else {
			resp.status(400).send("Invalid Credentials!");
		}
	} catch (err) {
		resp.status(500).send(err.message);
	}
};

module.exports = postLogin;
