const bodyParser = require('body-parser');
const { CartRouters, OrderRouters } = require('./api');
const { databaseConnection } = require('./database');

module.exports = async (app) => {

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ extended: true }))

    databaseConnection()

    // * defines all routers
    OrderRouters(app)
    CartRouters(app)
}