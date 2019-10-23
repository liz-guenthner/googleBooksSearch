import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";

// BookListItem renders a list item containing data from the book api call
function BookListItem (props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col>
            <h3>{props.title}</h3>
            <h3>{props.authors}</h3>
            <p>{props.description}</p>
            <img src={props.image} />
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
              See More
            </a>
            <DeleteBtn onClick={() => this.deleteBook(props._id)} />
            <SaveBtn onClick={() => this.saveBook(props._id)} />
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default BookListItem;