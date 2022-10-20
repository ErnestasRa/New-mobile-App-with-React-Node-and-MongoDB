const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    time: {
        type: String,
        required: true,
    },
    toDo: {
        type: String,
        required: true,
    },
})

const exportPost = mongoose.model('favoriteSchema', favoriteSchema)
module.exports = exportPost