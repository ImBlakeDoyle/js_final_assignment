const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.json());

app.use(cors({
    origin: process.env.FRONT_END_DOMAIN
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./services/passport");
app.use(passport.initialize());

app.use(morgan("combined"));

app.use(require("./routes"));

//Allows express to serve static files e.g. css, images



module.exports = app;