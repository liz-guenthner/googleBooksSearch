const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");

// API Routes
router.use("/api", apiRoutes);

router.get("/books/search", (req, res) => {
  axios
    .get('https://www.googleapis.com/books/v1/volumes?q='+ { params: req.query } + '&printType=books&_limit=10')
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
