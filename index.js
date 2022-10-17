const express = require("express");
const app = express();
const cors = require("cors");
const Server = require("http").createServer(app);
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

Server.listen(3000, () => {
  console.clear();
  console.log("Server is running on port 3000");
});
app.use(cors());
app.use(express.json());
app.use("/users", require("./routes/users"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
