const express = require("express");
const ArtikliInventura = require("../database/models/artikli_inventura");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Parse data from JSON
    const { pdok_art, pdok_kol, art_ocitano, inv_user } = req.body;

    // Check if art_ean is in parsed data
    if (!pdok_art) {
      return res.status(400).json({ error: "Missing pdok_art in JSON data" });
    }

    // Find and update the item with the new values
    const item = await ArtikliInventura.findOne({
      where: { pdok_art: pdok_art },
    });

    if (item) {
      item.pdok_kol = pdok_kol;
      item.art_ocitano = art_ocitano;
      item.inv_user = inv_user;

      await item.save(); // Save the changes

      res.json({ message: "Item updated successfully" });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
