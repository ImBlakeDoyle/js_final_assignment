const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const InquiryRoutes = require("./inquiry_routes");

router.get("/", (req, res) => res.send("Home page"));

router.use("/booking", BookingRoutes);

router.use("/inquiry", InquiryRoutes);

module.exports = router;