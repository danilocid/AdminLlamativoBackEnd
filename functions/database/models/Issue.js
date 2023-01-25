const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
class Issue extends Model {}

Issue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    issue: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "issues",
  }
);

module.exports = Issue;
