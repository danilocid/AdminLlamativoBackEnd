const DbConnection = require("../util/dbConnection");
const { jwtGenerator } = require("../util/jwt");
const bcrypt = require("bcryptjs");

exports.login = function(req, res) {
  const { user, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    console.log(passwordHash);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al encriptar la contraseña",
      error,
    });
  }
  const connection = DbConnection.initFunction();
  const query = `SELECT * FROM users WHERE user = '${user}' `;
  connection.query(query, async (err, result) => {
    connection.end();
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
    bcrypt.compare(password, result[0].password, async (err, compare) => {
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
