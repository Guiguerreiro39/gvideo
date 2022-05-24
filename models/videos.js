const { Schema, model } = require("mongoose");

const videosSchema = new Schema(
    {
        slug: {
            type: String,
            required: [true, "slug field is required"],
            maxlength: 20
        },
        title: {
            type: String,
            required: [true, "title field is required"],
            maxlength: 40
        },
        description: {
            type: String,
            defaul: "",
            maxlength: 200
        },
        url: {
            type: String,
            required: [true, "url field is required"],
        },
        thumbnail: {
            type: String,
            required: [true, "thumbnail field is required"]
        },
        isPublic: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Videos", videosSchema);
