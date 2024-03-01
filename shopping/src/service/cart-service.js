const { CartRepository } = require('../database')

class CartService {
    constructor() {
        this.repository = new CartRepository()
    }

    async GetCarts() {
        try {
            return this.repository.findCarts()
        }
        catch (err) {
            console.log(err)
        }
    }

    async GetCustomerCart(customerId) {
        try {
            return this.repository.findCartByCustomer(customerId)
        }
        catch (err) {
            console.log(err)
        }
    }

    async CreateCustomerCart(customerId, product) {
        try {
            return this.repository.newCartProduct(customerId, product)
        }
        catch (err) {
            console.log(err)
        }
    }

    async DeleteCustomerCart(customerId, orderId) {
        try {
            return this.repository.deleteCartProductById(customerId, orderId)
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = CartService