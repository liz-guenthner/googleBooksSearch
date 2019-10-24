const axios = require("axios");
// const db = require("../models");

// Define methods for googleController

module.exports = {
    getSearchedBooks: function(req, res) {

        // axios call to find all books in google books search using parameter in query
        const { params } = req;
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q=' + params.booksSearch + '&printType=books&_limit=10')
        .then(results => results.data.items.filter(
            result => result.volumeInfo.title &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks.thumbnail &&
                result.volumeInfo.previewLink
        ))
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    }
};