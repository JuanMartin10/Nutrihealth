require('dotenv').config();

const express = require('express')
const app = express()

const flash = require("connect-flash");


require('./configs/mongoose.config')
require('./configs/passport')(app);
require("./configs/middleware.config")(app)
require("./configs/session.config")(app)
require('./configs/locals.config')(app)


app.use(flash());


app.use('/', require('./routes/index.routes'));
app.use('/auth', require('./routes/auth.routes'));


module.exports = app;
