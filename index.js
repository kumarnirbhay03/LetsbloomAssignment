const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = require("./db");
connectToMongo();

const addDummyData = require("./addDummyData");
addDummyData();

const app = express();
app.use(express.json());

app.use("/", require("./bookRoutes"));

app.listen(process.env.port, () => {
    console.log(`library app listening on port ${process.env.port}`);
});
