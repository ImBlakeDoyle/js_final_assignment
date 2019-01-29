const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BookingController = require("./../controllers/booking_controller");

router.post("/new", BookingController.create);

router.post("/stripe", BookingController.payment);
// router.get("/new", )

router.get("/invalid", BookingController.populateInvalidDates);

module.exports = router;