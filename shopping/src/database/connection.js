const mongoose = require('mongoose')
const { MongoDbUrl } = require('../config')

module.exports = async () => {
    try {
        await mongoose.connect(MongoDbUrl)
        console.log("Customer Database Connection Successfully.");
    }
    catch (err) {
        console.log("========== DATABASE CONNECTION ERROR ==========");
        console.log(err);
    }
}