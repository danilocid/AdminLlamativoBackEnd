const DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const axios = require("axios");

exports.getAllFromApi = async (req, res) => {
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
      let responseData;
      // get month and year
      const month = req.body.month;
      const year = req.body.year;
      const url =
        "https://servicios.simpleapi.cl/api/RCV/compras/" + month + "/" + year;

      await axios
        .get(url, {
          auth: {
            username: process.env.SIMPLE_API_USER,
            password: process.env.SIMPLE_API_PASS_2,
          },
          data: {
            RutUsuario: process.env.SIMPLE_API_RUT_USUARIO,
            PasswordSII: process.env.SIMPLE_API_PASS_SII,
            RutEmpresa: process.env.SIMPLE_API_RUT_EMPRESA,
            Ambiente: 1,
            Detallado: true,
          },
        })
        .then(async (response) => {
          responseData = response.data;

          let queryEntities = `SELECT * FROM entidades WHERE rut in (`;
          const proveedoresFromApi = [];
          if (responseData.compras.detalleCompras.length === 0) {
            return res.status(200).json({
              ok: true,
              msg: "Sin compras para ingresar",
            });
          }
          await responseData.compras.detalleCompras.forEach((compra) => {
            // if rutProveedor not in proveedoresFromApi, add it
            if (!proveedoresFromApi.includes(compra.rutProveedor)) {
              proveedoresFromApi.push(compra.rutProveedor);
              queryEntities += `'${compra.rutProveedor}',`;
            }
          });
          queryEntities = queryEntities.slice(0, -1);
          queryEntities += `)`;
          // check if entity exists
          let entidades = [];
          const connection = DbConnection.initFunction();
          await connection.query(queryEntities, async (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                ok: false,
                msg: "Error al obtener las entidades",
                err,
              });
            } else {
              entidades = result;
              let createEntity = false;
              let queryCreateEntity = `INSERT INTO entidades (rut, nombre, giro, tipo, direccion, id_comuna, id_region, telefono, mail) VALUES `;
              // if not, create entity
              if (entidades.length === 0) {
                responseData.compras.detalleCompras.forEach(async (compra) => {
                  queryCreateEntity += `('${compra.rutProveedor}', '${compra.razonSocial}', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),`;
                  createEntity = true;
                });
                queryCreateEntity = queryCreateEntity.slice(0, -1);
              } else {
                // check if entityFrom Api exists in db

                responseData.compras.detalleCompras.forEach(async (compra) => {
                  const entityFromApi = entidades.find(
                    (entity) => entity.rut === compra.rutProveedor
                  );
                  if (entityFromApi === undefined) {
                    // if queryCreateEntity has the entity, don't add it
                    if (!queryCreateEntity.includes(compra.rutProveedor)) {
                      queryCreateEntity += `('${compra.rutProveedor}', '${compra.razonSocial}', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),`;
                      createEntity = true;
                    }
                  }
                });
                queryCreateEntity = queryCreateEntity.slice(0, -1);
              }
              // create entities
              if (createEntity) {
                await connection.query(queryCreateEntity, (err, result) => {
                  if (err) {
                    console.log(err);
                    return res.status(500).json({
                      ok: false,
                      msg: "Error al crear las entidades",
                      err,
                    });
                  } else {
                    this.insertCompras(req, res, responseData);
                  }
                });
              } else {
                this.insertCompras(req, res, responseData);
              }
            }
          });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data === "Límite de consultas alcanzado") {
            return res.status(401).json({
              ok: false,
              msg: "Límite de consultas alcanzado",
            });
          } else {
            return res.status(500).json({
              ok: false,
              msg: "Error al obtener compras",
              data: error.response.data,
            });
          }
        })
        .finally(() => {});
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token no válido",
      });
    }
  }
};

