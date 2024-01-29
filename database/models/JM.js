const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const JM = sequelize.define(
  "JM",
  {
    JM_SIF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    JM_NA: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    JM_NAZ: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
  },
  {
    tableName: "JM",
    timestamps: false,
  }
);

module.exports = JM;
