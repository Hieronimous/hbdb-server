const upload = (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error uploading the file' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
}


module.exports = { upload }