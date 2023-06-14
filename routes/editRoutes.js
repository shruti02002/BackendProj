const express = require('express');
const editController = require('../controllers/editController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.put('/phonenumber', authMiddleware, editController.editPhoneNumber);

module.exports = router;
