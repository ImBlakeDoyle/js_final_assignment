const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const InquiryRoutes = require("./inquiry_routes");
const { google } = require("googleapis");
const BookingController = require("./../controllers/booking_controller");
const UserController = require("../controllers/user_controller");
const { celebrate, Joi } = require("celebrate");
// const passport = require("passport");

router.use("/booking", BookingRoutes);

router.use("/inquiry", InquiryRoutes);

router.get("/", BookingController.homePage);

// router.get("/admin/all", passport.authenticate("jwt", {session: false}), AdminController.index);

router.get("/admin/all", UserController.index);

router.post("/register", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), UserController.create);

router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), UserController.login);

router.delete("/admin/:id", UserController.deleteEntry)

module.exports = router;