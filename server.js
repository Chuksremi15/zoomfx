const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');
const colors = require('colors');
// const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// // Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Route files
const users = require('./routes/users');
const auth = require('./routes/auth');
const accounts = require('./routes/accounts');
const plans = require('./routes/plans');
const notifications = require('./routes/notifications');

// Cookie parser
// app.use(cookieParser());

// //Dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

//Mount routers
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);
app.use('/api/v1/accounts', accounts);
app.use('/api/v1/plans', plans);
app.use('/api/v1/notifications', notifications);

// Error handler middleware
app.use(errorHandler);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.send(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);

  //Close the server & exit process
  server.close(() => process.exit(1));
});
