const router = require("express").Router()
const { upload } = require("../controllers/upload.controllers")
const uploaderMiddleware = require("../middlewares/uploader.middleware")

router.post('/image', uploaderMiddleware.single('image'), upload)

module.exports = router