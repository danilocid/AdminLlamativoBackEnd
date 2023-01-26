const functions = require("firebase-functions");
var login = require("../controller/loginController");
const cors = require("cors")({
  origin: "*",
  origin: "https://localhost:4200",
  origin: "https://sivig-ae865.web.app",
  origin: "https://sivig-ae865.firebaseapp.com",
  origin: "*",
  credentials: true,
});

exports.login = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    login.login(request, response);
  });
});
