import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";
// import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";
// import DeleteBtn from "../components/DeleteBtn";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  // When the component mounts, get a list of all available books
  loadBooks = () => {
    API.getAllBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getAllBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
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
          {/* <Row>
            <Col size="md-6 sm-12">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail}/>
                      <div>{book.volumeInfo.title}</div>
                      <div>{book.volumeInfo.authors}</div>
                      <div>{book.volumeInfo.description}</div>

                      <Link to={book.volumeInfo.previewLink}>
                        <ViewBtn />
                      </Link>
                      
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />

                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default Search;