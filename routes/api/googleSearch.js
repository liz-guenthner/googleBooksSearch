const router = require("express").Router();

// Matches with "/api/books/googleSearch/"
router.get("/googleSearch", (req, res) => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q='+ { params: req.query } + '&printType=books&_limit=10')
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

  module.exports = router;