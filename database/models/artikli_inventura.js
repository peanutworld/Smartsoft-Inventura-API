const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');

// Model for the artikli_inventura table
const ArtikliInventura = sequelize.define('artikli_inventura', {
  pdok_art: {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  pdok_nart: {
    type: DataTypes.STRING(380),
    allowNull: true,
  },
  art_ean: {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  art_ean1: {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  pdok_jmj: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  pdok_csp: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  pdok_knj: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  pdok_dat: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  pdok_kol: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  pdok_vrijeme_ocitanja: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  art_ocitano: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  inv_user: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'artikli_inventura',
  timestamps: false
});

module.exports = ArtikliInventura;
