const express = require("express");
const cors = require("cors");
const dontenv = require("dotenv").config();

const userRouter = require("./routers/users");
const authRouter = require("./routers/authentication");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.use("/", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
	console.log(`Serevr started sucessfully at port ${PORT}`);
});
