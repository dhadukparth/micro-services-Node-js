const { OrderRepository } = require("../database");

class OrderService {

    constructor() {
        this.repository = new OrderRepository()
    }

    async GetOrders() {
        try {
            return this.repository.findOrders()
        }
        catch (err) {
            console.log(err)
        }
    }

    async GetCustomerOrders(customerId) {
        try {
            return this.repository.findOneOrders(customerId)
        }
        catch (err) {
            console.log(err)
        }
    }

    async CreateCustomerOrder(customerId, product) {
        try {
            return this.repository.newOrder(customerId, product)
        }
        catch (err) {
            console.log(err)
        }
    }

    async DeleteCustomerOrder(customerId, orderId) {
        try {
            return this.repository.deleteOrderById(customerId, orderId)
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = OrderService