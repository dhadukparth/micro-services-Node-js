const express = require('express');
const { PortNumber } = require('./config');
const expressApp = require('./express-app');

const startServer = async () => {
    const app = express();

    await expressApp(app)

    app.listen(PortNumber, () => {
        console.log(`Product Server listening on ${PortNumber}`);
    })
        .on('error', (err) => {
            console.log("========== SERVER ERROR ==========");
            console.log(err);
            process.exit(1)
        })
}

startServer()