require('dotenv').config()

module.exports = {
    PortNumber: process.env.PORT,
    ProductDatabaseUrl: process.env.MONGODB_URL
}