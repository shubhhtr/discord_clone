const user = require("../config/users");

const getUsers = (req, resp) => {
	resp.send("working");
};

const addUsers = async (req, resp) => {
	try {
		const result = await user(req.body);
		const op = await result.save();
		resp.send(op);
	} catch (err) {
		console.log(err.message);
		resp.send(err.message);
	}
};

module.exports = { getUsers, addUsers };
