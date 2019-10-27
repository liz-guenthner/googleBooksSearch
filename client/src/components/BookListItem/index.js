import React from "react";
import Row from "../Row";
import "./style.css";
import Container from "../Container";

// BookListItem renders a list item containing data from the book api call
function BookListItem ({title, authors, link, description, image, Button}) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
            <div className="book-headers">
              <p className="book-title"><span>Title: </span>{title}</p>
              <p className="book-authors"><span>Authors: </span>{authors}</p>
            </div>
            <div className="book-buttons">
              <Button />
              <a className="view-link btn" rel="noreferrer noopener" target="_blank" href={link}>
                View
              </a>
            </div>
            <div className="book-data">
              <img className="book-image" src={image} alt={title} />
              <p className="book-description"><span>Description: </span>{description}</p>
            </div>
        </Row>
      </Container>
    </li>
  );
}

export default BookListItem;