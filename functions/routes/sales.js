const functions = require("firebase-functions");
var utils = require("../controller/salesController");
const cors = require("cors")({
  origin: "*",
  origin: "https://localhost:4200",
  origin: "https://sivig-ae865.web.app",
  origin: "https://sivig-ae865.firebaseapp.com",
  origin: "*",
  credentials: true,
});

exports.addSale = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.addSale(request, response);
  });
});

exports.getSales = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.getSales(request, response);
  });
});

exports.getSaleById = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.getSaleById(request, response);
  });
});
