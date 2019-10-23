import React from "react";
import "./style.css";


function SaveBtn(props) {
  return (
    <span className="btn save-buttion" {...props} role="button">
      Save
    </span>
  );
}

export default SaveBtn;