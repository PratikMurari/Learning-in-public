import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// //Spread syntax
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// // console.log(fruits);

// const fullName = {
//   fName: "Tom",
//   lName: "Bond",
// };

// //to spread
// const user = {
//   ...fullName,
//   id: 1,
//   userName: "TomBond01",
// };
// //console.log(user);

// //to add nested object

// const User = {
//   fullName,
//   id: 1,
//   userName: "TomBond01",
// };
// console.log(User);
