const BookingModel = require("./../database/models/booking_model");
const { google } = require("googleapis");
// const Mailer = require("./../services/Mailer");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const moment = require("moment");
moment().format();

async function create(req, res) {
    const { name, email, guests, phone, comment, stripe_id, checkin, checkout } = req.body;

    const newCheckinDate = moment(checkin).format("YYYY-MM-DD");
    
    const newCheckoutDate = moment(checkout).format("YYYY-MM-DD");

    const days = calculateDays(newCheckinDate, newCheckoutDate);

    const cost = calculatePayment(days);

    determineUnavailableDates();

    const booking = await BookingModel.create({ name, email, guests, checkin, checkout, cost, phone, comment, stripe_id})
    .catch(err => console.log(err));

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
    );
    oauth2Client.setCredentials({
        refresh_token: "1/wMmG3mhhEtBEuBmvBdd3sU61TZxbV_ltp4VokEFFFEc"
    });

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
        const events = res.data;
        console.log(events);
    })
    .catch(err => console.log("ERROR!!!!!", err));


    // email sending
    // const bookingemail = req.body;

    // //email sending booking to admin @ bali 
    // const mailer = new Mailer("carlgrayau@gmail.com", "admin@bali.com.au", "new booking", JSON.stringify(bookingemail), 
    // `<p>Hi, a new booking has been made on Bali.com.au website. Details are:<p>
    // <br/><p>Name: ${bookingemail.name}<p>
    // <br/><p>Email: ${bookingemail.email}<p> 
    // <br/><p>Guests: ${bookingemail.guests}<p> 
    // <br/><p>Checkin: ${bookingemail.checkin}<p> 
    // <br/><p>Checkout: ${bookingemail.checkout}<p> 
    // <br/><p>Cost: ${bookingemail.cost}<p> 
    // <br/><p>Phone: ${bookingemail.phone}<p> 
    // <br/><p>Comment: ${bookingemail.comment}<p>`);
    // mailer.send();
    // return res.status(200)


    // res.json(booking);

}

async function payment(req,res) {
    // console.log(req.body);
    // console.log(req.body);
    // console.log(res);
    // stripe.charges.create({
    //     amount: 
    // });

}

determineUnavailableDates = async () => {
    const invalidDates = [];
    const results = await BookingModel.find();

    results.forEach((result) => {
        invalidDates.push(result.checkin);
    });

    // allDates.push(date);
    // console.log(` the dates are ${allDates}`);
}

// function calculateCost(){

// }

function calculatePayment(days) {
    return days * 100;
}

function calculateDays(checkin, checkout){
    const oneDay = 24*60*60*1000;
    const date1 = new Date(checkin);
    const date2 = new Date(checkout);

    return Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));

}

module.exports = {
    create,
    payment
}