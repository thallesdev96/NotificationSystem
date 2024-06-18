const mongoose = require('mongoose');

const NotificationLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: String,
    message: String,
    notificationType: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NotificationLog', NotificationLogSchema);
