import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/books/googleSearch/", { params: { q: query } });
  }
};
