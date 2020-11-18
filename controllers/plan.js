const asyncHandler = require('../middleware/async');
const Plan = require('../models/Plan');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

//@desc     Get all Account and populate with user
//@route    GET /api/v1/plans
//@access   Private/Admin
exports.getPlans = asyncHandler(async (req, res, next) => {
  //make sure plans can be fetched by only admin
  if (req.user.role != 'admin') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not  authoirze to fetch this plans`,
        401
      )
    );
  }

  res.status(200).json(res.advancedResults);
});

//@desc     Get all Account and populate with user
//@route    GET /api/v1/auth/plan
//@access   Private/Admin
exports.getUserPlans = asyncHandler(async (req, res, next) => {
  plans = await Plan.find({user: req.user.id});

  return res
    .status(200)
    .json({success: true, plans: plans.length, data: plans});
});

//@desc     Get all user plan by ID
//@route    GET /api/v1/plans/:id
//@access   Private/Admin
exports.getUserPlansById = asyncHandler(async (req, res, next) => {
  plans = await Plan.find({user: req.params.id}).sort({Date: -1});

  return res
    .status(200)
    .json({success: true, plans: plans.length, data: plans});
});

//@desc     Get single account
//@route    GET /api/v1/plans/:id
//@access   Private
exports.getPlan = asyncHandler(async (req, res, next) => {
  const plan = await await Plan.findById(req.params.id).populate({
    path: 'user',
  });

  if (!plan) {
    return next(
      new ErrorResponse(`No plan found with the ID ${req.user.id} `, 400)
    );
  }
  res.status(200).json({
    success: true,
    data: plan,
  });
});

//@desc     Create account
//@route    GET /api/v1/accounts
//@access   Private
exports.createPlan = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  if (req.body.capital < 500000) {
    req.body.investmentplan = 'Gold';
    req.body.rate = '15';

    req.body.capital = parseFloat(req.body.capital);

    req.body.interest = req.body.capital * 0.15;

    req.body.interest = parseFloat(req.body.interest);

    req.body.amountaccrue = req.body.interest + req.body.capital;
  } else {
    req.body.investmentplan = 'Premium';
    req.body.rate = '20';

    req.body.capital = parseFloat(req.body.capital);

    req.body.interest = req.body.capital * 0.2;

    req.body.interest = parseFloat(req.body.interest);

    req.body.amountaccrue = req.body.interest + req.body.capital;
  }

  console.log(req.body);

  const plan = await Plan.create(req.body);

  res.status(200).json({
    success: true,
    data: plan,
  });
});

//@desc     update plan
//@route    PUT /api/v1/plan/:id
//@access   Private and by admin
exports.updatePlan = asyncHandler(async (req, res, next) => {
  let plan = await Plan.findById(req.params.id);

  if (!plan) {
    return next(new ErrorResponse('unable to update plan', 500));
  }

  //make sure plan can be updated by only admin and user
  if (plan.user.toString() !== req.user.id && req.user.role != 'admin') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not  authoirze to update this plan`,
        401
      )
    );
  }

  plan = await Plan.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: plan,
  });
});

//@desc     delete account
//@route    GET /api/v1/plans/:id
//@access   Private
exports.deletePlan = asyncHandler(async (req, res, next) => {
  let plan = await Plan.findById(req.params.id);

  if (!plan) {
    new ErrorResponse(`plan does not exist`, 401);
  }

  //make sure user is the owner of the plan to delete
  if (plan.user.toString() !== req.user.id && req.user.role != 'admin') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not authorize to access to authoirze to delete this plan`,
        401
      )
    );
  }

  plan.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
