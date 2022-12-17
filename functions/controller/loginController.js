var jwt = require("json-web-token");
var DbConnection = require("../util/dbConnection");
const { jwtGenerator } = require("../util/jwt");
const bcrypt = require("bcryptjs");

exports.login = function (req, res) {
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
      console.log("Usuario no encontrado");
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
        console.error("Contraseña incorrecta");
        return res.status(401).json({
          ok: false,
          msg: "Usuario o contraseña incorrectos",
        });
      }
    });
  });
};
