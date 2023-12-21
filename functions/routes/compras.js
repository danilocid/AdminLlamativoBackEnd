const functions = require("firebase-functions");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});
const compras = require("../controller/ComprasController");

// get all compras from simpleapi

exports.GetAllFromApi = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    compras.getAllFromApi(req, res);
  });
});

// get all compras from db
exports.GetAllFromDb = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    compras.getAll(req, res);
  });
});

// get all compras types

exports.GetAllTypes = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    compras.getAllComprasType(req, res);
  });
});

//  update compra
exports.UpdateCompra = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    compras.updateCompra(req, res);
  });
});

// import compras from file
exports.ImportFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    compras.importCompras(req, res);
  });
});
