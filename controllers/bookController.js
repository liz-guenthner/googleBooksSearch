const db = require("../models");

// Define methods for bookController

module.exports = {
    findAll: function(req, res) {
        // find all books in db
        db.Book
            // from query string
            .find(req.query)
            // decending date order
            .sort({date: -1})
            // return (new) list of books in object
            .then(dbBook => res.json(dbBook))
            // if error caught, send status "unprocessable entity"
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        // find pre-existing book in db
        db.Book
            // look for based on id parameter in uri
            .findById(req.params.id)
            // return (new) list of books in object
            .then(dbBook => res.json(dbBook))
            // if error caught, send status "unprocessable entity"
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        // create new book instance
        db.Book
            // create from json object body
            .create(req.body)
            // return (new) list of books in object
            .then(dbBook => res.json(dbBook))
            // if error caught, send status "unprocessable entity"
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        // update pre-existing book in db
        db.Book
            // find a book in db and update based on id parameter in uri
            .findOneAndUpdate({ 
                _id: req.params.id
            }, {
                $set: req.body
            }, { 
                new: true
             })
            // return (new) list of books in object
            .then(dbBook => res.json(dbBook))
            // if error caught, send status "unprocessable entity"
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        // delete pre-existing book in db
        db.Book
            // find a book in db based on id parameter in uri
            .findById({ _id: req.params.id })
            // remove book with id above
            .then(dbBook => dbBook.remove())
            // return (new) list of books in object
            .then(dbBook => res.json(dbBook))
            // if error caught, send status "unprocessable entity"
            .catch(err => res.status(422).json(err));
    }
};
