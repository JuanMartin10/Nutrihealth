const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const UserFile = require('../models/UserFile.model')
const Recipes = require('../models/Recipes.model')


router.post('/', (req, res, next) => {

  const { height, weight, age, activitylevel, goal, intolerances } = req.body

  const newUserFile = {
    height,
    weight,
    age,
    activitylevel,
    goal,
    intolerances,
    user: req.user._id
  }

  // UserFile.create(newUserFile)
  //   .then(theUserFile => {
  //     User.findByIdAndUpdate(req.user._id, { userfile: theUserFile._id }, { new: true })
  //       .then(theUserUpdated => res.json(theUserUpdated))
  //       .catch(err => console.log(err))
  //   })
  //   .catch(err => console.log(err))

  UserFile.create(newUserFile)
    .then(theUserFile => User.findByIdAndUpdate(req.user._id, { userfile: theUserFile._id }, { new: true }))
    .then(userUpdated => res.json(userUpdated))
    .catch(err => console.log(err))
})



router.post('/fav', (req, res, next) => {

  const { label, image, ingredients, url, dietLabels } = req.body

  const newRecipe = { label, image, ingredients, url, dietLabels }

  // console.log("-------", newRecipe)

  // console.log(label)


  Recipes.findOne({ label: label })
    .then(foundRecipe => {
      console.log('esta es la newRecipe._id:', newRecipe._id)
      // console.log("esta es la foundrecipe...", foundRecipe)
      if (foundRecipe) {

        const larece = foundRecipe._id
        console.log('esta es el ID de la rece:', larece)
        console.log('-------------------------------')

        // Tiene que buscar en el usuario si ese usuario tiene esa receta, si la tiene, no la crea
        User.findOne({ _id: req.user._id })
          // .then(User.findOne({ recipes: { $in: larece } }))
          .then(theUser => {
            console.log(theUser)
            if (theUser.recipes.includes(larece)) {
              console.log("tiene la rece")
              res.status(400).json({ message: "Your already have this recipe as favorites" })

            } else {
              console.log("no la tiene: larece:", larece)
              User.findByIdAndUpdate(req.user._id, { $push: { recipes: larece } }, { new: true })
                .then(userUpdated => {
                  console.log('este es el usuario updated', userUpdated)

                  res.json(userUpdated)
                })
                .catch(err => console.log(err))
            }
          })
          .catch(err => res.json(err))

      } else {

        Recipes.create(newRecipe)
          .then(newRecipe => {
            User.findByIdAndUpdate(req.user._id, { $push: { recipes: newRecipe._id } }, { new: true })
              .then(userUpdated => res.json(userUpdated))
              .catch(err => console.log(err))
          })
          .catch(err => res.json(err))
      }
    })
    .catch(err => console.log(err))
}
)

module.exports = router
