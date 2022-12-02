const { response } = require("express");
var DbConnection = require("../utils/conexionBD");
const { jwtGenerator } = require("../utils/jwt");
const bcrypt = require("bcryptjs");

const login = async (req, res = response) => {
  const { user, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    passwordHash = bcrypt.hashSync(password, salt);
  } catch (error) {}
  const connection = DbConnection.initFunction();
  const query = `SELECT * FROM users WHERE user = '${user}' `;
  connection.query(query, async (err, result) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        msg: "Error al consultar la base de datos",
        err,
      });
    }
    if (result.length === 0) {
      return res.status(401).json({
        ok: false,
        msg: "Usuario o contraseña incorrectos",
      });
    }
    bcrypt.compare(password, result[0].password, async function (err, compare) {
      if (err) {
        return res.status(500).json({
          ok: false,
          msg: "Error al comparar la contraseña",
          err,
        });
      }
      if (compare) {
        const token = await jwtGenerator(result[0].id);
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
  const connection = DbConnection.initFunction();
  const query = `SELECT * FROM users`;
  connection.query(query, async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        ok: false,
        msg: "Error al consultar la base de datos",
        err,
      });
    }
    if (result.length === 0) {
      return res.status(401).json({
        ok: false,
        msg: "No hay usuarios registrados",
      });
    }
    return res.status(200).json({
      ok: true,
      msg: "Usuarios encontrados",
      result,
    });
  });
};

module.exports = {
  login,
  renewToken,
  getAllUsers,
};
