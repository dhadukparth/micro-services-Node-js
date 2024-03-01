const express = require('express')
const { portNumber } = require('./config')
const expressApp = require('./express-app')
require('dotenv').config()


const startServer = async () => {

    const app = express()

    expressApp(app)

    app.listen(portNumber, () => {
        console.log(`Customer server listening on ${portNumber}`)
    })
        .on('error', (err) => {
            console.log(err)
            process.exit()
        })

}

startServer()