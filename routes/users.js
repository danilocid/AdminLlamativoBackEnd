const { Router } = require("express");
const { check } = require("express-validator");
const { validator } = require("../utils/validator");
const JWTvalidator = require("../utils/jwt-validator");

const router = Router();
const { login, renewToken } = require("../controllers/users");

router.post(
  "/login",
  [
    check("user").not().isEmpty().withMessage("El usuario es requerido"),
    check("password").not().isEmpty().withMessage("La contraseña es requerida"),
  ],
  validator,
  login
);
router.post(
  "/renew",
  [check("token").not().isEmpty().withMessage("El token es requerido")],
  JWTvalidator,
  renewToken
);

module.exports = router;
