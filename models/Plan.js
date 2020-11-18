const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  investmentplan: {
    type: String,
    required: [true, 'Please select a plan'],
    enum: ['Gold', 'Premium'],
  },

  capital: {
    type: Number,
    require: [true, 'Please enter a capital'],
    min: [10000, 'Minimum amount required to start an investment is ₦10,000'],
    max: [100000000, 'Capital must be below ₦100000000'],
  },

  rate: {
    type: Number,
    require: [true, 'Please enter rate'],
  },

  interest: {
    type: Number,
  },

  amountaccrue: {
    type: Number,
  },

  pendingplan: {
    type: Boolean,
    default: true,
  },
  pendingwithdrawal: {
    type: Boolean,
    default: false,
  },

  activeplan: {
    type: Boolean,
    default: false,
  },
  dueplan: {
    type: Boolean,
    default: false,
  },
  paiddeposite: {
    type: Boolean,
    default: false,
  },
  paidwithdrawal: {
    type: Boolean,
    default: false,
  },
  payoutdate: {
    type: Date,
  },
  withdrawaldate: {
    type: Date,
  },
  depositedate: {
    type: Date,
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

module.exports = mongoose.model('Plan', PlanSchema);
