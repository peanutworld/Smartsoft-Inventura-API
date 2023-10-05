const express = require('express');
const ArtikliInventura = require('../database/models/artikli_inventura');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const items = await ArtikliInventura.findAll();
	
		if (items.length > 0) {
			const item_data = items.map((item) => ({
				pdok_art: item.pdok_art,
				pdok_nart: item.pdok_nart,
				art_ean: item.art_ean,
				art_ean1: item.art_ean1,
				pdok_jmj: item.pdok_jmj,
				pdok_csp: item.pdok_csp.toFixed(2),
				pdok_knj: item.pdok_knj.toFixed(2),
				pdok_dat: new Date(item.pdok_dat).toUTCString(),
				pdok_kol: item.pdok_kol.toFixed(2),
				pdok_vrijeme_ocitanja: new Date(item.pdok_vrijeme_ocitanja).toUTCString(),
				art_ocitano: item.art_ocitano,
				inv_user: item.inv_user,
			}));
	
			res.json(item_data);
		} else {
			res.status(404).json({ error: 'Items not found' });
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;