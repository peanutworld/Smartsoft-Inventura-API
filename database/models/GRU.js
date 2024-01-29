const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const GRU = sequelize.define(
  "GRU",
  {
    GRU_SIF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    GRU_NAZ: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
  },
  {
    tableName: "GRU",
    timestamps: false,
  }
);

module.exports = GRU;
