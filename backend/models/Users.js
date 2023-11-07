const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    addressLine: String,
    city: String,
    state: String,
    zip: Number,
    country: String,
    nameCard: String,
    cardNumber: Number,
    expiryDate: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel