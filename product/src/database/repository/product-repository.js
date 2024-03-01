const { ProductModel } = require("../model")

class ProductRepository {

    // TODO: The findProducts function fetches all products from the product model.
    async findProducts() {
        try {
            const res = await ProductModel.find({}, { "__v": 0 })
            if (res) {
                return res
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The findOneProductById function fetches specific product from the product model.
    async findOneProductById(productId) {
        try {
            const res = await ProductModel.findOne({ _id: productId }, { "__v": 0 })
            if (res) {
                return res
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The newProduct function create a new product from the product model.
    async newProduct(product) {
        try {
            const { title, price, qty, company } = product
            const newProduct = new ProductModel({ title, price, qty, company })
            if (await newProduct.save()) {
                return newProduct
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The updateProductById function update product from the product model.
    async updateProductById(productId, product) {
        try {
            const { title, price, qty, company } = product
            const updateProduct = await ProductModel.findOneAndUpdate({ _id: productId }, { title, price, qty, company })
            if (updateProduct) {
                return updateProduct
            }
            return null
        }
        catch (err) {
            console.log(err)
        }
    }

    // TODO: The deleteProductById function delete product from the product model.
    async deleteProductById(productId) {
        try {
            const res = await ProductModel.findOneAndDelete({ _id: productId })
            if (res) {
                return true
            }
            return false
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = ProductRepository