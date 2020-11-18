const asyncHandler = require('../middleware/async');
const Notification = require('../models/Notification');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get all Notification and populate with user
//@route    GET /api/v1/notifications
//@access   Private/Admin
exports.getNotifications = asyncHandler(async (req, res, next) => {
  //make sure plans can be fetched by only admin
  if (req.user.role != 'admin') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not  authoirze to fetch this notifications`,
        401
      )
    );
  }

  res.status(200).json(res.advancedResults);
});

//@desc     Get all notification for user
//@route    GET /api/v1/notifications/:id
//@access   Private/Admin
exports.getUserNotifications = asyncHandler(async (req, res, next) => {
  const notifications = await Notification.find({user: req.params.id}).sort({
    Date: -1,
  });

  return res.status(200).json({
    success: true,
    notifications: notifications.length,
    data: notifications,
  });
});

//@desc     Create Notification
//@route    post /api/v1/notification
//@access   Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const notification = await Notification.create(req.body);

  res.status(200).json({
    success: true,
    data: notification,
  });
});

//@desc     delete notification
//@route    GET /api/v1/notifications/:id
//@access   Private
exports.deleteNotification = asyncHandler(async (req, res, next) => {
  let notification = await Notification.findById(req.params.id);

  console.log(notification);

  if (!notification) {
    new ErrorResponse(`notification does not exist`, 401);
  }

  //make sure user is the owner of the plan to delete
  if (
    notification.user.toString() !== req.user.id &&
    req.user.role != 'admin'
  ) {
    return next(
      new ErrorResponse(
        `${req.user.id} is not authorize to access to authoirze to delete this plan`,
        401
      )
    );
  }

  notification.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
