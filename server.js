// express = middleware handles routes
const express = require("express");
// path handles returning directory names/paths
const path = require("path");
// communicates with mongo db
const mongoose = require("mongoose");
// variable to access all routes
const routes = require("./routes");
// variable for routes
const app = express();

// declare port for backend server
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb", { useNewUrlParser: true });

// second parameter is a callback function with a console message
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
