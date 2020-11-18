const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({path: './config/config.env'});

//Load models

const User = require('./models/User');
const Account = require('./models/Account');
const Plan = require('./models/Plan');
const Notification = require('./models/Notification');

// Connect to DB
mongoose.connect(process.env.MONGOD_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// // Read the JSON files
// const bootcamps = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
// );
// const courses = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8')
// );
// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
// );
// const reviews = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/reviews.json`, 'utf-8')
// );

// // Import into DB
// const importData = async () => {
//   try {
//     await Bootcamp.create(bootcamps);
//     await Course.create(courses);
//     await User.create(users);
//     await Review.create(reviews);

//     console.log('Data Imported...'.green.inverse);
//     process.exit();
//   } catch (err) {
//     console.log(err);
//   }
// };

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Account.deleteMany();
    await Notification.deleteMany();
    await Plan.deleteMany();

    console.log('Data Deleted...'.red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
