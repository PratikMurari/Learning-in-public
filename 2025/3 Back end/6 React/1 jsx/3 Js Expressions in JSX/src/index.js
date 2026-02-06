import React from "react";
import ReactDOM from "react-dom";

var Name = "Pratik";

ReactDOM.render(
  <div>
    <h1>Hello {Name}!</h1>
    <p>your fav number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

//It only accept Js Expressions not statements
//a = 2 Expressions
//a = 4*2+6-8... Expressions
//a = if else ... Statement(doesn't have a value)
//https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI
