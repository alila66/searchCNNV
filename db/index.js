const mongoose = require('mongoose')
const DB_USER = 'admin'
const DB_PWD = 'xjkj123'
const DB_HOST = '127.0.0.1'
const DB_NAME = 'admin'


async function dbOpen() {
    // console.log(`mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}`)
    try {
        // mongoose.connect(`mongodb://admin:xjkj123@127.0.0.1/admin`, { useNewUrlParser: true });
        mongoose.connect(`mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true });

    } catch {
        console.log('connecting error!')
    }

    mongoose.connection.on('error', console.error.bind(console, 'connection error!\n'))
    mongoose.connection.once('open', () => {
        console.log("we're connected!")
    });
}

function dbClose() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
    });
}

module.exports = { dbOpen, dbClose }