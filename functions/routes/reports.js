const functions = require("firebase-functions");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});

const reports = require("../controller/ReportsController");

// monthly sales
exports.MonthlySales = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    reports.monthlySales(req, res);
  });
});
