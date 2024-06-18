const User = require('../models/User');
const NotificationLog = require('../models/NotificationLog');
const SmsService = require('../services/SmsService');
const EmailService = require('../services/EmailService');
const PushNotificationService = require('../services/PushNotificationService');

const getNotificationService = (channel) => {
    switch (channel) {
        case 'SMS':
            return SmsService;
        case 'E-Mail':
            return EmailService;
        case 'Push Notification':
            return PushNotificationService;
        default:
            throw new Error(`Unknown notification channel: ${channel}`);
    }
};

exports.sendNotification = async (req, res) => {
    const { category, message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message cannot be empty' });
    }

    try {
        const users = await User.find({ subscribed: category });
        const logEntries = [];

        users.forEach((user) => {
            user.channels.forEach((channel) => {
                const notificationService = getNotificationService(channel);
                notificationService.sendNotification(user, message);

                logEntries.push({
                    user: user._id,
                    category,
                    message,
                    notificationType: channel,
                    timestamp: new Date(),
                });
            });
        });


        console.log('logEntries', logEntries);
        try {
            let test = await NotificationLog.insertMany(logEntries);
            console.log('Notifications saved to database');
            res.status(200).json({ message: 'Notifications sent successfully and saved to database' });
        } catch (error) {
            console.error('Error saving notifications to database:', error);
            res.status(500).json({ error: 'Failed to save notifications to database' });
        }

        // let test = await NotificationLog.insertMany(logEntries);
        // console.log('test', test);

        // res.status(200).json({ message: 'Notifications sent successfully' });
    } catch (error) {
        console.error('Error sending notifications', error);
        res.status(500).json({ error: 'Failed to send notifications' });
    }
};

exports.getLogs = async (req, res) => {
    try {
        // const logs = await NotificationLog.find().sort({ timestamp: -1 });
        const logs = await NotificationLog.find().populate('user');
        res.status(200).json(logs);
    } catch (error) {
        console.error('Error fetching logs', error);
        res.status(500).json({ error: 'Failed to fetch logs' });
    }
};
