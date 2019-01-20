const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BookingController = require("./../controllers/booking_controller");

router.post("/new", BookingController.create);

module.exports = router;