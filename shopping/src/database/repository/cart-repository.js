const { CartModel } = require('../model')

class CartRepository {

    // TODO: The findOrders function fetches all orders from the cart model.
    async findCarts() {
        try {
            const res = await CartModel.find()
            if (res) {
                return res
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The findOneOrders function fetches all orders for a specific customer from the cart model.
    async findCartByCustomer(customerId) {
        try {
            const res = await CartModel.findOne({ customerId: customerId })
            if (res) {
                return res
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The newOrder function creates a new order and adds a new product for a specific customer in the cart model.
    async newCartProduct(customerId, product) {
        try {
            const { _id, title, price, qty, company } = product
            const fetchCustomer = await CartModel.findOne({ customerId: customerId })
            if (fetchCustomer) {
                const updateCartList = await CartModel.updateOne({ customerId: customerId }, {
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
                if (updateCartList.modifiedCount === 1) {
                    return updateCartList
                }
                return null
            }
            else {
                const customerCart = new CartModel({
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
                if (await customerCart.save()) {
                    return customerCart
                }
                return null
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The deleteCartProductById function deletes a product for a specific customer from the cart model.
    async deleteCartProductById(customerId, orderId) {
        try {
            const fetchCustomer = await CartModel.findOne({ customerId: customerId })
            if (fetchCustomer) {
                const removeNotCart = fetchCustomer.items.filter(item => item._id != orderId)
                const updateOrderList = await OrdersModel.updateOne({ customerId: customerId }, {
                    items: removeNotCart
                })
                if (updateOrderList.modifiedCount === 1) {
                    return updateOrderList
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

module.exports = CartRepository