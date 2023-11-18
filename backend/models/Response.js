const mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema({
    name: String,
    date: String,
    description: String,
    rating: Number
})


const ResponseModel = mongoose.model("reviews", ResponseSchema)
module.exports = ResponseModel