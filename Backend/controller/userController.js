const User = require('../model/userModel')

const getUserForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user?._id;

        // filters out every user except the logged in user
        const filterdUsers = await User.find({ _id: { $ne: loggedInUserId } })
            .select("-password")

        res.status(200).json(filterdUsers);
    } catch (error) {
        console.log("Error occured in get user sidebar contoller", error, '\n0000000 ERROR 00000000\n', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = { getUserForSidebar }