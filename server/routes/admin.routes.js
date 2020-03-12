const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const UserFile = require('../models/UserFile.model')
const Recipes = require('../models/Recipes.model')
const Notifications = require('../models/Notifications.model')


router.get('/', (req, res, next) => {
    User.find({ role: "admin" })
        .then(allAdmin => {
            res.json(allAdmin)
        })
        .catch(err => console.log(err))
}
)


router.post('/choose', (req, res, next) => {
    const notificationObject = { sender: req.user._id, reciever: req.body.admin, text: `Se ha recibido la notificación de ${req.user.username}` }

    Notifications.findOne({ $and: [{ sender: req.user._id }, { reciever: req.body.admin }] })
        .then(notificationFounded => {
            if (notificationFounded) {
                res.json({ message: `Ya has enviado una notificacion` })
            } else {
                Notifications.create(notificationObject)
                    .then(notif => User.findByIdAndUpdate(req.body.admin, { $push: { notifications: notif._id } }, { new: true }))
                    .then(user1 => User.findByIdAndUpdate(req.user._id, { $push: { notifications: user1.notifications[0] } }, { new: true }))
                    .then(() => res.json({ message: `Se ha recibido tu notificación` }))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})


router.get('/notifications', (req, res, next) => {
    Notifications.find({ reciever: req.user._id })
        .populate("sender")
        .then(theNotificationsUser => {
            res.json(theNotificationsUser)
        })
        .catch(err => console.log(err))
})


router.post('/confirm', (req, res, next) => {

    Notifications.findByIdAndUpdate(req.body.notifId, { accepted: true }, { new: true })
        .then(userUpdated => {
            // console.log(`Este es el userUpdated:` + userUpdated)
            // ahora al admin se le pushea el paciente y se le quita de notificaciones
            const promise1 = User.findByIdAndUpdate(userUpdated.reciever, { $push: { pacients: userUpdated.sender }, $pull: { notifications: userUpdated._id } }, { new: true })
            const promise2 = User.findByIdAndUpdate(userUpdated.sender, { $pull: { notifications: userUpdated._id } }, { new: true })
            const promise3 = UserFile.find({ user: userUpdated.sender })
                .then(userFileFound => {
                    // console.log('este es el userFileFound:', userFileFound)
                    // console.log('este es el userFileFound[0]._id:', userFileFound[0]._id)

                    // console.log('este es el userUpdated.reciever:', userUpdated.reciever)

                    return UserFile.findByIdAndUpdate(userFileFound[0]._id, { nutricionist: userUpdated.reciever }, { new: true })
                })

            return Promise.all([promise1, promise2, promise3])
        })


        .then(array => {
            // console.log('retorno de promesa', array)
            // console.log(req.body.notifId)

            if (array.length) {
                return Notifications.findByIdAndRemove(req.body.notifId)
            }
        })
        .then(() => res.json({ message: `Se ha aceptado tu notificación` }))

        .catch(err => console.log(err))

})


router.get('/clients', (req, res, next) => {
    User.findById(req.user._id)
        .populate({
            path: 'pacients',
            populate: {
                path: 'userfile'
            }
        })
        .then(theNotificationsUser => {
            // console.log('thenotificationuser:', theNotificationsUser)
            res.json(theNotificationsUser)
        })
        .catch(err => console.log(err))
})


module.exports = router
