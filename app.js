require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const routes = require("./src/routes");

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, {
  dbName: "applix",
});
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api", routes);

app.listen(5849, () => {
  console.log(`Server Started at 5849`);
});

module.exports = app;
