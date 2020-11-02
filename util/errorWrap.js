const errorWrap = (originalFunction) => {
  return async (req, res, next) => {
    try {
      return await originalFunction.call(this, req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = errorWrap;
