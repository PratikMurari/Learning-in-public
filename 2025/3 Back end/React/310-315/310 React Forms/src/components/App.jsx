//Controlled components
//https://legacy.reactjs.org/docs/forms.html#controlled-components
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState(" ");

  function handleClick() {
    setHeadingText(name);
  }

  function handleChange(event) {
    //just testing in console
    //console.log(event.target.value);
    // these can also be done
    //console.log(event.target.placeholder);
    //console.log(event.target.type);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
