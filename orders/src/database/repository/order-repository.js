const { OrdersModel } = require("../model")

class OrderRepository {

    // TODO: The findOrders function fetches all orders from the order model.
    async findOrders() {
        try {
            const customerOrders = await OrdersModel.find({}, { "__v": 0 })
            if (customerOrders) {
                return customerOrders
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The findOneOrders function fetches all orders for a specific customer from the order model.
    async findOneOrders(customerId) {
        try {
            const customerOrders = await OrdersModel.findOne({ customerId: customerId }, { "__v": 0 })
            if (customerOrders) {
                return customerOrders
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The newOrder function creates a new order and adds a new product for a specific customer in the order model.
    async newOrder(customerId, product) {
        try {
            const { _id, title, price, qty, company } = product
            const fetchCustomer = await OrdersModel.findOne({ customerId: customerId }, { "__v": 0 })
            if (fetchCustomer) {
                const updateOrderList = await OrdersModel.updateOne({ customerId: customerId }, {
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
                if (updateOrderList.modifiedCount === 1) {
                    return updateOrderList
                }
                return null
            }
            else {
                const customerOrder = new OrdersModel({
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
                if (await customerOrder.save()) {
                    return customerOrder
                }
                return null
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The deleteOrderById function deletes a product for a specific customer from the order model.
    async deleteOrderById(customerId, orderId) {
        try {
            const fetchCustomer = await OrdersModel.findOne({ customerId: customerId })
            if (fetchCustomer) {
                const removeNotOrders = fetchCustomer.items.filter(item => item._id != orderId)
                console.log(removeNotOrders)
                const updateOrderList = await OrdersModel.updateOne({ customerId: customerId }, {
                        items: removeNotOrders
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

module.exports = OrderRepository