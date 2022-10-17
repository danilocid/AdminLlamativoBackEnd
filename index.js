const express = require("express");
const app = express();
const cors = require("cors");
const Server = require("http").createServer(app);
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
require("dotenv").config();

Server.listen(8080, () => {
  console.clear();
  console.log("Server is running on port 8080");
  console.log(process.env.JWT_SECRET);
});
app.use(cors());
app.use(express.json());
app.use("/users", require("./routes/users"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
