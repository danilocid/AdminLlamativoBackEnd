const functions = require("firebase-functions");
const issues = require("../controller/issuesController");
const cors = require("cors")({
  origin: [
    "https://llamativo-admin.web.app",
    "https://llamativo-admin.firebaseapp.com",
    "https://localhost:4200",
  ],
  credentials: true,
});
// issues
// all issues with token
exports.GetAll = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.getAllIssues(request, response);
    });
  });

// issue by id with token
exports.GetById = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.getIssueById(request, response);
    });
  });

// al status whith token
exports.GetAllStatus = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.getAllStatus(request, response);
    });
  });
// all sections with token
exports.GetAllSections = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.getAllSections(request, response);
    });
  });

// all types with token
exports.GetAllTypes = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.getAllTypes(request, response);
    });
  });

// update issue with token
exports.Update = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.updateIssue(request, response);
    });
  });

// create issue with token
exports.Create = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.createIssue(request, response);
    });
  });

// report issue with token
exports.Report = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 120,
  })
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      issues.getReport(request, response);
    });
  });
