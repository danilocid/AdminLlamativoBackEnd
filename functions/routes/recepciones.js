const functions = require("firebase-functions");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

const recepciones = require("../controller/RecepcionesController");

exports.GetAll = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      recepciones.getAllRecepciones(request, response);
    });
  });

exports.GetOne = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      recepciones.getOneRecepcion(request, response);
    });
  });

exports.Add = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      recepciones.addRecepcion(request, response);
    });
  });
