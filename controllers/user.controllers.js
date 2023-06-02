const User = require('../models/User.model')
const jwt = require('jsonwebtoken')


const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, email: 1, firstName: 1, lastName: 1, avatar: 1 })
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

    const userData = {
        username, email, firstName, lastName, avatar
    } = req.body

    User
        .create(userData)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editOneUser = (req, res, next) => {

    const { user_id } = req.params

    const {
        username, email, firstName, lastName, avatar
    } = req.body

    User
        .findByIdAndUpdate(user_id, { username, email, firstName, lastName, avatar }, { new: true })
        .then(updatedUser => {

            const userPayload = {
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                avatar: updatedUser.avatar
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
    const { _id: owner } = req.payload
    User
        .findByIdAndDelete({ user_id, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = { getAllUsers, getOneUser, saveUser, editOneUser, deleteUser }