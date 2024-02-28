const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const userController = require('../controller/userController')

const router = express.Router();

// protectRoute middelware is used to ensure that unauthenticated user willnot call the function

router.get("/", protectRoute, userController.getUserForSidebar);

module.exports = router;