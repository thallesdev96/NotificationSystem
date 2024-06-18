class EmailService {
    sendNotification(user, message) {
        // Logic for sending email
        console.log(`Sending Email to ${user.email}: ${message}`);
    }
}

module.exports = new EmailService();
