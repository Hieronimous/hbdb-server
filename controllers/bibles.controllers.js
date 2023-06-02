const Bible = require('./../models/Bible.model')

const getAllBibles = (req, res, next) => {

    Bible
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneBible = (req, res, next) => {
    const { bible_id } = req.params

    Bible
        .findById(bible_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveBible = (req, res, next) => {

    const bibleData = req.body
    const { _id: owner } = req.payload

    console.log("hola",)

    Bible
        .create({ ...bibleData, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editOneBible = (req, res, next) => {
    const { bible_id } = req.params

    const bibleData = req.body


    Bible

        .findByIdAndUpdate({ _id: bible_id }, { ...bibleData }, { new: true })
        .then(updatedBible => res.json(updatedBible))
        .catch(err => next(err))
}

const deleteBible = (req, res, next) => {

    const { bible_id } = req.params
    const { _id: owner } = req.payload

    Bible
        .findByIdAndDelete(bible_id)
        // TODO: REVISAR SI HAY MAS ENDPOINTS RESOLUBLES CON SENDSTATUS
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}
module.exports = { getAllBibles, getOneBible, saveBible, editOneBible, deleteBible }