const { WishlistModel } = require('../model')
const wishlistModel = require('../model/wishlist-model')

class WishlistRepository {

    // TODO: The findWishlist function fetches all wishlist from the wishlist model.
    async findWishlist() {
        try {
            const res = await WishlistModel.find()
            if (res) {
                return res
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The findOneWishlist function fetches all wishlist for a specific customer from the wishlist model.
    async findWishlistByCustomer(customerId) {
        try {
            const res = await WishlistModel.findOne({ customerId: customerId })
            if (res) {
                return res
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The newWishlistProduct function creates a new order and adds a new product for a specific customer in the wishlist model.
    async newWishlistProduct(customerId, product) {
        try {
            const { _id, title, price, qty, company } = product
            const fetchCustomer = await WishlistModel.findOne({ customerId: customerId })
            if (fetchCustomer) {
                const updateWishList = await wishlistModel.updateOne({ customerId: customerId }, {
                    $push: {
                        items: [{
                            product: {
                                _id: _id,
                                title: title,
                                price: price,
                                qty: qty,
                                company: company
                            }
                        }]
                    }
                })
                if (updateWishList.modifiedCount === 1) {
                    return updateWishList
                }
                return null
            }
            else {
                const customerWishlist = new wishlistModel({
                    customerId: customerId,
                    items: [{
                        product: {
                            _id: _id,
                            title: title,
                            price: price,
                            qty: qty,
                            company: company
                        }
                    }]
                })
                if (await customerWishlist.save()) {
                    return customerWishlist
                }
                return null
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The deleteWishlistProductById function deletes a product for a specific customer from the wishlist model.
    async deleteWishlistProductById(customerId, orderId) {
        try {
            const fetchCustomer = await WishlistModel.findOne({ customerId: customerId })
            if (fetchCustomer) {
                const removeNotWishlist = fetchCustomer.items.filter(item => item._id != orderId)
                const updateWishlistList = await WishlistModel.updateOne({ customerId: customerId }, {
                    items: removeNotWishlist
                })
                if (updateWishlistList.modifiedCount === 1) {
                    return updateWishlistList
                }
                return null
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = WishlistRepository