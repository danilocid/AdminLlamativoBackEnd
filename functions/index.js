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
var login = require("./controller/loginController");
var products = require("./controller/productsController");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    login.login(request, response);
  });
});

//products
// all products with token
exports.productsGetAll = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getAllProducts(request, response);
  });
});

// product by id with token
exports.productsGetById = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getProduct(request, response);
  });
});

//edit product with token
exports.productsUpdate = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.updateProduct(request, response);
  });
});

//create product with token
exports.productsCreate = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.createProduct(request, response);
  });
});
