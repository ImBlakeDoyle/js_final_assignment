const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors({
    origin: process.env.FRONT_END_DOMAIN
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes"));

//Allows express to serve static files e.g. css, images
app.use(express.static("public"));


module.exports = app;