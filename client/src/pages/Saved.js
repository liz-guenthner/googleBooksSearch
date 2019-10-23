import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";
// import DeleteBtn from "../components/DeleteBtn";

class Saved extends Component {
  state = {
    books: [],
    // results: [],
    error: ""
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  // When the component mounts, get a list of all available books
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleDeleteBook = id => {
    const bookObjects = this.state.books;
    API.deleteBook(id)
    .then(res => this.getSavedBooks())
    .then(res => this.setState( {books: bookObjects }));
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="/images/books.jpg">
          <h1>Google Books Search</h1>
          <h2>You must love these books</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <Col size="md-12">
              <h3>Here are your saved books!</h3>
            </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">
              {!this.state.books.length ? (
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
              ) : (
                <div>No saved books!</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;