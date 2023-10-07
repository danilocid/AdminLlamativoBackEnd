const mysql = require("mysql");
require("dotenv").config();

exports.initFunction = function () {
  const connection = mysql.createConnection({
    host: "190.13.188.105",
    port: process.env.DB_PORT,
    user: "orhanoik_sivig_laravel",
    password: "94679847Ad-$",
    database: "orhanoik_sivig_laravel_dev",
  });

  connection.connect();
  return connection;
};
