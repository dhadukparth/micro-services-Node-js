const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
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
})

module.exports = mongoose.model("Products", ProductSchema)