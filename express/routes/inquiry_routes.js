const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const InquiryController = require("./../controllers/inquiry_controller");

// router.get("/", InquiryController.index);

module.exports = router;