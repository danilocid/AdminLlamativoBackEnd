const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };
    const options = {
      expiresIn: "48h",
    };
    jwt.sign(payload, process.env.JWT_SECRET, options, (err, token) => {
      if (err) {
        console.log(err);
        reject("no se pudo generar el token");
      } else {
        console.log("Token generated");
        resolve(token);
      }
    });
  });
};

const jwtVerifier = (token) => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    return [true, uid];
  } catch (error) {
    return [false, null];
  }
};

module.exports = { jwtGenerator, jwtVerifier };
