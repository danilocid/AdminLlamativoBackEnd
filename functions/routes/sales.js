const functions = require("firebase-functions");
const utils = require("../controller/salesController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

exports.addSale = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      utils.addSale(request, response);
    });
  });

exports.getSales = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      utils.getSales(request, response);
    });
  });

exports.getSaleById = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      utils.getSaleById(request, response);
    });
  });
