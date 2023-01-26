var { Router } = require("express");
var { check } = require("express-validator");
var { validator } = require("../util/validator");
var { JWTvalidator, JWTvalidatorHeader } = require("../util/jwt-validator");

var router = Router();
var { login, renewToken, getAllUsers } = require("../controllers/users");

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
