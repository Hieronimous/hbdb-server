const User = require('../models/User.model')
const jwt = require('jsonwebtoken')


const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, email: 1, firstName: 1, lastName: 1, avatar: 1, currentInstitution: 1, userRole: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveUser = (req, res, next) => {

    const userData = { username, email, firstName, lastName, avatar, currentInstitution, userRole } = req.body

    User
        .create(userData)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editOneUser = (req, res, next) => {

    const { user_id } = req.params

    const { username, email, firstName, lastName, avatar, currentInstitution, userRole } = req.body

    User
        .findByIdAndUpdate(user_id, { username, email, firstName, lastName, avatar, currentInstitution }, { new: true })
        .then(updatedUser => {

            const userPayload = {
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                avatar: updatedUser.avatar,
                currentInstitution: updatedUser.currentInstitution
            };

            const authToken = jwt.sign(
                userPayload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "4h" }
            )

            res.json({ authToken });
        })
        .catch(err => next(err))
}

const deleteUser = (req, res, next) => {
    const { user_id } = req.params

    User
        .findByIdAndDelete({ user_id })
        .then(response => res.sendStatus(204))
        .catch(err => next(err))
}


const addFav = (req, res, next) => {
    const { user_id } = req.params
    const { bible_id } = req.params

    User
        .findByIdAndUpdate(user_id, { $addToSet: { bibles: bible_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = { getAllUsers, getOneUser, saveUser, editOneUser, deleteUser, addFav }