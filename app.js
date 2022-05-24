// Importing required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// parse env variables
require("dotenv").config();

// Configuring port
const port = process.env.PORT || 9000;

// MongoDB
require("./db/mongo.js")();

// Start express
const app = express();

// Configure middlewares
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_ORIGIN,
    })
);
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Defining route middleware
app.use("/api", require("./routes/api"));

// Listening to port
app.listen(port);
console.log(`Listening on http://localhost:${port}/api`);

module.exports = app
