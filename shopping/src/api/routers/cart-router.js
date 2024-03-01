const CartService = require("../../service/cart-service")

module.exports = (app)=>{
    const service = new CartService()

    // * get all carts roures
    app.get('/carts', async (req, res, next) => {
        try {
            const fetchCarts = await service.GetCarts()
            if (fetchCarts) {
                return res.json({ message: "All customer carts fetched", data: fetchCarts })
            }
            return res.json({ message: "Sorry! All customer carts not fetched" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * get specific customer cart roures
    app.get('/customer-cart', async (req, res, next) => {
        try {
            const { id } = req.query
            const fetchCarts = await service.GetCustomerCart(id)
            if (fetchCarts) {
                return res.json({ message: "customer cart fetched", data: fetchCarts })
            }
            return res.json({ message: "Sorry! customer cart not fetched" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * add product and new order for specific customer cart router
    app.post('/add-cart-product', async (req, res, next) => {
        try {
            const { customerId, productId, title, price, qty, company } = req.body
            const newCart = await service.CreateCustomerCart(customerId, { _id: productId, title, price, qty, company })
            if (newCart) {
                return res.json({ message: "this product is add successfully" })
            }
            return res.json({ message: "Sorry! this product is not added" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * remove product for specific customer cart router
    app.delete('/remove-cart-product', async (req, res, next) => {
        try {
            const { customerId, orderId } = req.body
            const removeCart = await service.DeleteCustomerCart(customerId, orderId)
            if (removeCart) {
                return res.json({ message: "this product is remove successfully" })
            }
            return res.json({ message: "Sorry! this product is not removed " })
        }
        catch (err) {
            console.log(err)
        }
    })
}