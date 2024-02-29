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

exports.getReportDataTypes = async (req, res) => {
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
      const activo = req.body.activo;
      req.uid = uid;
      const connection = DbConnection.initFunction();
      // get all report data types
      let sql = `SELECT * FROM  tipo_dato_resumen ORDER BY orden ASC`;
      // if activo is true, get only active report data types
      if (activo === true) {
        sql = `SELECT * FROM  tipo_dato_resumen WHERE activo = 1 ORDER BY orden ASC`;
      }
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener los tipos de datos",
            err,
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Tipos de datos obtenidos",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.createReportDataType = async (req, res) => {
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
      const connection = DbConnection.initFunction();
      const { dato, orden, activo, isNumber, isMoney } = req.body;
      // insert new tipo_dato
      const sql = `INSERT INTO tipo_dato_resumen (dato, orden, activo, isNumber, isMoney, createdAt, updatedAt) VALUES ('${dato}', ${orden}, ${activo}, ${isNumber}, ${isMoney}, NOW(), NOW())`;
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al crear el tipo de dato",
            err,
          });
        }
        const id = result.insertId;
        // update orden of all tipo_dato_resumen
        const sql2 = `UPDATE tipo_dato_resumen SET orden = orden + 1, updatedAt = NOW() WHERE orden >= ${orden} AND id != ${id}`;
        connection.query(sql2, (err, result) => {
          if (err) {
            return res.status(500).json({
              ok: false,
              msg: "Error al actualizar el orden",
              err,
            });
          }
          return res.status(200).json({
            ok: true,
            msg: "Tipo de dato creado",
            result,
          });
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.updateReportDataType = async (req, res) => {
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
      const connection = DbConnection.initFunction();
      const { id, dato, orden, activo, isNumber, isMoney } = req.body;
      // update tipo_dato
      const sql = `UPDATE tipo_dato_resumen SET dato = '${dato}', orden = ${orden}, activo = ${activo}, isNumber = ${isNumber}, isMoney = ${isMoney}, updatedAt = NOW() WHERE id = ${id}`;
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al actualizar el tipo de dato",
            err,
          });
        }
        // update orden of all tipo_dato_resumen
        const sql2 = `UPDATE tipo_dato_resumen SET orden = orden + 1, updatedAt = NOW() WHERE orden >= ${orden} AND id != ${id}`;
        connection.query(sql2, (err, result) => {
          if (err) {
            return res.status(500).json({
              ok: false,
              msg: "Error al actualizar el orden",
              err,
            });
          }
          return res.status(200).json({
            ok: true,
            msg: "Tipo de dato actualizado",
            result,
          });
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

exports.getReportData = async (req, res) => {
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
      const connection = DbConnection.initFunction();
      const { month, year } = req.body;
      // get all report data
      const sql = `SELECT *, datos_resumen.dato AS valor FROM datos_resumen INNER JOIN tipo_dato_resumen ON idDato = tipo_dato_resumen.id WHERE mes = ${month} AND año = ${year}`;
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener los datos",
            err,
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Datos obtenidos",
          result,
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

exports.createReportData = async (req, res) => {
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
      const connection = DbConnection.initFunction();
      const { mes, año, datos } = req.body;
      // insert new report data
      console.log(datos);
      let sql = `INSERT INTO datos_resumen (mes, año, idDato, dato, createdAt) VALUES`;
      datos.forEach((element, index) => {
        console.log(element);
        if (index === datos.length - 1) {
          sql += ` (${mes}, ${año}, ${element.id}, ${element.valor}, NOW())`;
        } else {
          sql += ` (${mes}, ${año}, ${element.id}, ${element.valor}, NOW()),`;
        }
      });
      console.log(sql);
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al crear el dato",
            err,
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Dato creado",
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
