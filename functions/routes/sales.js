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

//get all medio de pago
exports.addSale = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.addSale(request, response);
  });
});
