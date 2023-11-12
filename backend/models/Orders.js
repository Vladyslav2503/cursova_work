const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: Number,
    feedback: String,
})


const FeedbackModel = mongoose.model("orders", FeedbackSchema)
module.exports = FeedbackModel