const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

//allows mongoose to use promises instead of callbacks
mongoose.Promise = global.Promise;

mongoose.connection.on("error", console.log);