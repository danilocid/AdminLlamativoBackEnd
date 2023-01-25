const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./database/db");
const User = require("./database/models/User");
const bcrypt = require("bcryptjs");

require("./database/asociations");
app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  })
);
app.use(express.json());
app.use("/users", require("./routes/users"));
app.use("/issues", require("./routes/issues"));
const PORT = process.env.PORT || 3000;
app.listen(null, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}`);
  sequelize.sync().then(() => {
    console.log("Database is connected");
  });
});
const salt = bcrypt.genSaltSync(10);
passwordHash = bcrypt.hashSync("94679847", salt);

/* User.create({
  user: "danilo",
  password: passwordHash,
  name: "Danilo",
  email: "danilo.cid.v@gmail.com",
}); */
exports.app = functions.https.onRequest(app);
