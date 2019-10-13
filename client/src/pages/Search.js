import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: "",
    image: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    // API.getBaseBooksList()
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
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
        <Hero backgroundImage="http://bepropertyinvestors.com/wp-content/uploads/2019/10/books.jpg">
          <h1>Google Books Search</h1>
          <h2>Pick a book...any book</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <Col size="md-12">
              <h1>Enter a book to begin!</h1>
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
              <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;