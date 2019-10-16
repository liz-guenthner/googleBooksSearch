const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
router.use("/books", bookRoutes);
// Google routes
router.use("/google", googleRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get( function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
