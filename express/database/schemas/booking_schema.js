const { Schema } = require("mongoose");

const BookingSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        default: "no comment"
    },
    stripe_id: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    dates: {
        type: Array
    }
});

module.exports = BookingSchema;