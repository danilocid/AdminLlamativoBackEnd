const { Router } = require("express");
const { check } = require("express-validator");
const { validator } = require("../utils/validator");
const { jwtGenerator } = require("../utils/jwt");
const JWTvalidator = require("../utils/jwt-validator");

const router = Router();
const { login } = require("../controllers/users");

router.post(
  "/login",
  [
    check("user").not().isEmpty().withMessage("El usuario es requerido"),
    check("password").not().isEmpty().withMessage("La contraseña es requerida"),
  ],
  validator,
  login
);

module.exports = router;
