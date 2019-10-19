import axios from "axios";

export default {
  // Gets all books
  getAllBooks: function(search) {
    search = 'cats';
    const booksArray = [];
    return axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search + '&printType=books&_limit=10')
    .then(function(response){
      booksArray.push(response.data);
      return booksArray;
    });
  }
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
