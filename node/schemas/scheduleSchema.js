const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scheduleSchema = new Schema({
    time: {
        type: String,
        required: true,
    },
    toDo: {
        type: String,
        required: true,
    },
})

const exportPost = mongoose.model('scheduleSchema', scheduleSchema)
module.exports = exportPost