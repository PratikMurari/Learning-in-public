//https://www.w3schools.com/tags/ref_eventattributes.asp

import React, { useState } from "react";

function App() {
  // Stores the heading text
  const [headingText, setHeadingText] = useState("Hello");
  // Tracks if mouse is over the button (should be boolean)
  const [isMouseOver, setMouseOver] = useState("false");

  // Updates heading when button is clicked
  function handleClick() {
    setHeadingText("Submitted");
  }
  // Sets hover state
  function handleMouseOver() {
    setMouseOver(true);
  }
  // Resets hover state
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
