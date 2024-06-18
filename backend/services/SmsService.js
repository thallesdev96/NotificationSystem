class SmsService {
    sendNotification(user, message) {
        // Logic for sending SMS
        console.log(`Sending SMS to ${user.phone}: ${message}`);
    }
}

module.exports = new SmsService();
