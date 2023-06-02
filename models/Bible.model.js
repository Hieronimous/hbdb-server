const { Schema, model } = require("mongoose");

const bibleSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: false
            //required: [true, 'Title is require']
        },
        bibliotheca: {
            type: String,
            trim: true,
            required: false
            // required: [true, 'Library is require']
        },
        shelfmark: {
            type: String,
            trim: true,
            required: false,
        },
        image: {
            type: String,
            default: "https://64.media.tumblr.com/bedc13d74c349face65439cf16de7a8f/151be060c4113eab-70/s540x810/60191aad838b237810f914edd596db73e807eded.pnj",
            set: value => value === '' ? 'https://64.media.tumblr.com/bedc13d74c349face65439cf16de7a8f/151be060c4113eab-70/s540x810/60191aad838b237810f914edd596db73e807eded.pnj' : value
        },
        digitLink: {
            type: String,
            trim: true,
            required: false,
        },
        language: {
            type: String,
            enum: ["Hebrew", "Aramaic", "Hebrew & Aramaic", "Aramaic & Latin", "Hebrew & Latin", "Hebrew & vernacular", "Aramaic & vernacular"],
            required: false,
            require: [true, 'Please select a language']
        },
        format: {
            type: String,  /// para buscador
            enum: ["Codex", "Scroll", "Fragment"],
            required: false,
            require: [true, 'Please select a format']
        },
        responsiblePerson: {
            type: String,
            trim: true,
            required: false,
        },
        date: {
            type: String,
            trim: true,
            required: false,
        },
        century: {
            type: String,  /// para buscador
            enum: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "Unknown"],
            required: false,
            require: [true, 'Please select a century']
        },
        numberOfFolios: {
            type: String,
            trim: true,
            required: false,
        },
        textDistribution: {
            type: String,
            trim: true,
            required: false,
        },
        material: {
            type: String,
            trim: true,
            required: false,
        },
        specialWritingFeatures: {
            type: String,
            trim: true,
            required: false,
        },
        decoration: {
            type: String,
            trim: true,
            required: false,
        },
        decorationDetails: {
            type: String,
            required: false
        },
        measurements: {
            type: String,
            required: false
        },
        topic: {
            type: String,
            required: false
        },
        script: {
            type: String,
            required: false
        },
        scriptGeoculturalArea: { //para buscador
            type: String,
            enum: ["Sefarad", "Orient", "Ashkenaz", "Italy", "Byzantium", "Yemen", "Does not apply", "Unknown"],
            required: false,
            require: [true, 'Please select a Geocultural Area']
        },
        noteToTitle: {
            type: String,
            trim: true,
            required: false,
        },
        incipit: {
            type: String,
            required: false
        },
        explicit: {
            type: String,
            required: false
        },
        writingPlace: {
            type: String,
            required: false
        },
        scribe: {
            type: String,
            required: false
        },
        colophon: {
            type: String,
            required: false
        },
        textSpecialFeatures: {
            type: String,
            required: false
        },
        quireType: {
            type: String,
            required: false
        },
        conservation: {
            type: String,
            required: false
        },
        blankFolios: {
            type: String,
            required: false
        },
        damageFolios: {
            type: String,
            required: false
        },
        mutilatedFolios: {
            type: String,
            required: false
        },
        foliation: {
            type: String,
            required: false
        },
        catchwords: {
            type: String,
            required: false
        },
        quireSignatures: {
            type: String,
            required: false
        },
        ruling: {
            type: String,
            required: false
        },
        watermarks: {
            type: String,
            required: false
        },
        binding: {
            type: String,
            required: false
        },
        provenance: {
            type: String,
            required: false
        },
        arrivalToLibrary: {
            type: String,
            required: false
        },
        ancientShelfmark: {
            type: String,
            required: false
        },
        laterAnnotations: {
            type: String,
            required: false
        },
        references: {
            type: String,
            required: false
        },
        microfilmDigitalCopy: {
            type: String,
            required: false
        },
        publishedEdition: {
            type: String,
            required: false
        },
        bibliography: {
            type: String,
            required: false
        },
        contents: {
            type: String,
            required: false
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        locationCountry: {
            type: String,
            trim: true,
            required: false
            // required: [true, 'Location Country is require']///poner ubicacion en mapa
        },
        locationCity: {
            type: String,
            trim: true,
            required: false
            // required: [true, 'Location City is require'] ///poner ubicacion en mapa
        },
        comments: [{
            type: String,
            trim: true,
            required: false
        }]
    },

    {
        timestamps: true
    }
);

const Bible = model("Bible", bibleSchema);

module.exports = Bible;

