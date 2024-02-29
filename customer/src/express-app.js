const { AddressRouter, CustomerRouter } = require('./api')

module.exports = (app) => {

    AddressRouter(app)
    CustomerRouter(app)
}