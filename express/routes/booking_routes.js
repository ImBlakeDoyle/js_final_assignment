const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BookingController = require("./../controllers/booking_controller");

router.post("/new", BookingController.create);

router.get("/", BookingController.homePage);

// router.post("/stripe", BookingController.payment);

router.get("/invalid", BookingController.populateInvalidDates);

module.exports = router;