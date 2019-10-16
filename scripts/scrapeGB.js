// Require axios and cheerio to scrape google books
var axios = require("axios");
var cheerio = require("cheerio");

// scrape Google Books function
var scrapeGB = function() {
    // create variable for title entered by user
    var subject = "";
    // axios call
    return axios.get("https://www.google.com/search?tbm=bks&q=" + subject).then(function(res) {
        // cheerio to help with finding elements to display
        var $ = cheerio.load(res.data);
        var booksArray = [];

        $(".Yr5TG").each(function(i, element) {
            var result = $(element).children();

            var title = result.find(".bHexk").find("h3.LC20lb").text();
            var detail = result.find(".bHexk").find(".cmlJmd").find("span").text();
            var link = result.find(".bHexk").find("a").attr("href");

            console.log(image);

            if (title && detail && link) {
                var titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var detailNeat = detail.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                // insert into db 
                var dataToAdd = {
                    title: titleNeat,
                    detail: detailNeat,
                    link: link
                }

                booksArray.push(dataToAdd);
            }
        });
        return booksArray;
    });
}

// Export the function to other files
module.exports = scrapeGB;