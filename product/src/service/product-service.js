const { ProductRepository } = require("../database");

class ProductService {

    constructor() {
        this.repository = new ProductRepository()
    }


    async FetchProducts() {
        try {
            return this.repository.findProducts()
        }
        catch (err) {
            console.log(err)
        }
    }


    async FetchSingleProductById(productId) {
        try {
            return this.repository.findOneProductById({ _id: productId })
        }
        catch (err) {
            console.log(err)
        }
    }


    async CreateProduct(product) {
        try {
            return this.repository.newProduct(product)
        }
        catch (err) {
            console.log(err)
        }
    }


    async EditProductById(productId, product) {
        try {
            return this.repository.updateProductById(productId, product)
        }
        catch (err) {
            console.log(err)
        }
    }


    async DeleteProductById(productId) {
        try {
            return this.repository.deleteProductById(productId)
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = ProductService;