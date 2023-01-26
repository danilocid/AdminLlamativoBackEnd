var { response } = require("express");
var sequelize = require("../database/db");

var Issue = require("../database/models/Issue");
var IssueStatus = require("../database/models/IssueStatus");
var IssueSection = require("../database/models/IssueSection");
var IssueType = require("../database/models/IssueType");

var getIssues = async (req, res = response) => {
  var issues = await Issue.findAll({
    include: [
      {
        model: IssueStatus,
        attributes: ["name"],
      },
      {
        model: IssueSection,
        attributes: ["name"],
      },
      {
        model: IssueType,
        attributes: ["issue_type"],
      },
    ],
  });
  res.json({
    ok: true,
    issues,
  });
};

var getIssue = async (req, res = response) => {
  var { id } = req.params;
  var issue = await Issue.findOne({
    where: {
      id,
    },
    include: [
      {
        model: IssueStatus,
        attributes: ["name"],
      },
      {
        model: IssueSection,
        attributes: ["name"],
      },
    ],
  });
  res.json({
    ok: true,
    issue,
  });
};

var createIssue = async (req, res = response) => {
  var { issue, id_section, id_status, id_type } = req.body;
  try {
    var issueDB = await Issue.create({
      issue,
      id_section,
      id_status,
      id_type,
    });
    res.json({
      ok: true,
      issue: issueDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

var updateIssue = async (req, res = response) => {
  var { id } = req.params;
  var { issue, id_status, id_section, id_type } = req.body;
  try {
    var issueDB = await Issue.findOne({
      where: {
        id,
      },
    });
    if (!issueDB) {
      return res.status(404).json({
        ok: false,
        msg: "No existe un issue con ese id",
      });
    }
    var issueUpdated = await Issue.update(
      {
        issue,
        id_status,
        id_section,
        id_type,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json({
      ok: true,
      issue: issueUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

var getAllSections = async (req, res = response) => {
  var sections = await IssueSection.findAll();
  res.json({
    ok: true,
    sections,
  });
};

var getAllStatus = async (req, res = response) => {
  var status = await IssueStatus.findAll();
  res.json({
    ok: true,
    status,
  });
};

var getIssuesBySection = async (req, res = response) => {
  var { id } = req.params;
  var issues = await Issue.findAll({
    where: {
      id_section: id,
    },
    include: [
      {
        model: IssueStatus,
        attributes: ["name"],
      },
      {
        model: IssueSection,
        attributes: ["name"],
      },
    ],
  });
  res.json({
    ok: true,
    issues,
  });
};

var getIssuesByStatus = async (req, res = response) => {
  var { id } = req.params;
  var issues = await Issue.findAll({
    where: {
      id_status: id,
    },
    include: [
      {
        model: IssueStatus,
        attributes: ["name"],
      },
      {
        model: IssueSection,
        attributes: ["name"],
      },
    ],
  });
  res.json({
    ok: true,
    issues,
  });
};

var getIssuesReport = async (req, res = response) => {
  //count issues by status
  var count_issues_status = await Issue.findAll({
    attributes: [
      "id_status",
      [sequelize.fn("COUNT", sequelize.col("id_status")), "count"],
    ],
    include: [
      {
        model: IssueStatus,
        attributes: ["name"],
      },
    ],
    group: ["id_status"],
  });

  var count_issues_section = await Issue.findAll({
    attributes: [
      "id_section",
      [sequelize.fn("COUNT", sequelize.col("id_section")), "count"],
    ],
    include: [
      {
        model: IssueSection,
        attributes: ["name"],
      },
    ],
    group: ["id_section"],
  });

  var count_issues_type = await Issue.findAll({
    attributes: [
      "id_type",
      [sequelize.fn("COUNT", sequelize.col("id_type")), "count"],
    ],
    include: [
      {
        model: IssueType,
        attributes: ["issue_type"],
      },
    ],
    group: ["id_type"],
  });

  res.json({
    ok: true,
    count_issues_status,
    count_issues_section,
    count_issues_type,
  });
};

var getIssuesByType = async (req, res = response) => {
  var { id } = req.params;
  var issues = await Issue.findAll({
    where: {
      id_type: id,
    },
    include: [
      {
        model: IssueStatus,
        attributes: ["name"],
      },
      {
        model: IssueSection,
        attributes: ["name"],
      },
    ],
  });

  res.json({
    ok: true,
    issues,
  });
};

var getAllTypes = async (req, res = response) => {
  var types = await IssueType.findAll();
  res.json({
    ok: true,
    types,
  });
};

module.exports = {
  getIssues,
  getIssue,
  createIssue,
  updateIssue,
  getAllSections,
  getAllStatus,
  getIssuesBySection,
  getIssuesByStatus,
  getIssuesReport,
  getIssuesByType,
  getAllTypes,
};
