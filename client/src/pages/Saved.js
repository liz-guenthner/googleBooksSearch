import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";

class Saved extends Component {
  state = {
    books: [],
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

  handleDeleteBook = (id) => {
    console.log(id);
    API.deleteBook(id).then(res => this.getSavedBooks());
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
            <h3>Here are your saved books!</h3>
          </Row>
          <Row>
            {this.state.books.length ? (
              <BookList>
                {this.state.books.map(book => {
                  return (
                    <BookListItem
                      key={book._id}
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                      HandleClick={() => this.handleDeleteBook(book._id)}
                      isDelete={true}
                    />
                  );
                })}
              </BookList>
            ) : (
              <div>No saved books!</div>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;