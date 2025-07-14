import React from "react";
import Greetings from "./Greeting";

function App() {
  const { greeting, customStyle } = Greetings();
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default App;
