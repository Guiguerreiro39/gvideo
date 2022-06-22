const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "username field is required"],
            maxlength: 30
        },
        password: {
            type: String,
            required: [true, "password field is required"],
            maxlength: 30
        },
        fullName: {
            type: String,
            required: [true, "Full name field is required"],
            maxlength: 200
        },
    },
    { timestamps: true }
);

module.exports = model("Users", usersSchema);
