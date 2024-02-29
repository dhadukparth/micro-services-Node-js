require('dotenv').config();

module.exports = {
    portNumber: process.env.PORT,
    customerDBURL: process.env.DB_URL,
}