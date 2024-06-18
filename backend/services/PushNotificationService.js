class PushNotificationService {
    sendNotification(user, message) {
        // Logic for sending push notification
        console.log(`Sending Push Notification to ${user.name}: ${message}`);
    }
}

module.exports = new PushNotificationService();
