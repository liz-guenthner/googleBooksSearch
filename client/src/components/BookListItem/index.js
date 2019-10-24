import React from "react";
import Row from "../Row";
// import Col from "../Col";
import Container from "../Container";
// import DeleteBtn from "../DeleteBtn";
// import SaveBtn from "../SaveBtn";

// BookListItem renders a list item containing data from the book api call
function BookListItem (props) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          {/* <Col> */}
            <h3>Title: {props.title}</h3>
            <h3>Authors: {props.authors}</h3>
            <p>Description: {props.description}</p>
            <img src={props.image} alt={props.title} />
            <a rel="noreferrer noopener" target="_blank" href={props.link}>
              See More
            </a>
            {/* <DeleteBtn onClick={() => this.deleteBook(props._id)} />
            <SaveBtn onClick={() => this.saveBook(props._id)} /> */}
          {/* </Col> */}
        </Row>
      </Container>
    </li>
  );
}

export default BookListItem;