const Message = require('../model/messageModel');
const Conversation = require('../model/conversationModel');

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user?._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, receiverId],
                messages: [], // Initialize messages array
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage?._id)
        }
        // Socket IO functionality

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);

        console.log('message sent');
    } catch (error) {
        console.log("Error occured in send message contoller", error, '\n0000000 ERROR 00000000\n', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

};

const receiveMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error occured in get message contoller", error, '\n0000000 ERROR 00000000\n', error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { sendMessage, receiveMessage }