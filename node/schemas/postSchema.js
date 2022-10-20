const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    photo: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
})

const exportPost = mongoose.model('mobileAppPosts', postSchema)

module.exports = exportPost