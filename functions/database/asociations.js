const Issue = require("../database/models/Issue");
const IssueStatus = require("../database/models/IssueStatus");
const IssueSection = require("../database/models/IssueSection");
const IssueType = require("../database/models/IssueType");


Issue.belongsTo(IssueSection, { foreignKey: "id_section" });
IssueSection.hasMany(Issue, { foreignKey: "id" });

Issue.belongsTo(IssueStatus, { foreignKey: "id_status" });
IssueStatus.hasMany(Issue, { foreignKey: "id" });

Issue.belongsTo(IssueType, { foreignKey: "id_type" });
IssueType.hasMany(Issue, { foreignKey: "id" });
