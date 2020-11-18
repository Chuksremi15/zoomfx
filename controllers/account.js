const asyncHandler = require('../middleware/async');
const Account = require('../models/Account');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get all Account and populate with user
//@route    GET /api/v1/accounts
//@access   Private/Admin
exports.getAccounts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc     Get single account
//@route    GET /api/v1/accounts/useraccount
//@access   Private
exports.getAccount = asyncHandler(async (req, res, next) => {
  const account = await Account.findOne({user: req.user.id}).populate({
    path: 'user',
  });

  if (!account) {
    return next(
      new ErrorResponse(
        `The user with the ID ${req.user.id} does not have an account, please create one`,
        400
      )
    );
  }
  res.status(200).json({
    success: true,
    data: account,
  });
});

//@desc     Get single account
//@route    GET /api/v1/accounts/user/:id
//@access   Private
exports.getAccountById = asyncHandler(async (req, res, next) => {
  const account = await Account.findOne({user: req.params.id}).populate({
    path: 'user',
  });

  if (!account) {
    return next(
      new ErrorResponse(
        `The user with the ID ${req.user.id} does not have an account, please create one`,
        400
      )
    );
  }
  res.status(200).json({
    success: true,
    data: account,
  });
});

//@desc     Create account
//@route    GET /api/v1/accounts
//@access   Private
exports.createAccount = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  // Check for published bootcamp
  const createdAccount = await Account.findOne({user: req.user.id});

  // if the user is not an admin they can only add one bootcamp
  if (createdAccount && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `The user with the ID ${req.user.id} has already created an account`,
        400
      )
    );
  }

  const account = await Account.create(req.body);

  res.status(200).json({
    success: true,
    data: account,
  });
});

//@desc     update account
//@route    GET /api/v1/accounts/:id
//@access   Private
exports.updateAccount = asyncHandler(async (req, res, next) => {
  let account = await Account.findById(req.params.id);

  if (!account) {
    return next(new ErrorResponse('unable to update account', 500));
  }

  //make sure user is the owner of the account to update
  if (account.user.toString() !== req.user.id && req.user.role != 'admin') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not authorize to access to authoirze to update this account`,
        401
      )
    );
  }

  account = await Account.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: account,
  });
});

//@desc     delete account
//@route    GET /api/v1/accounts/:id
//@access   Private
exports.deleteAccount = asyncHandler(async (req, res, next) => {
  let account = await Account.findById(req.params.id);

  if (!account) {
    return next(error);
  }

  //make sure user is the owner of the account to delete
  if (account.user.toString() !== req.user.id && req.user.role != 'admin') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not authorize to access to authoirze to delete this account`,
        401
      )
    );
  }

  account.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
