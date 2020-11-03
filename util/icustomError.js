/**
 * Custom error interface
 */
class CustomError extends Error {
  constructor(message, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = CustomError;
