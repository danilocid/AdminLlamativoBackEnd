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
exports.MonthlySales = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      reports.monthlySales(req, res);
    });
  });

// report data types
exports.GetReportDataTypes = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      reports.getReportDataTypes(req, res);
    });
  });

exports.CreateReportDataType = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      reports.createReportDataType(req, res);
    });
  });

exports.UpdateReportDataType = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      reports.updateReportDataType(req, res);
    });
  });

exports.GetReportData = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      reports.getReportData(req, res);
    });
  });

exports.CreateReportData = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      reports.createReportData(req, res);
    });
  });
