const express = require("express");
const { Op } = require("sequelize");
const ART = require("../database/models/ART");
const GRU = require("../database/models/GRU");
const JM = require("../database/models/JM");

const router = express.Router();

router.get("/:art_ean", async (req, res) => {
  try {
    const art_ean = req.params.art_ean;
    const record = await ART.findOne({
      where: {
        [Op.or]: [{ ART_EAN: art_ean }, { ART_EAN1: art_ean }],
      },
    });

    if (record) {
      // Find the corresponding GRU_NAZ for ART_GRU
      const gruRecord = await GRU.findOne({
        where: {
          GRU_SIF: record.ART_GRU,
        },
      });

      // Find the corresponding JM_NA for ART_JM
      const jmRecord = await JM.findOne({
        where: {
          JM_SIF: record.ART_JM,
        },
      });

      // Add related stuff to the response
      const response = {
        ...record.toJSON(), // Convert ART record to plain JSON object
        GRU_NAZ: gruRecord ? gruRecord.GRU_NAZ : null,
        JM_NA: jmRecord ? jmRecord.JM_NA : null,
        JM_NAZ: jmRecord ? jmRecord.JM_NAZ : null,
      };

      res.json(response);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
