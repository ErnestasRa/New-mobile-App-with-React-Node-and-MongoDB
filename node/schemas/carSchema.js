const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    gasoline: {
        type: Number,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("type11Cars", userSchema)

module.exports = exportUser