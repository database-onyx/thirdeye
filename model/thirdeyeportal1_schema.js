const { text } = require("body-parser");
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    number: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
            // required: true
    }
});


const ImageModel = mongoose.model("portal10", imageSchema, "portal10");
module.exports = ImageModel;
