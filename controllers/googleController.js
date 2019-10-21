import axios from "axios";

// Define methods for googleController

module.exports = {
    getAllBooks: function(req, res) {
        // axios call to find all books in google books search using parameter in query
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q='+ { params: req.query } + '&printType=books&_limit=10')
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
    }
};