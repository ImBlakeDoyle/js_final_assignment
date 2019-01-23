const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const InquiryController = require("./../controllers/inquiry_controller");

router.post("/new", InquiryController.create);

module.exports = router;