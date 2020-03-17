const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const UserFile = require('../models/UserFile.model')
const Notifications = require('../models/Notifications.model')


router.get('/', (req, res, next) => {
    User.find({ role: "admin" })
        .then(allAdmin => res.json(allAdmin))
        .catch(err => next(err))
})


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
                    .catch(err => next(err))
            }
        })
        .catch(err => next(err))
})


router.get('/notifications', (req, res, next) => {
    Notifications.find({ reciever: req.user._id })
        .populate("sender")
        .then(theNotificationsUser => res.json(theNotificationsUser))
        .catch(err => next(err))
})


router.post('/confirm', (req, res, next) => {

    Notifications.findByIdAndRemove(req.body.notifId)
        .then(userUpdated => {

            const promise1 = User.findByIdAndUpdate(userUpdated.reciever, { $push: { pacients: userUpdated.sender }, $pull: { notifications: userUpdated._id } }, { new: true })
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

            const promise2 = User.findByIdAndUpdate(userUpdated.sender, { $pull: { notifications: userUpdated._id } }, { new: true })
            const promise3 = UserFile.findOneAndUpdate({ user: userUpdated.sender }, { nutricionist: userUpdated.reciever }, { new: true })

            return Promise.all([promise1, promise2, promise3])
        })

        .then(array => res.json(array[0]))
        .catch(err => next(err))

})


router.get('/clients', (req, res, next) => {
    User.findById(req.user._id)
        .populate({
            path: 'pacients',
            populate: {
                path: 'userfile'
            }
        })
        .then(theNotificationsUser => res.json(theNotificationsUser))
        .catch(err => next(err))

})


module.exports = router
