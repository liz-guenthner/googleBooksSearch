// Require axios and cheerio to scrape google books
var axios = require("axios");
var cheerio = require("cheerio");

// scrape Google Books function
var scrapeGB = function() {
    // create variable for title entered by user
    var title = "";
    // axios call
    return axios.get("https://www.google.com/search?tbm=bks&q=" + title).then(function(res) {
        // cheerio to help with finding elements to display
        var $ = cheerio.load(res.data);
        var booksArray = [];

        $(".Yr5TG").each(function(i, element) {
            var result = $(element).children();
            var image = result.find();
            var title = result.find();
            var detail = result.find();
            var link = result.find();


            if (image && title && detail && link) {
                db.Book.insert({
                    image: image,
                    title: title,
                    detail: detail,
                    link: link
                },
                function(err, inserted) {
                  if (err) {
                    console.log(err);
                  }
                  else {
                    console.log(inserted);
                  }
                });
            }
        });
        return booksArray;
    });
}

// Export the function to other files
module.exports = scrapeGB;