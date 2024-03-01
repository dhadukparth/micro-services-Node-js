const express = require('express');
const { PortNumber } = require('./config');
const expressApp = require('./express-app');

const startServer = ()=>{
    const app = express()

    expressApp(app)

    app.listen(PortNumber, ()=>{
        console.log(`Orders listening on ${PortNumber}`)
    })
    .on('error', (err)=>{
        console.log("========== SERVER ERROR ==========")
        console.log(err)
        process.exit(1)
    })
}

startServer()