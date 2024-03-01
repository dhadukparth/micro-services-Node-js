const ProductService = require("../service/product-service")

module.exports = (app) => {
    const service = new ProductService()

    // * fetch all products router
    app.get('/', async (req, res, next) => {
        try {
            const products = await service.FetchProducts()
            res.json({ message: "product fetched", data: products })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * fetch specific product router
    app.get('/single-product', async (req, res, next) => {
        try {
            const { id } = req.query
            const singleProduct = await service.FetchSingleProductById(id)
            if (singleProduct) {
                return res.json({ message: "fetch successfully", data: singleProduct })
            }
            return res.json({ message: "Sorry! this product is not found" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * create a new product router
    app.post('/', async (req, res, next) => {
        try {
            const { title, price, qty, company } = req.body
            const newProduct = await service.CreateProduct({ title, price, qty, company })
            if (newProduct) {
                return res.json({ message: "this product is create successfully" })
            }
            return res.json({ message: "Sorry! this product is created" })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * update a product router 
    app.patch('/', async (req, res, next) => {
        try {
            const { productId, title, price, qty, company } = req.body
            const editProduct = await service.EditProductById(productId, { title, price, qty, company })
            if (editProduct) {
                return res.json({ message: "Product Update successfully" })
            }
            return res.json({ message: "Sorry! this product is not Updated." })
        }
        catch (err) {
            console.log(err)
        }
    })

    // * delete product router
    app.delete('/', async (req, res, next) => {
        try {
            const { productId } = req.body
            const removeProduct = await service.DeleteProductById(productId)
            if (removeProduct) {
                return res.json({ message: "Product deleted successfully" })
            }
            return res.json({ message: "Sorry! this product is not deleted" })
        }
        catch (err) {
            console.log(err)
        }
    })
}