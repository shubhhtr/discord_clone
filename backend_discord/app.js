const express = require('express');
const cors = require('cors');
const dontenv = require('dotenv');

const userRouter = require('./routers/users');

dontenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Serevr started sucessfully at port ${PORT}`);
});