exports.insertCompras = async (req, res, responseData) => {
  // select compras from db, where rut = rutEmpresa and documento = folio
  let ruts = "";
  let folios = "";
  responseData.compras.detalleCompras.forEach((compra) => {
    ruts += `'${compra.rutProveedor}',`;
    folios += `${compra.folio},`;
  });
  ruts = ruts.slice(0, -1);
  folios = folios.slice(0, -1);
  const queryCompras = `SELECT * FROM compras WHERE proveedor in (${ruts}) AND documento in (${folios})`;
  const connection = DbConnection.initFunction();
  await connection.query(queryCompras, async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        ok: false,
        msg: "Error al obtener las compras",
        err,
      });
    } else {
      let createCompra = false;
      let queryCreateCompra = `INSERT INTO compras (proveedor, tipo_documento, documento, fecha_documento, monto_neto_documento, monto_imp_documento, costo_neto_documento, costo_imp_documento, tipo_compra, observaciones) VALUES `;

      result.forEach((compra) => {
        // if compra exists, remove it from responseData.compras.detalleCompras
        const compraFromApi = responseData.compras.detalleCompras.find(
          (compraApi) =>
            compraApi.rutProveedor === compra.proveedor &&
            compraApi.folio === compra.documento
        );
        if (compraFromApi !== undefined) {
          responseData.compras.detalleCompras.splice(
            responseData.compras.detalleCompras.indexOf(compraFromApi),
            1
          );
        }
      });

      responseData.compras.detalleCompras.forEach(async (compra) => {
        createCompra = true;
        queryCreateCompra += `('${compra.rutProveedor}', '${compra.tipoDTE}', '${compra.folio}', '${compra.fechaEmision}', '${compra.montoNeto}', '${compra.montoIvaRecuperable}', '${compra.montoNeto}', '${compra.montoIvaRecuperable}', 1, 'Pendiente'),`;
      });
      queryCreateCompra = queryCreateCompra.slice(0, -1);
      if (createCompra) {
        await connection.query(queryCreateCompra, (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al crear las compras",
              err,
            });
          } else {
            return res.status(200).json({
              ok: true,
              msg:
                responseData.compras.detalleCompras.length +
                " Compras ingresadas",
            });
          }
        });
      } else {
        return res.status(200).json({
          ok: true,
          msg: "Sin compras para ingresar",
        });
      }
    }
  });
};

exports.getAll = async (req, res) => {
  // get the month and year from the body
  const month = req.body.month;
  const year = req.body.year;

  const connection = DbConnection.initFunction();
  const query = `SELECT compras.*, entidades.nombre, tipo_compra.tipo_compra as tipo_compra_name, tipo_documento.tipo FROM compras
  INNER JOIN entidades ON compras.proveedor = entidades.rut
  INNER JOIN tipo_compra ON compras.tipo_compra = tipo_compra.id
  INNER JOIN tipo_documento ON compras.tipo_documento = tipo_documento.id
  WHERE MONTH(compras.fecha_documento) = ${month} AND YEAR(compras.fecha_documento) = ${year}
  `;
  await connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        ok: false,
        msg: "Error al obtener las compras",
        err,
      });
    } else {
      return res.status(200).json({
        ok: true,
        msg: "Compras obtenidas",
        compras: result,
      });
    }
  });
};

exports.getAllComprasType = async (req, res) => {
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
      const query = `SELECT * FROM tipo_compra`;
      await connection.query(query, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener los tipos de compra",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Tipos de compra obtenidos",
            tipos: result,
          });
        }
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

exports.updateCompra = async (req, res) => {
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
      const id = req.body.id;
      const tipoCompra = req.body.tipo;
      const observaciones = req.body.observaciones;
      const costo_total = req.body.costo_total;
      const costo_neto = costo_total / 1.19;
      const costo_imp = costo_total - costo_neto;
      const connection = DbConnection.initFunction();
      const query = `UPDATE compras SET tipo_compra = ${tipoCompra}, observaciones = '${observaciones}', costo_neto_documento = ${costo_neto}, costo_imp_documento = ${costo_imp} WHERE id = ${id}`;
      await connection.query(query, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al actualizar la compra",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Compra actualizada",
          });
        }
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

