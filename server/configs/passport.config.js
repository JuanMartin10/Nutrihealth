const User = require('../models/User.model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.serializeUser((loggedInUser, cb) => cb(null, loggedInUser._id))

passport.deserializeUser((userIdFromSession, cb) => {

    User.findById(userIdFromSession)
        //se popula userfile aqui para que caiga a toda la app
        .populate('recipes')
        .populate("userfile")
        .populate({
            path: 'userfile',
            populate: {
                path: 'nutricionist'
            }
        })
        .populate('menu')
        .populate({
            path: 'pacients',
            populate: {
                path: 'userfile'
            }
        })
        .populate({
            path: 'notifications',
            populate: {
                path: 'sender'
            }
        })
        .then(userDocument => {
            cb(null, userDocument);

        })
        .catch(err => {
            cb(err);
            return;
        })

});

passport.use(new LocalStrategy((username, password, next) => {

    User.findOne({ username })
        .then(foundUser => {

            if (!foundUser) {
                next(null, false, { message: 'Usuario no registrado.' });
                return;
            }

            if (!bcrypt.compareSync(password, foundUser.password)) {
                next(null, false, { message: 'Contraseña incorrecta.' });
                return;
            }

            next(null, foundUser);

        })
        .catch(err => {
            next(err);
            return;
        })
}));