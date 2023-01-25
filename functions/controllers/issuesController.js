const { response } = require("express");
const sequelize = require("../database/db");

const Issue = require("../database/models/Issue");
const IssueStatus = require("../database/models/IssueStatus");
const IssueSection = require("../database/models/IssueSection");
const IssueType = require("../database/models/IssueType");

const getIssues = async (req, res = response) => {
  const issues = await Issue.findAll({
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

const getIssue = async (req, res = response) => {
  const { id } = req.params;
  const issue = await Issue.findOne({
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

const createIssue = async (req, res = response) => {
  const { issue, id_section, id_status, id_type } = req.body;
  try {
    const issueDB = await Issue.create({
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

const updateIssue = async (req, res = response) => {
  const { id } = req.params;
  const { issue, id_status, id_section, id_type } = req.body;
  try {
    const issueDB = await Issue.findOne({
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
    const issueUpdated = await Issue.update(
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

const getAllSections = async (req, res = response) => {
  const sections = await IssueSection.findAll();
  res.json({
    ok: true,
    sections,
  });
};

const getAllStatus = async (req, res = response) => {
  const status = await IssueStatus.findAll();
  res.json({
    ok: true,
    status,
  });
};

const getIssuesBySection = async (req, res = response) => {
  const { id } = req.params;
  const issues = await Issue.findAll({
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

const getIssuesByStatus = async (req, res = response) => {
  const { id } = req.params;
  const issues = await Issue.findAll({
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

const getIssuesReport = async (req, res = response) => {
  //count issues by status
  const count_issues_status = await Issue.findAll({
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

  const count_issues_section = await Issue.findAll({
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

  const count_issues_type = await Issue.findAll({
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

const getIssuesByType = async (req, res = response) => {
  const { id } = req.params;
  const issues = await Issue.findAll({
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

const getAllTypes = async (req, res = response) => {
  const types = await IssueType.findAll();
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
