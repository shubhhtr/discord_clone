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
		const decode = jwt.verify(token, process.env.JWT_KEY);
	} catch (err) {
		resp.status(401).send("Invalid Token");
	}
};
