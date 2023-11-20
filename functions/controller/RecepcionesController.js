const DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllRecepciones = (req, res) => {
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
      const query = `SELECT recepciones.* , tipo_documento.tipo, entidades.nombre FROM recepciones  
        INNER JOIN tipo_documento ON recepciones.tipo_documento = tipo_documento.id
        INNER JOIN entidades ON recepciones.proveedor = entidades.rut`;

      connection.query(query, (err, result) => {
        if (err) {
          console.log("Error: " + err);
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Recepciones consultadas correctamente",
            recepciones: result,
          });
        }
      });
    } catch (error) {
      return res.status(401).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.getOneRecepcion = (req, res) => {
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
      let articles = [];
      let details;

      const id = req.body.id;
      const connection = DbConnection.initFunction();
      const queryDetails = ` SELECT recepciones.* , tipo_documento.tipo, entidades.nombre FROM recepciones  
        INNER JOIN tipo_documento ON recepciones.tipo_documento = tipo_documento.id
        INNER JOIN entidades ON recepciones.proveedor = entidades.rut
        WHERE recepciones.id = ${id}`;

      const queryArticles = `SELECT detalle_recepciones.*, articulos.descripcion, articulos.cod_interno  FROM detalle_recepciones
        INNER JOIN articulos ON detalle_recepciones.id_producto = articulos.id
        WHERE detalle_recepciones.id_recepcion = ${id}`;

      connection.query(queryDetails, (err, result) => {
        if (err) {
          console.log("Error: " + err);
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        } else {
          // the first result is the details of the recepcion
          details = result[0];
          // get the articles
          connection.query(queryArticles, (err, result) => {
            if (err) {
              console.log("Error: " + err);
              return res.status(500).json({
                ok: false,
                msg: "Error al consultar la base de datos",
                err,
              });
            } else {
              // the second result is the articles of the recepcion
              articles = result;
              return res.status(200).json({
                ok: true,
                msg: "Recepcion consultada correctamente",
                recepcion: details,
                articles: articles,
              });
            }
          });
        }
      });
    } catch (error) {
      return res.status(401).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.addRecepcion = async (req, res) => {
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
      console.log(req.body);
      // check if the recepcion exists, by the rut of the proveedor and the number and type of the document
      const connection = DbConnection.initFunction();
      const query = `SELECT * FROM recepciones WHERE proveedor = '${req.body.rut}' AND documento = ${req.body.documentNumber} AND tipo_documento = ${req.body.documentTypeId}`;
      await connection.query(query, (err, result) => {
        if (err) {
          console.log("Error: " + err);
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        } else {
          // if the recepcion exists, return an error
          console.log(result);
          console.log(query);
          if (result.length > 0) {
            return res.status(400).json({
              ok: false,
              msg: "La recepcion ya existe",
            });
          } else {
            console.log(req.body.saleDetails);
            // add the recepcion
            const query = `INSERT INTO recepciones (proveedor, documento, tipo_documento, fecha, costo_neto, costo_imp, unidades) VALUES ('${req.body.rut}', ${req.body.documentNumber}, ${req.body.documentTypeId}, NOW(), ${req.body.totalNetCost}, ${req.body.totalTaxCost}, ${req.body.totalUnits})`;
            connection.query(query, (err, result) => {
              if (err) {
                console.log("Error: " + err);
                return res.status(500).json({
                  ok: false,
                  msg: "Error al consultar la base de datos",
                  err,
                });
              } else {
                // get the id of the recepcion
                const id = result.insertId;
                // add the articles of the recepcion
                req.body.saleDetails.forEach((article) => {
                  const query = `INSERT INTO detalle_recepciones (id_recepcion, id_producto, unidades, costo_neto, costo_imp) VALUES (${id}, ${article.productId}, ${article.quantity}, ${article.netCost}, ${article.taxCost})`;
                  connection.query(query, (err, result) => {
                    if (err) {
                      console.log("Error: " + err);
                      return res.status(500).json({
                        ok: false,
                        msg: "Error al consultar la base de datos",
                        err,
                      });
                    } else {
                      // update stock, cost and active of the article
                      const query = `UPDATE articulos SET stock = stock + ${article.quantity}, costo_neto = ${article.netCost}, costo_imp = ${article.taxCost}, activo = 1 WHERE id = ${article.productId}`;
                      connection.query(query, (err, result) => {
                        if (err) {
                          console.log("Error: " + err);
                          return res.status(500).json({
                            ok: false,
                            msg: "Error al consultar la base de datos",
                            err,
                          });
                        } else {
                          // add the movement of the article
                          const query = `INSERT INTO detalle_movimientos_articulos (movimiento_id, id_movimiento, producto_id, cantidad, usuario_id, created_at, updated_at) VALUES ('1', '${id}', '${article.productId}', '${article.quantity}', '${uid}',  NOW(), NOW())`;
                          connection.query(query, (err, result) => {
                            if (err) {
                              console.log("Error: " + err);
                              return res.status(500).json({
                                ok: false,
                                msg: "Error al consultar la base de datos",
                                err,
                              });
                            } else {
                              return res.status(200).json({
                                ok: true,
                                msg: "Recepcion agregada correctamente",
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                });
              }
            });
          }
        }
      });
    } catch (error) {
      return res.status(401).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};
