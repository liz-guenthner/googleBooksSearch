const router = require("express").Router();
const googleController = require("../../controllers/googleController.js");

// Matches with "/api/books/googleSearch"
router.route("/googleSearch")
  .get(googleController.getAllBooks);


module.exports = router;