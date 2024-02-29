const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address',
        require: true
    }]
})

module.exports = mongoose.model('customer', CustomerSchema)