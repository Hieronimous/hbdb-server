const router = require("express").Router();

router.use("/bibles", require('./bibles.routes'))

router.use('/upload', require('./upload.routes'))

router.use('/auth', require('./auth.routes'))

router.use('/user', require('./user.routes'))


module.exports = router
