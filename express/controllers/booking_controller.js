const BookingModel = require("./../database/models/booking_model");

async function create(req, res) {
    const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = req.body;
    const booking = await BookingModel.create({ name, email, guests, checkin, checkout, cost, phone, comment, stripe_id});

    res.redirect("/booking/confirmation");
}