const DbConnection = require("../util/dbConnection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAll = (req, res) => {
  // validate token
  const token = req.headers.token;
  const type = req.query.t || "a";
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
      let sql =
        "SELECT entidades.*, regiones.region, comunas.comuna FROM entidades";
      sql += " INNER JOIN regiones ON entidades.id_region = regiones.id";
      sql += " INNER JOIN comunas ON entidades.id_comuna = comunas.id";
      if (type === "c") {
        sql += " WHERE entidades.tipo in ('C', 'B')";
      }
      if (type === "p") {
        sql += " WHERE entidades.tipo in ('P', 'B')";
      }
      connection.query(sql, (err, result) => {
        connection.end();
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener las entidades",
            err,
          });
        } else {
          return res.status(200).json({
            ok: true,
            msg: "Entidades obtenidos",
            data: result,
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

exports.GetEntityByRut = (req, res) => {
  // validate token
  const token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    // validate rut exists
    if (req.body.rut === undefined) {
      return res.status(403).json({
        ok: false,
        msg: "No hay rut",
      });
    } else {
      try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        const rut = req.body.rut;
        req.uid = uid;
        const connection = DbConnection.initFunction();
        let sql =
          "SELECT entidades.*, regiones.region, comunas.comuna FROM entidades";
        sql += " INNER JOIN regiones ON regiones.id = entidades.id_region";
        sql += " INNER JOIN comunas ON entidades.id_comuna = comunas.id";
        sql += " WHERE rut = ?";

        connection.query(sql, [rut], (err, result) => {
          connection.end();
          if (err) {
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al obtener los clientes",
              err,
            });
          } else {
            return res.status(200).json({
              ok: true,
              msg: "Clientes obtenidos",
              data: result[0],
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
  }
};

exports.Create = (req, res) => {
  // validate token
  const token = req.headers.token;
  if (token === undefined) {
    res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    if (req.body.rut === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay rut",
      });
    } else if (req.body.nombre === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay nombre",
      });
    } else if (req.body.giro === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay giro",
      });
    } else if (req.body.direccion === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay dirección",
      });
    } else if (req.body.region === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay región",
      });
    } else if (req.body.comuna === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay comuna",
      });
    } else if (req.body.telefono === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay teléfono",
      });
    } else if (req.body.mail === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay email",
      });
    } else {
      try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        console.log("uid: " + uid);
        const connection = DbConnection.initFunction();
        const sql = "INSERT INTO entidades SET ?";
        const data = {
          rut: req.body.rut,
          nombre: req.body.nombre,
          giro: req.body.giro,
          direccion: req.body.direccion,
          id_region: req.body.region,
          id_comuna: req.body.comuna,
          telefono: req.body.telefono,
          mail: req.body.mail,
          tipo: req.body.tipo,
        };
        connection.query(sql, [data], (err, result) => {
          connection.end();
          if (err) {
            console.log(err);
            // if rut already exists
            if (err.errno === 1062) {
              return res.status(403).json({
                ok: false,
                msg: "Ya existe un cliente con ese rut",
              });
            } else {
              return res.status(500).json({
                ok: false,
                msg: "Error al crear cliente",
                err: err,
              });
            }
          } else {
            return res.status(200).json({
              ok: true,
              msg: "Cliente creado",
              data: result,
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
  }
};

exports.updateEntity = (req, res) => {
  // validate token
  const token = req.headers.token;
  if (token === undefined) {
    res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    if (req.body.rut === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay rut",
      });
    } else if (req.body.nombre === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay nombre",
      });
    } else if (req.body.giro === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay giro",
      });
    } else if (req.body.direccion === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay dirección",
      });
    } else if (req.body.region === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay región",
      });
    } else if (req.body.comuna === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay comuna",
      });
    } else if (req.body.telefono === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay teléfono",
      });
    } else if (req.body.mail === undefined) {
      res.status(403).json({
        ok: false,
        msg: "No hay email",
      });
    } else {
      try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        console.log("uid: " + uid);
        const connection = DbConnection.initFunction();
        const sql = "UPDATE entidades SET ? WHERE rut = ?";
        const data = {
          nombre: req.body.nombre,
          giro: req.body.giro,
          direccion: req.body.direccion,
          id_region: req.body.region,
          id_comuna: req.body.comuna,
          telefono: req.body.telefono,
          mail: req.body.mail,
          tipo: req.body.tipo,
        };
        connection.query(sql, [data, req.body.rut], (err, result) => {
          connection.end();

          if (err) {
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al actualizar entidad",
              err: err,
            });
          } else {
            return res.status(200).json({
              ok: true,
              msg: "Entidad actualizada",
              data: result,
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
  }
};
