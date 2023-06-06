const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const saltRounds = 10

const register = (req, res, next) => {

    const { username, email, password, firstName, lastName, userRole, avatar } = req.body

    if (password.length < 5) {
        res.status(400).json({ message: 'Password must have at least 5 characters' })
        return
    }
    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists" })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPass = bcrypt.hashSync(password, salt)

            return User.create({ username, email, password: hashedPass, firstName, lastName, userRole, avatar })
        })

        .then((createdUser) => {
            const { username, email, firstName, lastName, userRole, avatar, _id } = createdUser
            const user = { username, email, firstName, lastName, userRole, avatar, _id }
            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })

}

const login = (req, res, next) => {
    const { email, password } = req.body;
    if (email === '' || password === '') {

        res.status(400).json({ message: "email and password are require" });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found" })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, lastName, firstName, avatar, favoriteBibles, userRole } = foundUser;

                const payload = { _id, email, username, lastName, firstName, avatar, favoriteBibles, userRole }


                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "4h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate" });
            }

        })
        .catch(err => next(err));
}

const verify = (req, res, next) => {

    res.status(200).json(req.payload)

}


module.exports = { register, login, verify }