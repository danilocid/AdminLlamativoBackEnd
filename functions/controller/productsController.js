var DbConnection = require("../util/dbConnection");
var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllProducts = function (req, res) {
  // validate token
  var token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      var connection = DbConnection.initFunction();
      var query = `SELECT * FROM articulos`;
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
  var token = req.headers.token;
  var id = req.body.id;
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
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      var connection = DbConnection.initFunction();

      var query = `SELECT * FROM articulos WHERE id = ${id}`;
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
  var token = req.headers.token;
  var id = req.body.id;
  var cod_interno = req.body.cod_interno;
  var cod_barras = req.body.cod_barras;
  var descripcion = req.body.descripcion;
  var costo_neto = req.body.costo_neto;
  var costo_imp = req.body.costo_imp;
  var venta_neto = req.body.venta_neto;
  var venta_imp = req.body.venta_imp;
  var stock_critico = req.body.stock_critico;
  var activo = req.body.activo;
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
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      var connection = DbConnection.initFunction();
      var query = `UPDATE articulos SET cod_interno = '${cod_interno}', cod_barras = '${cod_barras}', descripcion = '${descripcion}', costo_neto = '${costo_neto}', costo_imp = '${costo_imp}', venta_neto = '${venta_neto}', venta_imp = '${venta_imp}', stock_critico = '${stock_critico}', activo = '${activo}' WHERE id = ${id}`;
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

exports.createProduct = function (req, res) {
  // validate token
  var token = req.headers.token;
  var cod_interno = req.body.cod_interno;
  var cod_barras = req.body.cod_barras;
  var descripcion = req.body.descripcion;
  var costo_neto = req.body.costo_neto;
  var costo_imp = req.body.costo_imp;
  var venta_neto = req.body.venta_neto;
  var venta_imp = req.body.venta_imp;
  var stock_critico = req.body.stock_critico;
  var activo = req.body.activo;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else if (
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
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      req.uid = uid;
      console.log("uid: " + uid);
      var connection = DbConnection.initFunction();
      var query = `INSERT INTO articulos (cod_interno, cod_barras, descripcion, costo_neto, costo_imp, venta_neto, venta_imp, stock_critico, stock, activo, created_at, updated_at) VALUES ('${cod_interno}', '${cod_barras}', '${descripcion}', '${costo_neto}', '${costo_imp}', '${venta_neto}', '${venta_imp}', '${stock_critico}', 0, '${activo}', NOW(), NOW())`;
      connection.query(query, (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(401).json({
              ok: false,
              msg: "Ya existe un producto con ese codigo interno o codigo de barras",
              err,
            });
          }
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
          msg: "Producto creado",
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
