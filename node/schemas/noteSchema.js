const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("notes", postSchema)

module.exports = exportUser