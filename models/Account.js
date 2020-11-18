const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  accountname: {
    type: String,
    require: [true, 'Please enter account name'],
  },
  accountnumber: {
    type: String,
    reqired: [true, 'Please enter account number'],
  },
  bankname: {
    type: String,
    required: [true, 'Please select a bank'],
    enum: [
      'Access Bank',
      'Fidelity Bank',
      'First City Monument',
      'First Bank',
      'Guaranty Trust Bank',
      'Union Bank',
      'United Bank Africa',
      'Zenith Bank',
      'Citibank',
      'Ecobank Bank',
      'Heritage Bank',
      'Polaris Bank',
      'Stanbic IBTC Bank',
      'Standard Chartered Bank',
      'Sterling Bank',
      'Titan Trust Bank',
      'Unity Bank',
      'Wema Bank',
    ],
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

//One user to one Account
AccountSchema.index({user: 1}, {unique: true});

module.exports = mongoose.model('Account', AccountSchema);
