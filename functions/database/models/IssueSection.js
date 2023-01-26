var { Model, DataTypes } = require("sequelize");
var sequelize = require("../db");

class IssueSection extends Model {}

IssueSection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "issue_section",
  }
);
module.exports = IssueSection;
