const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        if (password.length < 6) {
            return res.status(400).json({ error: "password length must be greater than 6" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password don't match" })
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "UserName already exists" })
        }
        // password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Avatar API
        // https://avatar-placeholder.iran.liara.run/
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await new User({
            fullname, username, password: hashedPassword, gender,
            profilepic: gender === "Male" ? boyProfile : girlProfile,
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilepic: newUser.profilepic
            });
        } else {
            res.status(400).json({ error: "Invalid user data!" })
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" })
    }

}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const pass = await bcrypt.compare(password, user?.password || "");

        if (!user || !pass) {
            return res.status(400).json({ error: "Invalid username or password " });
        }

        generateToken(user._id, res);

        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out sucessfully !! GoodBye 👋👋👋" })
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

module.exports = { signup, login, logout, };
