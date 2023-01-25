const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class IssueStatus extends Model {}

IssueStatus.init(
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
    modelName: "issue_statuses",
  }
);
module.exports = IssueStatus;
