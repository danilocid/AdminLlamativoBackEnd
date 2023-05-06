var DbConnection = require("../util/dbConnection");
var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllProducts = function (req, res, conStock = false) {
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
      if (!conStock) {
        var query = `SELECT * FROM articulos`;
      } else {
        var query = `SELECT * FROM articulos WHERE stock > 0`;
      }
      connection.query(query, (err, result) => {
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
            msg: "No hay productos",
          });
        }
        console.log("result: " + result);
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

exports.getProductWithMovements = function (req, res) {
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
          connection.end();
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        }
        if (result.length === 0) {
          connection.end();
          return res.status(401).json({
            ok: false,
            msg: "No hay productos",
          });
        }
        var query = `SELECT detalle_movimientos_articulos.*, tipo_movimientos.tipo_movimiento, users.name FROM detalle_movimientos_articulos `;
        query += `LEFT JOIN tipo_movimientos ON (tipo_movimientos.id = detalle_movimientos_articulos.movimiento_id) `;
        query += `LEFT JOIN users ON (users.id = detalle_movimientos_articulos.usuario_id) `;
        query += `WHERE detalle_movimientos_articulos.producto_id = ${id}`;
        connection.query(query, (err, movements) => {
          if (err) {
            connection.end();
            return res.status(500).json({
              ok: false,
              msg: "Error al consultar la base de datos",
              err,
            });
          }
          connection.end();
          return res.status(200).json({
            ok: true,
            msg: "Producto encontrado",
            result,
            movements,
          });
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
        connection.end();
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

exports.getLastCountedProducts = function (req, res) {
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
      var query = `SELECT * FROM articulos ORDER BY last_cont ASC LIMIT 5`;
      connection.query(query, (err, result) => {
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

exports.getAllMovementsTypes = function (req, res) {
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
      var query = `SELECT * FROM tipo_movimientos`;
      connection.query(query, (err, result) => {
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
            msg: "No hay tipos de movimientos",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Tipos de movimientos encontrados",
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

exports.saveMovement = function (req, res) {
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
      var tipo_movimiento = req.body.tipo_movimiento;
      var obs = req.body.obs;
      var articulos = req.body.articulos;
      var costo_neto = req.body.costo_neto;
      var costo_imp = req.body.costo_imp;
      var entradas = req.body.entradas;
      var salidas = req.body.salidas;
      var idAjuste = 0;
      if (
        tipo_movimiento === undefined ||
        tipo_movimiento === null ||
        tipo_movimiento === "" ||
        obs === undefined ||
        obs === null ||
        obs === "" ||
        articulos === undefined ||
        articulos === null ||
        articulos === ""
      ) {
        return res.status(500).json({
          ok: false,
          msg: "Todos los campos son requeridos",
        });
      } else {
        //save movement in db
        var connection = DbConnection.initFunction();
        var query = `INSERT INTO ajustes_de_inventarios (tipo_movimiento_id, observaciones,  costo_neto, costo_imp, entradas, salidas, created_at, updated_at, user_id) VALUES ('${tipo_movimiento}', '${obs}',  '${costo_neto}', '${costo_imp}', '${entradas}', '${salidas}', NOW(), NOW(), '${uid}')`;
        connection.query(query, (err, result) => {
          if (err) {
            return res.status(500).json({
              ok: false,
              msg: "Error al consultar la base de datos",
              err,
            });
          }
          idAjuste = result.insertId;
          console.log("idAjuste: " + idAjuste);
          //save movement details in db
          let error = false;
          let errorMessages = [];
          var query2 = `INSERT INTO detalle_ajustes_de_inventarios (ajuste_de_inventario_id, articulo_id, costo_neto, costo_imp, entradas, salidas, created_at, updated_at) VALUES ?`;
          var values = [];
          articulos.forEach((articulo) => {
            values = [];
            //date utc - 3
            var now = new Date();
            now.setHours(now.getHours() - 3);

            values.push([
              idAjuste,
              articulo.id,
              articulo.costo_neto,
              articulo.costo_imp,
              articulo.entradas,
              articulo.salidas,
              now,
              now,
            ]);
            connection.query(query2, [values], (err, result) => {
              if (err) {
                error = true;
                errorMessages.push(err);
                console.log("error: " + error);
                console.log("err: " + err);
              } else {
                console.log("result: " + result);

                values = [];
                //update stock and update_at
                var query3 = `UPDATE articulos SET stock = stock + ${articulo.entradas} - ${articulo.salidas}, updated_at = NOW() WHERE id = ${articulo.id}`;

                connection.query(query3, (err, result) => {
                  if (err) {
                    error = true;
                    errorMessages.push(err);
                    console.log("error: " + error);
                    console.log("err: " + err);
                  } else {
                    console.log("result: " + result);
                    //save movement in detalle_movimientos_articulos
                    let cantidad = 0;
                    if (articulo.entradas > 0) {
                      cantidad = articulo.entradas;
                    } else {
                      cantidad = articulo.salidas;
                    }
                    var query4 = `INSERT INTO detalle_movimientos_articulos (movimiento_id, id_movimiento, producto_id, cantidad, usuario_id, created_at, updated_at) VALUES ('${tipo_movimiento}', '${idAjuste}', '${articulo.id}', '${cantidad}', '${uid}',  NOW(), NOW())`;
                    connection.query(query4, (err, result) => {
                      if (err) {
                        error = true;
                        errorMessages.push(err);
                        console.log("error: " + error);
                        console.log("err: " + err);
                      } else {
                        console.log("result: " + result);
                      }
                    });
                  }
                });
              }
            });
          });
          if (error) {
            return res.status(500).json({
              ok: false,
              msg: "Error al consultar la base de datos",
              errorMessages,
            });
          } else {
            return res.status(200).json({
              ok: true,
              msg: "Ajuste de inventario guardado",
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no valido",
      });
    }
  }
};

exports.getAllMovements = function (req, res) {
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
      var query =
        "SELECT aj.id as id, aj.costo_neto, aj.observaciones, aj.costo_imp, aj.entradas, aj.salidas, aj.created_at, u.name, tm.tipo_movimiento FROM ajustes_de_inventarios aj ";
      query += "INNER JOIN tipo_movimientos tm ";
      query += "ON tipo_movimiento_id = tm.id ";
      query += "INNER JOIN users u ";
      query += "ON user_id = u.id ";
      query += "ORDER BY aj.id DESC ";
      connection.query(query, (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Ajustes de inventario",
            result,
          });
        }
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

exports.getMovementDetails = function (req, res) {
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
      //get id from url
      var id = req.body.id;

      if (id == null || id === undefined || id === "") {
        return res.status(401).json({
          ok: false,
          msg: "El id es requerido",
        });
      } else {
        //get movement details and articles
        var connection = DbConnection.initFunction();
        var query =
          "SELECT aj.id as id, aj.costo_neto, aj.observaciones, aj.costo_imp, aj.entradas, aj.salidas, aj.created_at, u.name, tm.tipo_movimiento FROM ajustes_de_inventarios aj ";
        query += "INNER JOIN tipo_movimientos tm ";
        query += "ON tipo_movimiento_id = tm.id ";
        query += "INNER JOIN users u ";
        query += "ON user_id = u.id ";
        query += "WHERE aj.id = ? ";
        connection.query(query, [id], (err, result) => {
          if (err) {
            connection.end();
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al consultar la base de datos",
              err,
            });
          } else {
            //get articles
            var query2 = "SELECT * FROM detalle_ajustes_de_inventarios";
            query2 += " INNER JOIN articulos p ";
            query2 += " ON articulo_id = p.id ";
            query2 +=
              " WHERE detalle_ajustes_de_inventarios.ajuste_de_inventario_id = ?";
            connection.query(query2, [id], (err, result2) => {
              if (err) {
                connection.end();
                console.log(err);
                return res.status(500).json({
                  ok: false,
                  msg: "Error al consultar la base de datos",
                  err,
                });
              } else {
                connection.end();
                return res.status(200).json({
                  ok: true,
                  msg: "Ajustes de inventario",
                  movimiento: result,
                  productos: result2,
                });
              }
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no valido",
      });
    }
  }
};
