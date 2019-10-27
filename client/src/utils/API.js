import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // get all the books after searching google books API
  getSearchedBooks: function(booksSearch) {
    return axios.get("/api/google/googleSearch/" + booksSearch);
  },
  // get books saved to db
  getSavedBooks: function() {
    return axios.get("api/books");
  },
  // delete a book saved to db
  deleteBook: function(id) {
    return axios.delete("api/books" + id);
  },
  // save a book to db
  saveBook: function(id) {
    return axios.post("api/books" + id);
  },
};
