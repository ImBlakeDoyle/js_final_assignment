const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const InquiryRoutes = require("./inquiry_routes");
const { google } = require("googleapis");
const BookingController = require("./../controllers/booking_controller");
const AdminController = require("../controllers/user_controller");
const { celebrate, Joi } = require("celebrate");
const passport = require("passport");

router.use("/booking", BookingRoutes);

router.use("/inquiry", InquiryRoutes);

router.post("/register", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AdminController.create);

router.get("/", BookingController.homePage);

router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AdminController.login);

router.get("/admin/all", passport.authenticate("jwt", {session: false}), AdminController.index);

router.get("/test", (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
      );
    oauth2Client.setCredentials({
    refresh_token: "1/wMmG3mhhEtBEuBmvBdd3sU61TZxbV_ltp4VokEFFFEc"
    });
    const calendar = google.calendar({version: 'v3', auth:oauth2Client});
    calendar.events.list({
        calendarId: "8enqceun1tjelr7ologo30th2c@group.calendar.google.com",
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    })
        // .then(res => console.log(res.data.items))
        .then(res => {
            const events = res.data.items;
            console.log(events);
        })
        .catch(err => console.log("ERROR!!!!!", err));
});

// router.use("/inquiry", InquiryRoutes);

module.exports = router;