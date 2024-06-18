const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/notification_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', phone: '1234567890', subscribed: ['Sports'], channels: ['SMS', 'E-Mail'] },
    { id: 2, name: 'Bob', email: 'bob@example.com', phone: '0987654321', subscribed: ['Finance'], channels: ['E-Mail', 'Push Notification'] },
    { id: 2, name: 'Thalles', email: 'thalles@example.com', phone: '999999999', subscribed: ['Movies'], channels: ['SMS', 'E-Mail', 'Push Notification'] },
    // Add more users as needed
];

User.insertMany(users)
    .then(() => {
        console.log('Users added');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error adding users', error);
        mongoose.connection.close();
    });
