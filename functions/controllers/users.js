const { response } = require("express");
const sequelize = require("../database/db");
const User = require("../database/models/User");
const { jwtGenerator } = require("../util/jwt");
const bcrypt = require("bcryptjs");

const login = async (req, res = response) => {
  const { user, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
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
        const token = await jwtGenerator(user.id);
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

const renewToken = async (req, res = response) => {
  const userId = req.uid;
  const newToken = await jwtGenerator(userId);
  res.json({
    ok: true,
    msg: "Token renovado",
    token: newToken,
  });
};

const getAllUsers = async (req, res = response) => {
  const users = await User.findAll();
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
