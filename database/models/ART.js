const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

// Model for the ART table
const ART = sequelize.define(
  "ART",
  {
    ART_BR: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
    },
    ART_EAN: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: " ",
    },
    ART_SN: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    ART_PN: {
      type: DataTypes.STRING(600),
      allowNull: true,
    },
    ART_JM: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_VRSTA: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ART_LOK: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ART_GRU: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1,
    },
    ART_RGR: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_POR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    ART_CBP: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ART_CSP: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ART_MIN: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ART_MAX: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ART_PAR: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_RAB: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ART_ST: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ART_GAK: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_GDA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_EAN1: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    ART_KATB: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ART_KLAS: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_BKK: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    ART_BKP: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    ART_OMP: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 1,
    },
    ART_OMK: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 1,
    },
    ART_VRA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_POT: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_VRSAFIN: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ART_FISBR: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "ART",
    timestamps: false,
    defaultValue: {
      ART_EAN: " ",
      ART_GRU: -1,
      ART_POR: 1,
      ART_OMP: 1,
      ART_OMK: 1,
    },
  }
);

module.exports = ART;
