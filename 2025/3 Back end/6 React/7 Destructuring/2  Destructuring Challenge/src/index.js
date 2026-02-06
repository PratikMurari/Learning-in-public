// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"; // Importing car data from a separate file

//just to check the value
console.log(cars);

// ARRAY DESTRUCTURING: Extract first two elements from cars array
// honda gets the first car object, tesla gets the second car object
let [honda, tesla] = cars;

// NESTED OBJECT DESTRUCTURING: Extract topSpeed from honda's speedStats
// This is equivalent to: const hondaTopSpeed = honda.speedStats.topSpeed;
let {
  speedStats: { topSpeed: hondaTopSpeed }, // Rename topSpeed to hondaTopSpeed
} = honda;
// NESTED OBJECT DESTRUCTURING: Extract topSpeed from tesla's speedStats
// This is equivalent to: let teslaTopSpeed = tesla.speedStats.topSpeed;
let {
  speedStats: { topSpeed: teslaTopSpeed }, // Rename topSpeed to teslaTopSpeed
} = tesla;

// NESTED ARRAY DESTRUCTURING: Extract first color from honda's coloursByPopularity array
// This gets the most popular color (first item in the array)
let {
  coloursByPopularity: [hondaTopColour], // Extract first element and name
} = honda;
// NESTED ARRAY DESTRUCTURING: Extract first color from tesla's coloursByPopularity array
// This gets the most popular color (first item in the array)
let {
  coloursByPopularity: [teslaTopColour], // Extract first element and name
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
