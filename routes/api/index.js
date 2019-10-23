const router = require("express").Router();
const bookRoutes = require("./books");
const googleSearchRoute = require("./googleSearch");
const path = require("path");

// Book routes
router.use("/books", bookRoutes);

//Google Search Routes
router.use("/google", googleSearchRoute);

// Send every other request to the React app
// Define any API routes before this runs
router.get( function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
