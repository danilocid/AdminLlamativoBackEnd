var { response } = require("express");
var jwt = require("jsonwebtoken");

var JWTvalidator = (req, res = response, next) => {
  var token = req.body.token;
  if (!token) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  }
  try {
    var { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(403).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};
var JWTvalidatorHeader = (req, res = response, next) => {
  var token = req.header("token");
  if (!token) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  }
  try {
    var { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(403).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};

module.exports = { JWTvalidator, JWTvalidatorHeader };
