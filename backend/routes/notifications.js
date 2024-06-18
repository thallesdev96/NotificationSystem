const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/NotificationController');

router.post('/send', notificationController.sendNotification);
router.get('/logs', notificationController.getLogs);

module.exports = router;
