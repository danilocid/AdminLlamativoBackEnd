var DbConnection = require("../util/dbConnection");
var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getAllClients = (req, res) => {
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
      var sql =
        "SELECT clientes.*, regiones.region, comunas.comuna FROM clientes";
      sql += " INNER JOIN regiones ON clientes.id_region = regiones.id";
      sql += " INNER JOIN comunas ON clientes.id_comuna = comunas.id";
      connection.query(sql, (err, result) => {
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

exports.getClientByRut = (req, res) => {
  // validate token
  var token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    //validate rut exists
    if (req.body.rut === undefined) {
      return res.status(403).json({
        ok: false,
        msg: "No hay rut",
      });
    } else {
      try {
        var { uid } = jwt.verify(token, process.env.JWT_SECRET);
        var rut = req.body.rut;
        req.uid = uid;
        console.log("uid: " + uid);
        var connection = DbConnection.initFunction();
        var sql =
          "SELECT clientes.*, regiones.region, comunas.comuna FROM clientes";
        sql += " INNER JOIN regiones ON regiones.id = clientes.id_region";
        sql += " INNER JOIN comunas ON clientes.id_comuna = comunas.id";
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

exports.createClient = (req, res) => {
  //validate token
  var token = req.headers.token;
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
        var { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        console.log("uid: " + uid);
        var connection = DbConnection.initFunction();
        var sql = "INSERT INTO clientes SET ?";
        var data = {
          rut: req.body.rut,
          nombre: req.body.nombre,
          giro: req.body.giro,
          direccion: req.body.direccion,
          id_region: req.body.region,
          id_comuna: req.body.comuna,
          telefono: req.body.telefono,
          mail: req.body.mail,
        };
        connection.query(sql, [data], (err, result) => {
          connection.end();
          if (err) {
            console.log(err);
            //if rut already exists
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

exports.updateClient = (req, res) => {
  //validate token
  var token = req.headers.token;
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
        var { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        console.log("uid: " + uid);
        var connection = DbConnection.initFunction();
        var sql = "UPDATE clientes SET ? WHERE rut = ?";
        var data = {
          nombre: req.body.nombre,
          giro: req.body.giro,
          direccion: req.body.direccion,
          id_region: req.body.region,
          id_comuna: req.body.comuna,
          telefono: req.body.telefono,
          mail: req.body.mail,
        };
        connection.query(sql, [data, req.body.rut], (err, result) => {
          connection.end();

          if (err) {
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al actualizar cliente",
              err: err,
            });
          } else {
            return res.status(200).json({
              ok: true,
              msg: "Cliente actualizado",
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
