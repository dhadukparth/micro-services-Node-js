const { WishlistRepository } = require('../database')

class WishlistService {
    constructor() {
        this.repository = new WishlistRepository()
    }

    async GetWishlists() {
        try {
            return this.repository.findWishlist()
        }
        catch (err) {
            console.log(err)
        }
    }

    async GetCustomerWishlist(customerId) {
        try {
            return this.repository.findWishlistByCustomer(customerId)
        }
        catch (err) {
            console.log(err)
        }
    }

    async CreateCustomerWishlist(customerId, product) {
        try {
            return this.repository.newWishlistProduct(customerId, product)
        }
        catch (err) {
            console.log(err)
        }
    }

    async DeleteCustomerWishlist(customerId, orderId) {
        try {
            return this.repository.deleteWishlistProductById(customerId, orderId)
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = WishlistService