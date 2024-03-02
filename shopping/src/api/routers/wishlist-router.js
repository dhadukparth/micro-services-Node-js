const WishlistService = require("../../service/wishlist-service")

module.exports = (app) => {

    const service = new WishlistService()

    // * get all wishlists roures
    app.get('/wishlists', async (req, res, next) => {
        try {
            const fetchWishlist = await service.GetWishlists()
            if (fetchWishlist) {
                return res.json({ message: "All customer wishlist fetched", data: fetchWishlist })
            }
            return res.json({ message: "Sorry! All customer wishlists not fetched" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * get specific customer wishlist roures
    app.get('/customer-wishlist', async (req, res, next) => {
        try {
            const { id } = req.query
            const fetchwishlist = await service.GetCustomerWishlist(id)
            if (fetchwishlist) {
                return res.json({ message: "customer wishlist fetched", data: fetchwishlist })
            }
            return res.json({ message: "Sorry! customer wishlist not fetched" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * add product and new order for specific customer wishlist router
    app.post('/add-wishlist-product', async (req, res, next) => {
        try {
            const { customerId, productId, title, price, qty, company } = req.body
            const newWishlist = await service.CreateCustomerWishlist(customerId, { _id: productId, title, price, qty, company })
            if (newWishlist) {
                return res.json({ message: "this product is add successfully" })
            }
            return res.json({ message: "Sorry! this product is not added" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * remove product for specific customer wishlist router
    app.delete('/remove-wishlist-product', async (req, res, next) => {
        try {
            const { customerId, orderId } = req.body
            const removeWishlist = await service.DeleteCustomerWishlist(customerId, orderId)
            if (removeWishlist) {
                return res.json({ message: "this product is remove successfully" })
            }
            return res.json({ message: "Sorry! this product is not removed " })
        }
        catch (err) {
            console.log(err)
        }
    })
}