exports.importCompras = async (req, res) => {
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
      const compras = req.body.data;
      const connection = DbConnection.initFunction();

      let queryEntities = `SELECT * FROM entidades WHERE rut in (`;
      const proveedoresFromApi = [];
      if (compras === 0) {
        return res.status(200).json({
          ok: true,
          msg: "Sin compras para ingresar",
        });
      }
      const comprasFixed = [];
      compras.forEach((compra) => {
        const compraFixed = {
          rutProveedor: compra["RUT Proveedor"],
          razonSocial: compra["Razon Social"],
          tipoDTE: +compra["Tipo Doc"],
          folio: +compra.Folio,
          fechaEmision: compra["Fecha Docto"],
          montoNeto: +compra["Monto Neto"],
          montoImp: compra["Monto IVA Recuperable"],
        };
        comprasFixed.push(compraFixed);
      });
      await comprasFixed.forEach((compra) => {
        // if rutProveedor not in proveedoresFromApi, add it
        if (!proveedoresFromApi.includes(compra.rutProveedor)) {
          proveedoresFromApi.push(compra.rutProveedor);
          queryEntities += `'${compra.rutProveedor}',`;
        }
      });
      queryEntities = queryEntities.slice(0, -1);
      queryEntities += `)`;
      // check if entity exists
      let entidades = [];
      await connection.query(queryEntities, async (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener las entidades",
            err,
          });
        } else {
          entidades = result;
          let createEntity = false;
          let queryCreateEntity = `INSERT INTO entidades (rut, nombre, giro, tipo, direccion, id_comuna, id_region, telefono, mail) VALUES `;
          // if not, create entity
          if (entidades.length === 0) {
            comprasFixed.forEach(async (compra) => {
              queryCreateEntity += `('${compra.rutProveedor}', '${compra.razonSocial}', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, 'cidybadilla@gmail.com'),`;
              createEntity = true;
            });
            queryCreateEntity = queryCreateEntity.slice(0, -1);
          } else {
            // check if entityFrom Api exists in db

            comprasFixed.forEach(async (compra) => {
              const entityFromApi = entidades.find(
                (entity) => entity.rut === compra.rutProveedor
              );
              if (entityFromApi === undefined) {
                // if queryCreateEntity has the entity, don't add it
                if (!queryCreateEntity.includes(compra.rutProveedor)) {
                  queryCreateEntity += `('${compra.rutProveedor}', '${compra.razonSocial}', 'Sin giro', 'P', 'Sin dirección', 204, 10, 94679847, , 'cidybadilla@gmail.com'),`;
                  createEntity = true;
                }
              }
            });
            queryCreateEntity = queryCreateEntity.slice(0, -1);
          }
          // create entities
          if (createEntity) {
            await connection.query(queryCreateEntity, (err, result) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  ok: false,
                  msg: "Error al crear las entidades",
                  err,
                });
              } else {
                this.insertComprasImport(req, res, comprasFixed);
              }
            });
          } else {
            this.insertComprasImport(req, res, comprasFixed);
          }
        }
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

exports.insertComprasImport = async (req, res, compras) => {
  // select compras from db, where rut = rutEmpresa and documento = folio
  let ruts = "";
  let folios = "";
  compras.forEach((compra) => {
    ruts += `'${compra.rutProveedor}',`;
    folios += `${compra.folio},`;
  });
  ruts = ruts.slice(0, -1);
  folios = folios.slice(0, -1);
  const queryCompras = `SELECT * FROM compras WHERE proveedor in (${ruts}) AND documento in (${folios})`;
  const connection = DbConnection.initFunction();
  await connection.query(queryCompras, async (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        ok: false,
        msg: "Error al obtener las compras",
        err,
      });
    } else {
      let createCompra = false;
      let queryCreateCompra = `INSERT INTO compras (proveedor, tipo_documento, documento, fecha_documento, monto_neto_documento, monto_imp_documento, costo_neto_documento, costo_imp_documento, tipo_compra, observaciones) VALUES `;

      result.forEach((compra) => {
        // if compra exists, remove it from responseData.compras.detalleCompras
        const compraFromApi = compras.find(
          (compraApi) =>
            compraApi.rutProveedor === compra.proveedor &&
            compraApi.folio === compra.documento
        );
        if (compraFromApi !== undefined) {
          compras.splice(compras.indexOf(compraFromApi), 1);
        }
      });

      compras.forEach(async (compra) => {
        createCompra = true;
        // format date to yyyy-mm-dd from dd/mm/yyyy
        const date = compra.fechaEmision.split("/");
        const dateFormatted = `${date[2]}-${date[1]}-${date[0]}`;

        queryCreateCompra += `('${compra.rutProveedor}', '${compra.tipoDTE}', '${compra.folio}', '${dateFormatted}', '${compra.montoNeto}', '${compra.montoImp}', '${compra.montoNeto}', '${compra.montoImp}', 1
        , 'Pendiente'),`;
      });
      queryCreateCompra = queryCreateCompra.slice(0, -1);

      if (createCompra) {
        await connection.query(queryCreateCompra, (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al crear las compras",
              err,
            });
          } else {
            return res.status(200).json({
              ok: true,
              msg: compras.length + " Compras ingresadas",
            });
          }
        });
      } else {
        return res.status(200).json({
          ok: true,
          msg: "Sin compras para ingresar",
        });
      }
    }
  });
};
