const express = require("express");
const router = express.Router();
const { celebrate, Join } = require("celebrate");
const InquiryController = require("./../controllers/inquiry_controller");

router.get("/", InquiryController.index);

module.exports = router;