const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recepiSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    ingredients:{
        type: String,
        required: true
    },
    rece:{
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Recepi', recepiSchema)