import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path,
// this component sets the "active" class
// on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
          Google Books Search
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              activeclassname="is-active"
              exact="true"
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              activeclassname="is-active"
              exact="true"
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
