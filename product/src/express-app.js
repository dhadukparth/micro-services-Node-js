const bodyParser = require('body-parser')
const { ProductRouter } = require('./api')
const { databaseConnection } = require('./database')

module.exports = async (app) => {

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ extended: true }))

    await databaseConnection()

    // define all routers
    await ProductRouter(app)
}