const errorHandler = (err, res) => {
  const { statusCode = 500, message = 'Unknown error' } = err;
  return res.status(statusCode).json({
    message,
  });
};

module.exports = errorHandler;
