const functions = require("firebase-functions");
var jwt = require("jsonwebtoken");
var products = require("../controller/productsController");
const cors = require("cors")({
  origin: "*",
  origin: "https://localhost:4200",
  origin: "https://sivig-ae865.web.app",
  origin: "https://sivig-ae865.firebaseapp.com",
  origin: "*",
  credentials: true,
});

//products
// all products with token
exports.GetAll = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getAllProducts(request, response);
  });
});

// product by id with token
exports.Get = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getProduct(request, response);
  });
});

//update product with token
exports.Update = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.updateProduct(request, response);
  });
});

//create product with token
exports.Create = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.createProduct(request, response);
  });
});

//get product by id whit movements with token
exports.GetMovements = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getProductWithMovements(request, response);
  });
});
