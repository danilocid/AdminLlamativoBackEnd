var DbConnection = require("../util/dbConnection");
var jwt = require("jsonwebtoken");

exports.getAllIssues = function (req, res) {
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
      console.log("uid: " + uid);

      var connection = DbConnection.initFunction();
      var query = `SELECT issues.*, issue_types.issue_type as Tipo, issue_statuses.name AS Status, issue_sections.name AS Seccion FROM issues INNER JOIN issue_types ON issues.id_type = issue_types.id INNER JOIN issue_statuses ON issues.id_status = issue_statuses.id INNER JOIN issue_sections ON issues.id_section = issue_sections.id; `;
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
            msg: "No hay issues",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Issues encontrados",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.getIssueById = function (req, res) {
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
      console.log("uid: " + uid);

      var connection = DbConnection.initFunction();
      query = `SELECT * FROM issues WHERE issues.id = ${req.body.id};`;
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
            msg: "No hay issues",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Issues encontrados",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.getAllStatus = function (req, res) {
  var token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("uid: " + uid);

      var connection = DbConnection.initFunction();
      var query = `SELECT * FROM issue_statuses;`;
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
            msg: "No hay status",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "status encontrados",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.getAllSections = function (req, res) {
  var token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("uid: " + uid);

      var connection = DbConnection.initFunction();
      var query = `SELECT * FROM issue_sections;`;
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
            msg: "No hay secciones",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "secciones encontradas",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.getAllTypes = function (req, res) {
  var token = req.headers.token;
  if (token === undefined) {
    return res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("uid: " + uid);

      var connection = DbConnection.initFunction();
      var query = `SELECT * FROM issue_types;`;
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
            msg: "No hay tipos",
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "tipos encontrados",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.updateIssue = function (req, res) {
  // validate token
  var token = req.headers.token;
  if (token === undefined) {
    res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("uid: " + uid);
      var issue = req.body.issue;
      var id_section = req.body.id_section;
      var id_status = req.body.id_status;
      var id_type = req.body.id_type;
      var id = req.body.id;
      var connection = DbConnection.initFunction();
      var query = `UPDATE issues SET issue = '${issue}', id_section = ${id_section}, id_status = ${id_status}, id_type = ${id_type}, updatedAt = NOW() WHERE id = ${id};`;
      connection.query(query, (err, result) => {
        connection.end();
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Issue actualizado",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.createIssue = function (req, res) {
  // validate token
  var token = req.headers.token;
  if (token === undefined) {
    res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("uid: " + uid);
      var issue = req.body.issue;
      var id_section = req.body.id_section;
      var id_status = req.body.id_status;
      var id_type = req.body.id_type;
      var connection = DbConnection.initFunction();
      var query = `INSERT INTO issues (issue, id_section, id_status, id_type, createdAt, updatedAt) VALUES ('${issue}', ${id_section}, ${id_status}, ${id_type}, NOW(), NOW());`;
      connection.query(query, (err, result) => {
        connection.end();
        if (err) {
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
          });
        }
        return res.status(200).json({
          ok: true,
          msg: "Issue creado",
          result,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};

exports.getReport = function (req, res) {
  // validate token
  var token = req.headers.token;
  if (token === undefined) {
    res.status(403).json({
      ok: false,
      msg: "No hay token",
    });
  } else {
    try {
      var { uid } = jwt.verify(token, process.env.JWT_SECRET);
      console.log("uid: " + uid);
      var connection = DbConnection.initFunction();
      var types = "";
      var query = "SELECT issue_types.*, COUNT(issues.id_type) AS issues_count";
      query = query + " FROM issue_types";
      query = query + " LEFT JOIN issues";
      query = query + " ON (issue_types.id = issues.id_type)";
      query = query + " GROUP BY issue_types.id;";
      connection.query(query, (err, resultTypes) => {
        if (err) {
          connection.end();
          return res.status(500).json({
            ok: false,
            msg: "Error al consultar la base de datos",
            err,
            query,
          });
        } else {
          var query =
            "SELECT issue_statuses.*, COUNT(issues.id_status) AS issues_count";
          query = query + " FROM issue_statuses";
          query = query + " LEFT JOIN issues";
          query = query + " ON (issue_statuses.id = issues.id_status)";
          query = query + " GROUP BY issue_statuses.id;";
          connection.query(query, (err, resultStatuses) => {
            if (err) {
              connection.end();
              return res.status(500).json({
                ok: false,
                msg: "Error al consultar la base de datos",
                err,
                query,
              });
            } else {
              query =
                "SELECT issue_sections.*, COUNT(issues.id_section) AS issues_count";
              query = query + " FROM issue_sections";
              query = query + " LEFT JOIN issues";
              query = query + " ON (issue_sections.id = issues.id_section)";
              query = query + " GROUP BY issue_sections.id;";
              connection.query(query, (err, resultSections) => {
                if (err) {
                  connection.end();
                  return res.status(500).json({
                    ok: false,
                    msg: "Error al consultar la base de datos",
                    err,
                    query,
                  });
                } else {
                  connection.end();
                  return res.status(200).json({
                    ok: true,
                    msg: "Reporte",
                    types: resultTypes,
                    statuses: resultStatuses,
                    sections: resultSections,
                  });
                }
              });
            }
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        ok: false,
        msg: "Token inválido",
      });
    }
  }
};
