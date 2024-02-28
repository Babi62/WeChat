const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require('./routes/authroutes');
const messageRoutes = require('./routes/messageroutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./database/connection');

dotenv.config();
const port = process.env.port || 8081;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    // root route localhost:8081
    res.send("Hello world!");
})

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server Running on port ${port}.`);
});