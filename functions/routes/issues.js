const functions = require("firebase-functions");
var issues = require("../controller/issuesController");
const cors = require("cors")({
  origin: "*",
  origin: "https://localhost:4200",
  origin: "https://sivig-ae865.web.app",
  origin: "https://sivig-ae865.firebaseapp.com",
  origin: "*",
  credentials: true,
});
//issues
// all issues with token
exports.GetAll = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.getAllIssues(request, response);
  });
});

// issue by id with token
exports.GetById = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.getIssueById(request, response);
  });
});

// al status whith token
exports.GetAllStatus = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.getAllStatus(request, response);
  });
});
// all sections with token
exports.GetAllSections = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.getAllSections(request, response);
  });
});

// all types with token
exports.GetAllTypes = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.getAllTypes(request, response);
  });
});

//update issue with token
exports.Update = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.updateIssue(request, response);
  });
});

//create issue with token
exports.Create = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.createIssue(request, response);
  });
});

//report issue with token
exports.Report = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    issues.getReport(request, response);
  });
});
