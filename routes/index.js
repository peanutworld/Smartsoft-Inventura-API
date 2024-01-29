const express = require("express");
const router = express.Router();

router.use("/artikal", require("./artikal"));
router.use("/artikli_lista", require("./artikli_lista"));
router.use("/update", require("./update"));
router.use("/ping", require("./ping"));
router.use("/barcode", require("./barcode"));
router.use("/pretraga", require("./pretraga"));
router.use("/lookup", require("./lookup"));

router.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

router.all("*", function (req, res) {
  return res.status(404).send("Page not found");
});

module.exports = router;
