const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    id: Number,
    task: String,
    price: String,
    imagePath: String
})


const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel