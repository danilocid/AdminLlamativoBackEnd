const DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllProducts = function (req, res, conStock = false, activo = true) {
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
      //  console.log(req.query);
      activo = req.query.active;
      // console.log("activo: " + activo);
      if (activo === undefined || activo === null || activo === "") {
        activo = true;
      }
      //  console.log("activo: " + activo);
      conStock = req.query.stock;
      //  console.log("conStock: " + conStock);
      if (conStock === undefined || conStock === null || conStock === "") {
        conStock = false;
      }
      //  console.log("conStock: " + conStock);
      //  console.log("uid: " + uid);
      const connection = DbConnection.initFunction();
      let query = `SELECT * FROM articulos`;
      if (!conStock || conStock === "false") {
        //  console.log("no con stock");

        if (activo === "true") {
          //  console.log("activo");
          query += ` WHERE activo = 1`;
        }
      } else {
        //  console.log("con stock");
        query = `SELECT * FROM articulos WHERE stock > 0`;
        if (activo === "true") {
          //  console.log("activo");
          query += ` AND activo = 1`;
        }
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
          return res.status(200).json({
            ok: false,
            msg: "No hay productos",
          });
        }
        // console.log("result: " + result);
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
        let query = `SELECT detalle_movimientos_articulos.*, tipo_movimientos.tipo_movimiento, users.name FROM detalle_movimientos_articulos `;
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
  const token = req.headers.token;
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
      const query = `INSERT INTO articulos (cod_interno, cod_barras, descripcion, costo_neto, costo_imp, venta_neto, venta_imp, stock_critico, stock, activo, created_at, updated_at) VALUES ('${cod_interno}', '${cod_barras}', '${descripcion}', '${costo_neto}', '${costo_imp}', '${venta_neto}', '${venta_imp}', '${stock_critico}', 0, '${activo}', NOW(), NOW())`;
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
      const query = `SELECT * FROM articulos ORDER BY last_cont ASC LIMIT 5`;
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
      const query = `SELECT * FROM tipo_movimientos`;
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
      const tipo_movimiento = req.body.tipo_movimiento;
      const obs = req.body.obs;
      const articulos = req.body.articulos;
      const costo_neto = req.body.costo_neto;
      const costo_imp = req.body.costo_imp;
      const entradas = req.body.entradas;
      const salidas = req.body.salidas;
      let idAjuste = 0;
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
        // save movement in db
        const connection = DbConnection.initFunction();
        const query = `INSERT INTO ajustes_de_inventarios (tipo_movimiento_id, observaciones,  costo_neto, costo_imp, entradas, salidas, created_at, updated_at, user_id) VALUES ('${tipo_movimiento}', '${obs}',  '${costo_neto}', '${costo_imp}', '${entradas}', '${salidas}', NOW(), NOW(), '${uid}')`;
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
          // save movement details in db
          let error = false;
          const errorMessages = [];
          const query2 = `INSERT INTO detalle_ajustes_de_inventarios (ajuste_de_inventario_id, articulo_id, costo_neto, costo_imp, entradas, salidas, created_at, updated_at) VALUES ?`;
          let values = [];
          articulos.forEach((articulo) => {
            values = [];
            // date utc - 3
            const now = new Date();
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
                // update stock and update_at
                const query3 = `UPDATE articulos SET stock = stock + ${articulo.entradas} - ${articulo.salidas}, updated_at = NOW() WHERE id = ${articulo.id}`;

                connection.query(query3, (err, result) => {
                  if (err) {
                    error = true;
                    errorMessages.push(err);
                    console.log("error: " + error);
                    console.log("err: " + err);
                  } else {
                    console.log("result: " + result);
                    // save movement in detalle_movimientos_articulos
                    let cantidad = 0;
                    if (articulo.entradas > 0) {
                      cantidad = articulo.entradas;
                    } else {
                      cantidad = articulo.salidas;
                    }
                    const query4 = `INSERT INTO detalle_movimientos_articulos (movimiento_id, id_movimiento, producto_id, cantidad, usuario_id, created_at, updated_at) VALUES ('${tipo_movimiento}', '${idAjuste}', '${articulo.id}', '${cantidad}', '${uid}',  NOW(), NOW())`;
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
      let query =
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
      // get id from url
      const id = req.body.id;

      if (id == null || id === undefined || id === "") {
        return res.status(401).json({
          ok: false,
          msg: "El id es requerido",
        });
      } else {
        // get movement details and articles
        const connection = DbConnection.initFunction();
        let query =
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
            // get articles
            let query2 = "SELECT * FROM detalle_ajustes_de_inventarios";
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

exports.getResumeInventario = async function (req, res) {
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
      const query = `SELECT * FROM articulos`;
      const connection = DbConnection.initFunction();
      let productos = [];
      let totalUnits = 0;
      let totalCost = 0;
      let totalSale = 0;
      let totalProfit = 0;
      await connection.query(query, (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        } else {
          productos = result;
          productos.forEach((producto) => {
            totalUnits += producto.stock;
            totalCost +=
              producto.stock * (producto.costo_neto + producto.costo_imp);
            totalSale +=
              producto.stock * (producto.venta_neto + producto.venta_imp);
            totalProfit +=
              producto.stock *
              (producto.venta_neto +
                producto.venta_imp -
                producto.costo_neto -
                producto.costo_imp);
          });
          return res.status(200).json({
            ok: true,
            msg: "Inventario",
            totalUnits,
            totalCost,
            totalSale,
            totalProfit,
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
