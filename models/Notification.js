const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  text: {
    type: String,
    reqired: [true, 'Please enter a notification text'],
  },

  type: {
    type: String,
    required: [true, 'Please enter a notification type'],
    enum: ['Deposite', 'Withdrawal'],
  },

  Date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
