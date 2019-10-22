import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";
// import { BookList, BookListItem } from "./components/BookList";


class Search extends Component {
  state = {
    books: [],
    booksSearch: "",
    results: [],
    error: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  // When the component mounts, get a list of all available books
  loadBooks = () => {
    API.getAllBooks()
      .then(res => this.setState({ books: res.data}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.booksSearch)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Hero backgroundImage="/images/books.jpg">
          <h1>Google Books Search</h1>
          <h2>Pick a book...any book</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <Col size="md-12">
              <h3>Enter a book to begin!</h3>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                books={this.state.books}
              />
              <SearchResults results={this.state.results} />
            </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">
              {/* {!this.state.books.length ? (
                <div></div>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book._id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.previewLink}
                      />
                    );
                  })}
                </BookList>
              )} */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;