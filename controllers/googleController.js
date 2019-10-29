const axios = require("axios");
const db = require("../models");

// Define methods for googleController

module.exports = {
    getSearchedBooks: function(req, res) {
        // axios call to find all books in google books search using parameter in query
        const { params } = req;
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q=' + params.title + '&printType=books&_limit=10')
        .then(results => results.data.items.filter(
            result => 
                result.id &&
                result.volumeInfo.title &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks.thumbnail &&
                result.volumeInfo.previewLink
            )
            .map(result => {
                return {
                    googleKey: result.id,
                    title: result.volumeInfo.title,
                    authors: (result.volumeInfo.authors).join(", "),
                    description: result.volumeInfo.description,
                    image: result.volumeInfo.imageLinks.thumbnail,
                    link: result.volumeInfo.previewLink
                }
            })
        )
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    }
};