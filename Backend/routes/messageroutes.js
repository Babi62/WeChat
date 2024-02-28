const express = require('express');
const messageController = require('../controller/messageController');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get("/:id", protectRoute, messageController.receiveMessage);
router.post("/send/:id", protectRoute, messageController.sendMessage);

module.exports = router;