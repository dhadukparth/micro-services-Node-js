const mongoose = require('mongoose')
const { ProductDatabaseUrl } = require('../config')

module.exports = async () => {
    try {
        await mongoose.connect(ProductDatabaseUrl)
        console.log("Customer Database Connection Successfully.");
    }
    catch (err) {
        console.log("========== Database Error ==========");
        console.log(err)
        process.exit(1)
    }
}