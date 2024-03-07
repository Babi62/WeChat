const mongoose = require("mongoose");

const connectionURI =
  "mongodb+srv://Boss:boss123456@chatapp.6eashpy.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=ChatApp";
const connectDB = async () => {
  try {
    await mongoose.connect(connectionURI);
    console.log("Connected to Databse");
  } catch (error) {
    console.log(
      "00000000000000000\n Error while connecting to database",
      error
    );
  }
};

module.exports = connectDB;
