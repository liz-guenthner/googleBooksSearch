import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // get all the books after searching google books API
  getAllBooks: function(bookSearch) {
    return axios.get("/api/google/googleSearch/", { 
      params: { bookSearch }
    });
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
  saveBook: function(data) {
    return axios.post("api/books" + data);
  },
};
