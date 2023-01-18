const { Router } = require("express");
const { check } = require("express-validator");
const { validator } = require("../util/validator");
const { JWTvalidator, JWTvalidatorHeader } = require("../util/jwt-validator");

const router = Router();
const { login, renewToken, getAllUsers } = require("../controllers/users");

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

router.get("/AllUsers", JWTvalidatorHeader, getAllUsers);

module.exports = router;
