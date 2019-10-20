import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../components/DeleteBtn";

// BookListItem renders a list item containing data from the book api call
export const BookListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.image || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <h3>{props.authors}</h3>
          <p>{props.description}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.link}>
            See More
          </a>
          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
        </Col>
      </Row>
    </Container>
  </li>
);