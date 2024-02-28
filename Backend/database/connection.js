const mongoose = require('mongoose');

const connectionURI = process.env.connectionURI;
const connectDB = async () => {
    try {
        await mongoose.connect(connectionURI);
        console.log("Connected to Databse");
    } catch (error) {
        console.log("00000000000000000\n Error while connecting to database", error);
    }
};


module.exports = connectDB;