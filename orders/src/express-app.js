const bodyParser = require('body-parser');
const orderRouter = require('./api/routers/order-router');
const { databaseConnection } = require('./database');

module.exports = async (app) => {

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ extended: true }))

    databaseConnection()

    // * defines all routers
    orderRouter(app)
}