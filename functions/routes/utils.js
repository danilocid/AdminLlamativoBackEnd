const functions = require("firebase-functions");
const utils = require("../controller/utilsController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

// get all regions
exports.getAllRegions = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.getAllRegions(request, response);
  });
});

// get all comunas by regionid
exports.getAllComunasByRegionId = functions.https.onRequest(
  (request, response) => {
    cors(request, response, () => {
      utils.getAllComunasByRegionId(request, response);
    });
  }
);

// get all tipo de documento
exports.getAllTipoDocumento = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.getAllTipoDocumento(request, response);
  });
});

// get all medio de pago
exports.getAllMedioPago = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.getAllMedioPago(request, response);
  });
});
