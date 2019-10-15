var router = require("express").Router();
var googleController = require("../../controllers/google");

router.get("/scrape", googleController.scrapeGoogleBooks);

module.exports = router;