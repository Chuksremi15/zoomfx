const express = require('express');

const {
  getAccounts,
  getAccount,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
} = require('../controllers/account');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const {protect, authorize} = require('../middleware/auth');
const Account = require('../models/Account');

router.use(protect);
// router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(Account, 'user'), authorize('admin'), getAccounts)
  .post(createAccount);

router.route('/:id').get(getAccount).put(updateAccount).delete(deleteAccount);

router.route('/user/:id').get(getAccountById);

module.exports = router;
