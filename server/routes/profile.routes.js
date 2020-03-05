const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const UserFile = require('../models/UserFile.model')
const Recipes = require('../models/Recipes.model')


router.post('/', (req, res, next) => {

  const { height, weight, age, activitylevel, goal, intolerances } = req.body

  const newUserFile = {
    height, weight, age, activitylevel, goal, intolerances,
    user: req.user._id
  }


  UserFile.create(newUserFile)
    .then(theUserFile => {
      User.findByIdAndUpdate(req.user._id, { userfile: theUserFile._id }, { new: true })
        .then(theUserUpdated => res.json(theUserUpdated))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})



router.post('/fav', (req, res, next) => {

  const { label, image, ingredients, url, dietLabels } = req.body

  const newRecipe = { label, image, ingredients, url, dietLabels }

  Recipes.create(newRecipe)
    .then((newRecipe => res.json(newRecipe)))
    .catch(err => console.log(err))
})
module.exports = router
