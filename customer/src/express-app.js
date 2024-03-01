const bodyParser = require('body-parser')
const { databaseConnection } = require('./database')
const { AddressRouter, CustomerRouter } = require('./api')

module.exports = async (app) => {

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ extended: true }))

    await databaseConnection()

    // * defines all routers
    AddressRouter(app)
    CustomerRouter(app)
}