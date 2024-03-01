const express = require('express')
const app = express()
require('dotenv').config()
const proxy = require('express-http-proxy')


const startServer = async () => {

    const port = process.env.PORT

    app.use("/customer", proxy(process.env.CUSTOMER_URL))
    app.use("/product", proxy(process.env.PRODUCT_URL))

    app.listen(port, () => {
        console.log(`Getway Server listening on this port ${port}`)
    })
        .on('error', (err) => {
            console.log("========== Getway Server Error ==========");
            console.log(err);
            process.exit()
        })
}

startServer()