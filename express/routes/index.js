const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const InquiryRoutes = require("./inquiry_routes");


router.use("/booking", BookingRoutes);

// router.use("/inquiry", InquiryRoutes);

module.exports = router;