const BookingModel = require("./../database/models/booking_model");
const { google } = require("googleapis");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function create(req, res) {
    const { name, email, guests, phone, comment, stripe_id, checkin, checkout } = req.body;

    const cost = calculatePayment();

    // const newCheckinDate = checkin.toISOString();
    // const checkin = "2019-01-06";
    // const checkout = "2019-01-08"
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
    // const newCheckinDate = "2019-01-25";
    // const newCheckoutDate = checkout.split("/").reverse().join("-");
    // const newCheckoutDate = "2019-01-28";
    const event = {
        'summary': `${name} ${guests} ${comment}`,
        'start': {
          'date': `${checkin}`,
          'timeZone': 'Australia/Sydney',
        },
        'end': {
          'date': `${checkout}`,
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
}

async function payment(req,res) {
    // console.log(req.body);
    // console.log(req.body);
    // console.log(res);
    // stripe.charges.create({
    //     amount: 
    // });

}

// function calculateCost(){

// }

function calculatePayment() {
    return 98765;
}

function calculateDays(checkin, checkout){
    const date1 = checkin.getDate();
    const date2 = checkout.getDate();

    const difference = date2 - date1;

    return (difference);
}

module.exports = {
    create,
    payment
}