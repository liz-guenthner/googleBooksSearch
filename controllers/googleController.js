// Controller for our scraper
// ============================
var db = require("../models");
var scrapeGB = require("../scripts/scrapeGB");

module.exports = {
  scrapeGoogleBooks: function(req, res) {
    // scrape Google Books site
    return scrapeGB().then(function(books) {
        // insert the scraped books into the DB
        return db.Book.create(books);
      })
      .then(function(dbBook) {
        // if the book does NOT exist or have string length of 0
        if (dbBook.length === 0) {
            // return message about no books match
          res.json({ message: "No books found" });
        }
        else {
          // If books found, send back list of books found
          res.json(books);
        }
      })
      .catch(function(err) {
        // If error inserting books, return message
        res.json({ message: "Error scraping book(s)!" });
      });
  }
};