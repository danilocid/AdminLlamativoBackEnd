var DbConnection = require("../util/dbConnection");
var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.addSale = (req, res) => {
  console.log("addSale");
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
      // get data from request
      var {
        monto_neto,
        monto_imp,
        costo_neto,
        costo_imp,
        tipo_documento,
        documento,
        cliente,
        medio_pago,
        productos,
      } = req.body;
      // get db connection
      var connection = DbConnection.initFunction();
      // execute query
      var query = `INSERT INTO ventas ( monto_neto, monto_imp, costo_neto, costo_imp, tipo_documento, documento, cliente, medio_pago, usuario) VALUES (${monto_neto}, ${monto_imp}, ${costo_neto}, ${costo_imp}, '${tipo_documento}', '${documento}', '${cliente}', ${medio_pago}, ${uid})`;
      console.log(query);
      connection.query(query, function (err, result, fields) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al insertar venta",
            err: err,
          });
        }
        console.log("result: " + result);
        var venta_id = result.insertId;
        console.log("venta_id: " + venta_id);
        // insert productos
        var query = "";
        var hasError = false;
        productos.forEach((producto) => {
          query = `INSERT INTO detalle_ventas (id_venta, articulo, cantidad, precio_neto, precio_imp, costo_neto, costo_imp) VALUES (${venta_id}, ${producto.id}, ${producto.quantity}, ${producto.venta_neto}, ${producto.venta_imp}, ${producto.costo_neto}, ${producto.costo_imp})`;
          console.log(query);
          connection.query(query, function (err, result, fields) {
            if (err) {
              console.log(err);
              hasError = true;
            }
            console.log("result: " + result);
          });
          query2 = `UPDATE articulos SET stock = stock - ${producto.quantity} WHERE id = ${producto.id}`;
          console.log(query2);
          connection.query(query2, function (err, result, fields) {
            if (err) {
              console.log(err);
              hasError = true;
            }
            console.log("result: " + result);
          });

          query3 = `INSERT INTO detalle_movimientos_articulos (movimiento_id, id_movimiento, producto_id, cantidad, usuario_id, created_at, updated_at) VALUES ('2', '${venta_id}', '${producto.id}', '${producto.quantity}', '${uid}',  NOW(), NOW())`;
          console.log(query3);
          connection.query(query3, function (err, result, fields) {
            if (err) {
              console.log(err);
              hasError = true;
            }
            console.log("result: " + result);
          });
        });
        // close db connection
        connection.end();
        if (!hasError) {
          return res.status(200).json({
            ok: true,
            msg: "Venta insertada correctamente",
          });
        } else {
          return res.status(500).json({
            ok: false,
            msg: "Error al insertar venta",
            err: err,
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

exports.getSales = (req, res) => {
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
      // get db connection
      var connection = DbConnection.initFunction();
      // execute query
      var query =
        "SELECT v.id, v.monto_neto, v.monto_imp, v.fecha, c.nombre, td.tipo, md.medio_de_pago, v.documento FROM ventas v ";
      query += "INNER JOIN tipo_documento td ";
      query += "INNER JOIN medios_de_pago md ";
      query +=
        "INNER JOIN clientes c WHERE tipo_documento = td.id AND medio_pago = md.id AND cliente = c.rut";
      console.log(query);
      connection.query(query, function (err, result) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener ventas",
            err: err,
          });
        }
        console.log("result: " + result);
        // close db connection
        connection.end();
        return res.status(200).json({
          ok: true,
          msg: "Ventas obtenidas correctamente",
          sales: result,
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

exports.getSaleById = (req, res) => {
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
      var detail = [];
      // get db connection
      var connection = DbConnection.initFunction();
      // execute query
      var query =
        "SELECT v.id, v.monto_neto, v.monto_imp, v.costo_neto, v.costo_imp, v.fecha, c.nombre, td.tipo, md.medio_de_pago, v.documento FROM ventas v ";
      query += "INNER JOIN tipo_documento td ";
      query += "INNER JOIN medios_de_pago md ";
      query +=
        "INNER JOIN clientes c WHERE tipo_documento = td.id AND medio_pago = md.id AND cliente = c.rut and v.id = " +
        id;
      console.log(query);
      connection.query(query, function (err, result) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            ok: false,
            msg: "Error al obtener venta",
            err: err,
          });
        }
        console.log("result: " + result);
        // close db connection
        //obtener detalle de venta
        var query2 =
          "SELECT dv.articulo, dv.cantidad, dv.precio_neto, dv.precio_imp, dv.costo_neto, dv.costo_imp, a.descripcion FROM detalle_ventas dv ";
        query2 += "INNER JOIN articulos a ";
        query2 += "WHERE dv.articulo = a.id AND dv.id_venta = " + id;
        console.log(query2);
        connection.query(query2, function (err, result2) {
          if (err) {
            console.log(err);
            return res.status(500).json({
              ok: false,
              msg: "Error al obtener detalle de venta",
              err: err,
            });
          }
          console.log("result2: " + result2);
          detail = result2;
          // close db connection
          connection.end();
          return res.status(200).json({
            ok: true,
            msg: "Venta obtenida correctamente",
            sale: result,
            detail: detail,
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