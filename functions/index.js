const functions = require("firebase-functions");
const cors = require("cors")({ origin: "*", setHeaders: true });
var login = require("./controller/loginController");

exports.login = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    login.login(request, response);
  });
});
