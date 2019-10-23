import React from "react";
import "./style.css";


function SearchForm(booksSearch, handleInputChange, handleFormSubmit) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Book Name:</label>
        <input
          value={booksSearch}
          onChange={handleInputChange}
          name="booksSearch"
          type="text"
          className="form-control"
          placeholder="Type in a book name"
          id="book"
        />
        <button type="submit" onClick={handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;