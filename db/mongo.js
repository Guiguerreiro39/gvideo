const mongoose = require("mongoose");

const init = () => {
    let conn = mongoose.connection;
    
    let url
    if (process.env.NODE_ENV == "develop") url = process.env.DB_URL
    if (process.env.NODE_ENV == "test") url = process.env.DB_TEST_URL

    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .catch((err) => {
            console.error("Error: " + err.stack);
            process.exit(1);
        });

    conn.on("open", () => {
        console.log("Connected to database");
    });
};

mongoose.Promise = global.Promise;

module.exports = init;
