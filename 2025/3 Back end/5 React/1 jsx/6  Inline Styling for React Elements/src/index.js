import React from "react";
import ReactDOM from "react-dom";

//this is how u add single inline style
//ReactDOM.render(<h1 style={{color:'red'}}>Hello World!</h1>, document.getElementById("root"));

//but for adding multiple style this is how u do it
var customStyle = {
  color: "red",
  fontSize: "100px",
  border: "7px solid black",
};

customStyle.color = "green";

var newstyle = ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);

//https://www.w3schools.com/cssref/pr_font_font-size.php
//https://www.w3schools.com/cssref/index.php
