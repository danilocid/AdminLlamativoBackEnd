var mysql = require("mysql");
const { dbConfig } = require("../util/config");

exports.initFunction = function () {
  var connection = mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
  });

  connection.connect();
  return connection;
};
