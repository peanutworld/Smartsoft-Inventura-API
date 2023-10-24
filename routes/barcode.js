const express = require("express");
const { Op } = require("sequelize");
const ArtikliInventura = require("../database/models/artikli_inventura");

const router = express.Router();

router.get("/:art_ean", async (req, res) => {
  try {
    const art_ean = req.params.art_ean;
    const record = await ArtikliInventura.findOne({
      where: {
        [Op.or]: [{ art_ean: art_ean }, { art_ean1: art_ean }],
      },
    });

    if (record) {
      const data = {
        pdok_art: record.pdok_art,
        pdok_nart: record.pdok_nart,
        art_ean: record.art_ean,
        art_ean1: record.art_ean1,
        pdok_jmj: record.pdok_jmj,
        pdok_csp: record.pdok_csp.toFixed(2).toString(),
        pdok_knj: record.pdok_knj.toFixed(2).toString(),
        pdok_dat: new Date(record.pdok_dat).toUTCString(),
        pdok_kol: record.pdok_kol.toFixed(2).toString(),
        pdok_vrijeme_ocitanja: new Date(
          record.pdok_vrijeme_ocitanja
        ).toUTCString(),
        art_ocitano: record.art_ocitano,
        inv_user: record.inv_user,
      };

      res.json(data);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
