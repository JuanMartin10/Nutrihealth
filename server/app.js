require('dotenv').config();

const express = require('express')
const app = express()

require('./configs/mongoose.config')

require("./configs/middleware.config")(app)

require('./configs/locals.config')(app)
require("./configs/session.config")(app)


// BASE URLs
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/admin', require('./routes/admin.routes'));



app.use((req, res) => {
    res.sendFile(__dirname + "/public/index.html");

});

module.exports = app;
