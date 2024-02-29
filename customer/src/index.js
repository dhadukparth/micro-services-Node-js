const express = require('express')
const { portNumber } = require('./config')
const { databaseConnection } = require('./database')
const expressApp = require('./express-app')
require('dotenv').config()

const bodyParser = require('body-parser')



const startServer = async () => {

    const app = express()

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ extended: true }))

    await databaseConnection()

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