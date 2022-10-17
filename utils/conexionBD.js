var mysql = require("mysql");

exports.initFunction = function () {
  var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "sivig_laravel",
  });

  connection.connect();
  return connection;
};
