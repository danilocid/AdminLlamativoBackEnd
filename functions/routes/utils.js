const functions = require("firebase-functions");
var utils = require("../controller/utilsController");
const cors = require("cors")({
  origin: "*",
  origin: "https://localhost:4200",
  origin: "https://sivig-ae865.web.app",
  origin: "https://sivig-ae865.firebaseapp.com",
  origin: "*",
  credentials: true,
});

//get all regions
exports.getAllRegions = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    utils.getAllRegions(request, response);
  });
});

//get all comunas by regionid
exports.getAllComunasByRegionId = functions.https.onRequest(
  (request, response) => {
    cors(request, response, () => {
      utils.getAllComunasByRegionId(request, response);
    });
  }
);
