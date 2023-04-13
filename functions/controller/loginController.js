var DbConnection = require("../util/dbConnection");
var { jwtGenerator } = require("../util/jwt");
var bcrypt = require("bcryptjs");

exports.login = function (req, res) {
  var { user, password } = req.body;
  try {
    var salt = bcrypt.genSaltSync(10);
    passwordHash = bcrypt.hashSync(password, salt);
  } catch (error) {}
  var connection = DbConnection.initFunction();
  var query = `SELECT * FROM users WHERE user = '${user}' `;
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
    bcrypt.compare(password, result[0].password, async function (err, compare) {
      if (err) {
        return res.status(500).json({
          ok: false,
          msg: "Error al comparar la contraseña",
          err,
        });
      }
      if (compare) {
        var token = await jwtGenerator(result[0].id);
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
