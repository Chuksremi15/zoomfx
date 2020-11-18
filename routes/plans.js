const express = require('express');

const {
  getPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
  getUserPlansById,
} = require('../controllers/plan');

const advancedResults = require('../middleware/advancedResults');
const {protect, authorize} = require('../middleware/auth');
const Plan = require('../models/Plan');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(advancedResults(Plan, 'user'), authorize('admin'), getPlans)
  .post(createPlan);

router.route('/:id').get(getPlan).put(updatePlan).delete(deletePlan);

router.route('/user/:id').get(getUserPlansById);

// router.route('/:id/plans').;

module.exports = router;
