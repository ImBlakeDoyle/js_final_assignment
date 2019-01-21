const BookingModel = require("./../database/models/booking_model");
const { google } = require("googleapis");

async function create(req, res) {
    const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = req.body;
    // const newCheckin = checkin.toISOString();
    // const newCheckoutDate = checkout.toISOString();
    const booking = await BookingModel.create({ name, email, guests, checkin, checkout, cost, phone, comment, stripe_id});


    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
    );
    oauth2Client.setCredentials({
        refresh_token: "1/wMmG3mhhEtBEuBmvBdd3sU61TZxbV_ltp4VokEFFFEc"
    });
    // const newCheckinDate = checkin.split("/").reverse().join("-");
    const newCheckinDate = "2019-01-25";
    // const newCheckoutDate = checkout.split("/").reverse().join("-");
    const newCheckoutDate = "2019-01-28";
    const event = {
        'summary': `${name} ${guests} ${comment}`,
        'start': {
          'date': `${newCheckinDate}`,
          'timeZone': 'Australia/Sydney',
        },
        'end': {
          'date': `${newCheckoutDate}`,
          'timeZone': 'Australia/Sydney',
        },
        'attendees': [
          {'email': `${email}`, 'phone': `${phone}`},
        ]
      };
    const calendar = google.calendar({version: 'v3', auth:oauth2Client});
    calendar.events.insert({
        calendarId: "8enqceun1tjelr7ologo30th2c@group.calendar.google.com",
        resource: event,
    })
    .then(res => {
        const events = res.data.items;
        console.log(events);
    })
    .catch(err => console.log("ERROR!!!!!", err));

    // res.json(booking);
}

module.exports = {
    create
}