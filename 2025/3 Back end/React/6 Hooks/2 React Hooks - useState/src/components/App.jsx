import React, { useState } from "react";

function App() {
  // useState hook to manage the count state
  // count is the current state, setCount is the function to update it
  let [count, setCount] = useState(0);

  function increse() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increse}>+</button>
    </div>
  );
}

export default App;
