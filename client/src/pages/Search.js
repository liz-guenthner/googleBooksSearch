import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";


class Search extends Component {

  state = {
    books: [],
    booksSearch: "",
    text: "Save"
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getSearchedBooks(this.state.booksSearch)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ books: res.data });
      })
      .catch((err) => {
        this.setState({ 
          books: [] 
        });
      });
  };

  handleSaveBook = (book) => {
    API.saveBook(book);
    this.setState({
      text: "Saved"
    });
  }

  render() {
    return (
      <div>
        <Hero backgroundImage="/images/books.jpg">
          <h1>Google Books Search</h1>
          <h2>Pick a book...any book</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <h3>Enter a book to begin!</h3>

          </Row>
          <Row>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              booksSearch={this.state.booksSearch}
            />
          </Row>
          <Row>
            {!this.state.books.length ? (
              <div></div>
            ) : (
              <BookList>
                {this.state.books.map((book, index) => {
                  return (
                    <BookListItem
                      key={index}
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                      Button={() => (<button onClick={() => this.handleSaveBook(book)}
                      className="btn save-button">{this.state.text}</button>)}
                    />
                  );
                })}
              </BookList>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;