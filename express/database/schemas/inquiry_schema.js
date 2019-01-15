const { Schema } = require("mongoose");

const InquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    comment: {
        type: String
    }
});

module.exports = InquirySchema;