const smsService = require('../services/SmsService');
const emailService = require('../services/EmailService');
const pushNotificationService = require('../services/PushNotificationService');

test('SMS Service sends notification', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    smsService.sendNotification({ phone: '1234567890' }, 'Test SMS');
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890: Test SMS');
});

test('Email Service sends notification', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    emailService.sendNotification({ email: 'test@example.com' }, 'Test Email');
    expect(consoleSpy).toHaveBeenCalledWith('Sending Email to test@example.com: Test Email');
});

test('Push Notification Service sends notification', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    pushNotificationService.sendNotification({ name: 'John Doe' }, 'Test Push');
    expect(consoleSpy).toHaveBeenCalledWith('Sending Push Notification to John Doe: Test Push');
});
