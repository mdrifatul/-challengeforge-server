const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = () => {

    let connectionUri;

    if (process.env.NODE_ENV === 'development') {
        connectionUri = process.env.DATABASE_LOCAL
        connectionUri = connectionUri.replace('<username>', process.env.DATABASE_LOCAL_USERNAME)
        connectionUri = connectionUri.replace('<password>', process.env.DATABASE_LOCAL_PASSWORD)
    } else {
        connectionUri = process.env.DATABASE_PROD
        connectionUri = connectionUri.replace('<username>', process.env.DATABASE_LOCAL_USERNAME)
        connectionUri = connectionUri.replace('<password>', process.env.DATABASE_LOCAL_PASSWORD)
    }
    return connectionUri
}

    const uri = connectionString()
    
    const connectDB = async () => {
        await mongoose.connect(uri, { dbName: process.env.DB_NAME })
    }

module.exports = connectDB

