const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const UserFile = require('../models/UserFile.model')
const Recipes = require('../models/Recipes.model')


router.get('/', (req, res, next) => {
    console.log("eso es el get de admin")
    User.find({ role: "admin" })
        .then(allAdmin => {
            console.log(allAdmin)
            res.json(allAdmin)
        })
        .catch(err => console.log(err))
}
)


module.exports = router
