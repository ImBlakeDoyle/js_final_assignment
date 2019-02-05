const UserModel = require("../database/models/user_model");
const BookingModel = require("./../database/models/booking_model");
// const jwt = require("jsonwebtoken");

async function create(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.create({ email, password });
    // const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET);

    // res.json(token);
    res.json(user);
}

async function index(req, res) {
    const allBookings = await BookingModel.find();
    return res.json(allBookings);
    // console.log(allBookings);
}


async function login(req,res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const pass = password;

    try{
    if (user.password !== pass) {
        res.redirect("/");
    }
    else{
    res.redirect("/admin/all");
    }} catch(error){
        console.log(error);
    }
}

module.exports = {
    create,
    index,
    // generateJWT,
    login
}