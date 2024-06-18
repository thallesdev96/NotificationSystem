const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    phone: String,
    subscribed: [String],
    channels: [String],
});

module.exports = mongoose.model('User', UserSchema);
