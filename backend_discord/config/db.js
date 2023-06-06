const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

// console.log("Mongo db URI: ", MONGO_URI);

const connectToDb = async () => {
	try {
		const result = await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		if (result) {
			console.log("Connected to DB");
		} else {
			console.log("some error");
		}
	} catch (err) {
		console.log("ERROR MASSAGE: ", err);
	}
};
connectToDb();
