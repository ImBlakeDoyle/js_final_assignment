const mongoose = require("mongoose");
const InquirySchema = require("./../schemas/inquiry_schema");

const InquiryModel = mongoose.model("Inquiry", InquirySchema);

module.exports = InquiryModel;