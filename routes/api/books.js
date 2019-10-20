const router = require("express").Router();
const bookController = require("../../controllers/bookController.js");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

// Matches with "/api/books/search"
router.route("/search")
  .get(bookController.search);


module.exports = router;