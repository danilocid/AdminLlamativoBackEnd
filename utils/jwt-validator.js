const { response } = require("express");
const jwt = require("jsonwebtoken");

const JWTvalidator = (req, res = response, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(200).json({
      ok: false,
      msg: "No hay token",
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(200).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};

module.exports = JWTvalidator;
