const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    customerId:{
        type: String
    },
    date: {
        type: Number
    },
    amount: {
        type: Number
    },
    items: [
        {
            product: {
                _id: {
                    type: String,
                },
                title: {
                    type: String,
                    default: ""
                },
                price: {
                    type: Number,
                    default: 0
                },
                qty: {
                    type: Number,
                    default: 0
                },
                company: {
                    type: String,
                    default: ""
                }
            },
            date: {
                type: Number
            }
        }
    ]
})

module.exports = mongoose.model('Orders', OrderSchema)