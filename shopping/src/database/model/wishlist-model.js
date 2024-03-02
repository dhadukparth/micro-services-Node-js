const mongoose = require('mongoose')

const WishlistSchema = mongoose.Schema({
    customerId:{
        type: String
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
            }
        }
    ]
})

module.exports = mongoose.model('wishlist', WishlistSchema)