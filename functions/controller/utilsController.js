const DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllRegions = (req, res) => {
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
      console.log("uid: " + uid);
      const connection = DbConnection.initFunction();
      const sql = "SELECT * FROM regiones";
      connection.query(sql, (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener las regiones",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Regiones obtenidas",
            data: result,
          });
        }
      });
    } catch (error) {
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

// get all comunas by regionid
exports.getAllComunasByRegionId = (req, res) => {
  const token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    //
    try {
      const { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      // validate regionid
      if (req.body.regionid === undefined) {
        return res.status(403).json({
          ok: false,
          msg: "No hay regionid",
        });
      }
      const connection = DbConnection.initFunction();
      const sql = "SELECT * FROM comunas WHERE region_id = ?";
      connection.query(sql, [req.body.regionid], (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener las comunas",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Comunas obtenidas",
            data: result,
          });
        }
      });
    } catch (error) {
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.getAllTipoDocumento = (req, res) => {
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
      console.log("uid: " + uid);
      const connection = DbConnection.initFunction();
      const sql = "SELECT * FROM tipo_documento";
      connection.query(sql, (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener los tipos de documento",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Tipos de documento obtenidos",
            data: result,
          });
        }
      });
    } catch (error) {
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.getAllMedioPago = (req, res) => {
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
      console.log("uid: " + uid);
      const connection = DbConnection.initFunction();
      const sql = "SELECT * FROM medios_de_pago";
      connection.query(sql, (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener los medios de pago",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Medios de pago obtenidos",
            data: result,
          });
        }
      });
    } catch (error) {
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};
