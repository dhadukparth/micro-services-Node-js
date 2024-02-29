const mongoose = require('mongoose')

const AddressSchema = mongoose.Schema({
    address: {
        type: String,
        default: ''
    },
    pincode: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model("address", AddressSchema)