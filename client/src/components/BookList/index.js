import React from "react";

// RecipeList renders a bootstrap list item
function BookList (props) {
  return (
    <ul className="list-group">{props.children}</ul>
  );
}

export default BookList;