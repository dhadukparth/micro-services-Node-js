const OrderService = require("../../service/order-service")

module.exports = (app) => {

    const service = new OrderService()

    // * get all orders roures
    app.get('/orders', async (req, res, next) => {
        try {
            const fetchOrders = await service.GetOrders()
            if (fetchOrders) {
                return res.json({ message: "All customer order fetched", data: fetchOrders })
            }
            return res.json({ message: "Sorry! All customer order not fetched" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * get specific customer orders roures
    app.get('/customer-order', async (req, res, next) => {
        try {
            const { id } = req.query
            const fetchOrders = await service.GetCustomerOrders(id)
            if (fetchOrders) {
                return res.json({ message: "customer order fetched", data: fetchOrders })
            }
            return res.json({ message: "Sorry! customer order not fetched" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * add product and new order for specific customer order router
    app.post('/add-order-product', async (req, res, next) => {
        try {
            const { customerId, productId, title, price, qty, company } = req.body
            const newOrder = await service.CreateCustomerOrder(customerId, { _id: productId, title, price, qty, company })
            if (newOrder) {
                return res.json({ message: "this product is add successfully" })
            }
            return res.json({ message: "Sorry! this product is not added " })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * remove product for specific customer order router
    app.delete('/remove-order-product', async (req, res, next) => {
        try {
            const { customerId, orderId } = req.body
            const removeOrder = await service.DeleteCustomerOrder(customerId, orderId)
            if (removeOrder) {
                return res.json({ message: "this product is remove successfully" })
            }
            return res.json({ message: "Sorry! this product is not removed " })
        }
        catch (err) {
            console.log(err)
        }
    })
}