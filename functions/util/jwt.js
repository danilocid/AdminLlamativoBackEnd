var jwt = require("jsonwebtoken");
require("dotenv").config();

var jwtGenerator = (uid) => {
  return new Promise((resolve, reject) => {
    var payload = {
      uid,
    };
    var options = {
      expiresIn: "48h",
    };
    jwt.sign(payload, process.env.JWT_SECRET, options, (err, token) => {
      if (err) {
        reject("no se pudo generar el token");
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = { jwtGenerator };
