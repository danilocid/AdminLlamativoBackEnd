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
exports.GetEntityByRut = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.GetEntityByRut(req, res);
  });
});
// add client
exports.Create = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.Create(req, res);
  });
});
// update client
exports.Update = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    entities.updateEntity(req, res);
  });
});
