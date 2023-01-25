const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
class IssueType extends Model {}
IssueType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    issue_type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "issue_types",
  }
);
module.exports = IssueType;
