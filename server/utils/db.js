const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URL = process.env.MONGODB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connected Successfully")
        
    } catch (error) {
        console.error("Connection Failed");
        process.exit(0)
    }
}

module.exports = connectDb;