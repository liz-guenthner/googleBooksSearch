const router = require("express").Router();
const googleController = require("../../controllers/googleController.js");

// Matches with "/api/google/googleSearch"
router.route("/googleSearch/:title")
  .get(googleController.getSearchedBooks);


module.exports = router;