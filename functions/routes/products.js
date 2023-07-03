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
exports.GetAllWhitStock = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getAllProducts(request, response, true);
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

//get last count of product with token
exports.GetLastCount = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getLastCountedProducts(request, response);
  });
});

//get all movements types with token
exports.GetMovementsTypes = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getAllMovementsTypes(request, response);
  });
});

//save movement with token
exports.SaveMovement = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.saveMovement(request, response);
  });
});

//get all movements with token
exports.GetAllMovements = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getAllMovements(request, response);
  });
});

//get detail of movement with token
exports.GetMovementDetail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getMovementDetails(request, response);
  });
});

//get resume of products
exports.GetResume = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    products.getResumeInventario(request, response);
  });
});
