const DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");

exports.monthlySales = async (req, res) => {
  // validate token
  const token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      const { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      const month = req.body.month;
      const year = req.body.year;
      const connection = DbConnection.initFunction();
      // get all sales from db by month and year, and join with tipo_documento table
      const sql = `SELECT tipo_documento.tipo as tipo_documento_name, ventas.*
        FROM ventas
        INNER JOIN tipo_documento ON ventas.tipo_documento = tipo_documento.id
        WHERE MONTH(ventas.fecha) = ${month} AND YEAR(ventas.fecha) = ${year}`;

      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener las ventas",
            err,
          });
        }
        // return the sales by tipo_documento
        // get all tipo_documento from result
        const tipo_documento = [];
        result.forEach((element) => {
          if (!tipo_documento.includes(element.tipo_documento_name)) {
            tipo_documento.push(element.tipo_documento_name);
          }
        });
        // create array of objects, each object contains the tipo_documento and the total of sales by tipo_documento
        const sales = [];
        tipo_documento.forEach((element) => {
          let total = 0;
          let count = 0;
          result.forEach((item) => {
            if (element === item.tipo_documento_name) {
              total += item.monto_neto + item.monto_imp;
              count++;
            }
          });
          sales.push({
            tipo_documento: element,
            total,
            count,
          });
        });

        return res.status(200).json({
          ok: true,
          msg: "Ventas obtenidas",
          sales,
        });
      });
    } catch (error) {
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};
