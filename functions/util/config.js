require("dotenv").config();

const dbConfig = {
  host: "190.13.188.105",
  user: "orhanoik_sivig_laravel",
  password: "94679847Ad-$",
  database: "orhanoik_sivig_laravel_dev",
  port: 3306,
};

/* const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
}; */

module.exports = { dbConfig };
