var { validationResult } = require("express-validator");

var validator = (req, res, next) => {
  var errrors = validationResult(req);
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
