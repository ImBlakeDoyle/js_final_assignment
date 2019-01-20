const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const InquiryRoutes = require("./inquiry_routes");
const { google } = require("googleapis");


router.use("/booking", BookingRoutes);

  

router.get("/test", (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        "751376918859-h34cn4l582ln872b5fictm53lhiokkb2.apps.googleusercontent.com",
        "YqteBNX-2j09cwHDiOhn7Pbj",
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
        .then(res => console.log(res))
        .catch(err => console.log("ERROR!!!!!", err));
});

// router.use("/inquiry", InquiryRoutes);

module.exports = router;