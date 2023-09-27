const functions = require("firebase-functions");
const login = require("../controller/loginController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

exports.login = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    login.login(request, response);
  });
});
