const jwt = require('jsonwebtoken')

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWt_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//ms maximaum age a cookie lives
        httpOnly: true, // prevent XSS attack
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict" //prevent CSRF attacks xs request forgery attacks
    });
};


module.exports = generateToken;