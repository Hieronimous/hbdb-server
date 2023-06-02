const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const { register, login, verify } = require("../controllers/auth.controllers")

router.post("/register", register)

router.post('/login', login)

router.get('/verify', isAuthenticated, verify)

module.exports = router