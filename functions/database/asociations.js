var Issue = require("../database/models/Issue");
var IssueStatus = require("../database/models/IssueStatus");
var IssueSection = require("../database/models/IssueSection");
var IssueType = require("../database/models/IssueType");

Issue.belongsTo(IssueSection, { foreignKey: "id_section" });
IssueSection.hasMany(Issue, { foreignKey: "id" });

Issue.belongsTo(IssueStatus, { foreignKey: "id_status" });
IssueStatus.hasMany(Issue, { foreignKey: "id" });

Issue.belongsTo(IssueType, { foreignKey: "id_type" });
IssueType.hasMany(Issue, { foreignKey: "id" });
