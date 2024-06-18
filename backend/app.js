const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notificationRoutes = require('./routes/notifications');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/notification_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());


app.use('/api/notifications', notificationRoutes);

module.exports = app;
