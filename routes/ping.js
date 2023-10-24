const express = require("express");
const ArtikliInventura = require("../database/models/artikli_inventura");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const item = await ArtikliInventura.findOne();

    if (item) {
      res.json({ success: true });
    } else {
      res.status(500).json({ success: false, error: "No data available" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
