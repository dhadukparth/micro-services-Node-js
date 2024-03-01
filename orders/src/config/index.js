require('dotenv').config()

module.exports = {
    PortNumber: process.env.PORT,
    MongoDbUrl: process.env.DB_URL
}