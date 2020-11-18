const express = require('express');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const User = require('../models/User');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const {protect, authorize} = require('../middleware/auth');

router.route('/:id').get(getUser);
router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;
