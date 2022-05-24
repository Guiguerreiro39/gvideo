// Importing required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path')

// parse env variables
if (process.env.NODE_ENV != "production") require("dotenv")?.config();

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

// Serve static assets if in production
if (process.env.NODE_ENV == "production") {
    // Set static folder
    app.use(express.static('client/build'))

    // Any request that isn't /api will send the static file
    app.get('*', (_, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Listening to port
app.listen(port);
console.log(`Listening on http://localhost:${port}/api`);

module.exports = app
