const functions = require("firebase-functions");
const entities = require("../controller/EntitiesController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

// get all clients
exports.GetAll = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.getAll(req, res);
  });
});
// get client by rut
exports.getClientByRut = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.getClientByRut(req, res);
  });
});
// add client
exports.addClient = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.createClient(req, res);
  });
});
// update client
exports.updateClient = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.updateClient(req, res);
  });
});
