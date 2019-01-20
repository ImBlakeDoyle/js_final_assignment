const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const InquiryRoutes = require("./inquiry_routes");
const { google } = require("googleapis");


router.use("/booking", BookingRoutes);

  

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