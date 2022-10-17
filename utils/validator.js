const { validationResult } = require("express-validator");

const validator = (req, res, next) => {
  const errrors = validationResult(req);
  if (!errrors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      msg: errrors.msg,
      errors: errrors.array(),
    });
  }
  next();
};
module.exports = {
  validator,
};
