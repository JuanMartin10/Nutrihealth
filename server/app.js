require('dotenv').config();

const express = require('express')
const app = express()

const flash = require("connect-flash");

require('./configs/mongoose.config')

require("./configs/middleware.config")(app)
require('./configs/locals.config')(app)
require("./configs/session.config")(app)


app.use(flash());

// BASE URLs
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/auth', require('./routes/auth.routes'));


module.exports = app;
