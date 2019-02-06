const BookingModel = require("./../database/models/booking_model");
const { google } = require("googleapis");
// const Mailer = require("./../services/Mailer");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const moment = require("moment");
moment().format();

async function create(req, res) {
    console.log(req.body);
    const { first_name, last_name, email, guests, phone, comment, checkin, checkout, cost } = req.body;
    const stripe_id  = req.body.token.id;
    console.log(` Cost is ${cost}`);

    const newCheckinDate = moment(checkin).format("YYYY-MM-DD");
    
    const newCheckoutDate = moment(checkout).format("YYYY-MM-DD");

    // const days = calculateDays(newCheckinDate, newCheckoutDate);

    const dates = getDates(newCheckinDate, newCheckoutDate);

    // const cost = calculatePayment(days);

    // determineUnavailableDates();

    const booking = await BookingModel.create({ first_name, last_name, email, guests, checkin, checkout, cost, phone, comment, dates, stripe_id})
    .catch(err => console.log(err));

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
    );
    oauth2Client.setCredentials({
        refresh_token: "1/wMmG3mhhEtBEuBmvBdd3sU61TZxbV_ltp4VokEFFFEc"
    });

    const event = {
        'summary': `${first_name} ${guests}`,
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

    const payment = await stripe.charges.create({
        amount: cost,
        currency: 'usd',
        description: 'Villa Dewata 1 accommodation',
        source: req.body.token.id
    })
    .catch(err => console.log(err));


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

function getDates(startDate, stopDate) {
    let dateArray = [];
    let currentDate = startDate;
    console.log(currentDate);
    console.log(stopDate);
    while (currentDate <= stopDate){
        moment(currentDate).format();
        dateArray.push(currentDate);
        currentDate = moment(currentDate).add(1, 'days').format("YYYY-MM-DD");
    }
    console.log(dateArray);
    return dateArray;
}

function calculatePayment(days) {
    console.log("running calculate cost");
    return days * 100;
}

function calculateDays(checkin, checkout){
    const oneDay = 24*60*60*1000;
    const date1 = new Date(checkin);
    const date2 = new Date(checkout);

    return Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));

}

async function populateInvalidDates(req, res){
    console.log("running");
    const populateInvalid = [];
    const data = await BookingModel.find();
    data.forEach((result) => {
        for (let i = 0; i < result.dates.length; i++){
            populateInvalid.push(result.dates[i]);
        }
        // populateInvalid.push(result.dates);
    });
    return res.json(populateInvalid);
    // console.log(populateInvalid);
}

function homePage(req, res){
    const checkinmoment = moment(req.query.checkin).format("YYYY-MM-DD");
    const checkoutmoment = moment(req.query.checkout).format("YYYY-MM-DD");
    const date1 = new Date(checkinmoment);
    const date2 = new Date(checkoutmoment);
    const oneDay = 24*60*60*1000;
    const totalDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
    const cost = 80000;  

    return ({cost, totalDays});
}

module.exports = {
    create,
    populateInvalidDates,
    homePage
}