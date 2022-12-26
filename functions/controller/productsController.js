var DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllProducts = function (req, res) {
  // validate token
  const token = req.headers.token;
  if (token === undefined) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      const { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      const connection = DbConnection.initFunction();
      const query = `SELECT * FROM articulos`;
      connection.query(query, (err, result) => {
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
            msg: "No hay productos",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Productos encontrados",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        ok: false,
        msg: "Token no valido",
      });
    }
  }
};
