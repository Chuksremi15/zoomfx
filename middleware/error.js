const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  console.log(err.stack.red);

  //spread operator
  let error = {...err};

  error.message = err.message;

  // Log to console for developer
  console.log(err);

  // Mongoose bad Object
  if (err.name === 'CastError') {
    const message = `Resource not found with the ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose dupliucate Key
  if (err.code === 11000) {
    const message = `Duplicate field entered`;
    error = new ErrorResponse(message, 400);
  }

  // Mongoose dupliucate Key
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;