var { response } = require("express");
var sequelize = require("../database/db");
var User = require("../database/models/User");
var { jwtGenerator } = require("../util/jwt");
var bcrypt = require("bcryptjs");

var login = async (req, res = response) => {
  var { user, password } = req.body;
  try {
    var salt = bcrypt.genSaltSync(10);
    passwordHash = bcrypt.hashSync(password, salt);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al encriptar la contraseña",
      err,
    });
  }
  User.findOne({
    where: {
      user: user,
    },
  }).then((user) => {
    if (!user) {
      return res.status(401).json({
        ok: false,
        msg: "Usuario o contraseña incorrectos",
      });
    }
    bcrypt.compare(password, user.password, async function (err, compare) {
      if (err) {
        return res.status(500).json({
          ok: false,
          msg: "Error al comparar la contraseña",
          err,
        });
      }
      if (compare) {
        var token = await jwtGenerator(user.id);
        return res.status(200).json({
          ok: true,
          msg: "Login correcto",
          token,
        });
      } else {
        return res.status(401).json({
          ok: false,
          msg: "Usuario o contraseña incorrectos",
        });
      }
    });
  });
};

var renewToken = async (req, res = response) => {
  var userId = req.uid;
  var newToken = await jwtGenerator(userId);
  res.json({
    ok: true,
    msg: "Token renovado",
    token: newToken,
  });
};

var getAllUsers = async (req, res = response) => {
  var users = await User.findAll();
  res.json({
    ok: true,
    msg: "Lista de usuarios",
    users,
  });
};

module.exports = {
  login,
  renewToken,
  getAllUsers,
};
