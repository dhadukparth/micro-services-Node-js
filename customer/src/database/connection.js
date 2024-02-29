const mongoose = require('mongoose')
const { customerDBURL } = require('../config')

module.exports = async () => {
    try {
        await mongoose.connect(customerDBURL)
        console.log("Customer Database Connection Successfully.");
    }
    catch (err) {
        console.log("========== Database Error ==========");
        console.log(err)
        process.exit(1)
    }
}