const functions = require("firebase-functions");
const async = require("async");
const cors = require("cors")({
  origin: "*",
  origin: "https://localhost:4200",
  origin: "https://sivig-ae865.web.app",
  origin: "https://sivig-ae865.firebaseapp.com",
  origin: "*",
  credentials: true,
});

//login

exports.users = require("./routes/users");

//issues
exports.issues = require("./routes/issues");
//products
exports.products = require("./routes/products");
//utils
exports.utils = require("./routes/utils");
//clients
exports.clients = require("./routes/clients");
