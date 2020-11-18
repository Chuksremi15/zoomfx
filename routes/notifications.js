const express = require('express');

const {
  getNotifications,
  createNotification,
  deleteNotification,
  getUserNotifications,
} = require('../controllers/notification');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const {protect, authorize} = require('../middleware/auth');
const Notification = require('../models/Notification');

router.use(protect);

router
  .route('/')
  .get(
    advancedResults(Notification, 'user'),
    authorize('admin'),
    getNotifications,
    getUserNotifications
  )
  .post(createNotification);

router.route('/:id').get(getUserNotifications).delete(deleteNotification);

module.exports = router;
