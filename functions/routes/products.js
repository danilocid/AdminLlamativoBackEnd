const functions = require("firebase-functions");
const products = require("../controller/productsController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

// products
// all products with token
exports.GetAll = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getAllProducts(request, response);
    });
  });
exports.GetAllWhitStock = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getAllProducts(request, response, true);
    });
  });

// product by id with token
exports.Get = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getProduct(request, response);
    });
  });

// update product with token
exports.Update = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.updateProduct(request, response);
    });
  });

// create product with token
exports.Create = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.createProduct(request, response);
    });
  });

// get product by id whit movements with token
exports.GetMovements = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getProductWithMovements(request, response);
    });
  });

// get last count of product with token
exports.GetLastCount = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getLastCountedProducts(request, response);
    });
  });

// get all movements types with token
exports.GetMovementsTypes = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getAllMovementsTypes(request, response);
    });
  });

// save movement with token
exports.SaveMovement = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.saveMovement(request, response);
    });
  });

// get all movements with token
exports.GetAllMovements = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getAllMovements(request, response);
    });
  });

// get detail of movement with token
exports.GetMovementDetail = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getMovementDetails(request, response);
    });
  });

// get resume of products
exports.GetResume = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      products.getResumeInventario(request, response);
    });
  });
