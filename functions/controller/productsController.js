var DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllProducts = function (req, res) {
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
      return res.status(403).json({
        ok: false,
        msg: "Token no valido",
      });
    }
  }
};

exports.getProduct = function (req, res) {
  // validate token
  const token = req.headers.token;
  const id = req.body.id;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else if (id === undefined || id === null || id === "") {
    return res.status(401).json({
      ok: false,
      msg: "El id es requerido",
    });
  } else {
    try {
      const { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      const connection = DbConnection.initFunction();

      const query = `SELECT * FROM articulos WHERE id = ${id}`;
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
          msg: "Producto encontrado",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no valido",
      });
    }
  }
};

exports.updateProduct = function (req, res) {
  // validate token
  const token = req.headers.token;
  const id = req.body.id;
  const cod_interno = req.body.cod_interno;
  const cod_barras = req.body.cod_barras;
  const descripcion = req.body.descripcion;
  const costo_neto = req.body.costo_neto;
  const costo_imp = req.body.costo_imp;
  const venta_neto = req.body.venta_neto;
  const venta_imp = req.body.venta_imp;
  const stock_critico = req.body.stock_critico;
  const activo = req.body.activo;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else if (
    id === undefined ||
    id === null ||
    id === "" ||
    cod_interno === undefined ||
    cod_interno === null ||
    cod_interno === "" ||
    cod_barras === undefined ||
    cod_barras === null ||
    cod_barras === "" ||
    descripcion === undefined ||
    descripcion === null ||
    descripcion === "" ||
    costo_neto === undefined ||
    costo_neto === null ||
    costo_neto === "" ||
    costo_imp === undefined ||
    costo_imp === null ||
    costo_imp === "" ||
    venta_neto === undefined ||
    venta_neto === null ||
    venta_neto === "" ||
    venta_imp === undefined ||
    venta_imp === null ||
    venta_imp === "" ||
    stock_critico === undefined ||
    stock_critico === null ||
    stock_critico === "" ||
    activo === undefined ||
    activo === null ||
    activo === ""
  ) {
    return res.status(401).json({
      ok: false,
      msg: "Todos los campos son requeridos",
    });
  } else {
    try {
      const { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      const connection = DbConnection.initFunction();
      const query = `UPDATE articulos SET cod_interno = '${cod_interno}', cod_barras = '${cod_barras}', descripcion = '${descripcion}', costo_neto = '${costo_neto}', costo_imp = '${costo_imp}', venta_neto = '${venta_neto}', venta_imp = '${venta_imp}', stock_critico = '${stock_critico}', activo = '${activo}' WHERE id = ${id}`;
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
          msg: "Producto actualizado",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no valido",
      });
    }
  }
};
