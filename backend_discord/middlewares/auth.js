const jwt = require("jsonwebtoken");

const validateToken = async (req, resp, next) => {
	let token = req.body.token;

	if (!token) {
		return resp.status(403).send("No token found");
	}

	try {
		//Token is mostly in the form of "Bearer vduysgfuishdvbfydbcj"
		//To remove Bearer
		token = token.replace(/^Bearer\s+/, ""); //????????????????????
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.user = decoded;
	} catch (err) {
		resp.status(401).send("Invalid Token");
	}

	return next();
};

module.exports = validateToken;
