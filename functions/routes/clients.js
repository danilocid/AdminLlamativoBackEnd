const functions = require("firebase-functions");
const clients = require("../controller/clientsController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

// get all clients
exports.getAllClients = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    clients.getAllClients(req, res);
  });
});
// get client by rut
exports.getClientByRut = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    clients.getClientByRut(req, res);
  });
});
// add client
exports.addClient = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    clients.createClient(req, res);
  });
});
// update client
exports.updateClient = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    clients.updateClient(req, res);
  });
});
