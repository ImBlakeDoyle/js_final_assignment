const UserModel = require("../database/models/user_model");
const BookingModel = require("./../database/models/booking_model");
const jwt = require("jsonwebtoken");

async function create(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.create({ email, password });
    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET);

    res.json(token);
}

async function index(req, res) {
    const allBookings = await BookingModel.find();
    res.json(allBookings);
}

// function generateJWT(req, res) {
//     console.log(req);
//     const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
//     res.json(token);
// }

async function login(req,res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    const valid = await user.verifyPassword(password);

    if (!valid) {
        res.redirect("/");
    }

    res.redirect("/admin/all");
}

module.exports = {
    create,
    index,
    // generateJWT,
    login
}