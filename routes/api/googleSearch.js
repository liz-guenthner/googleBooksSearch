const router = require("express").Router();
const googleController = require("../../controllers/googleController.js");

// Matches with "/api/google/googleSearch"
router.route("/googleSearch")
  .get(googleController.getSearchedBooks);


module.exports = router;