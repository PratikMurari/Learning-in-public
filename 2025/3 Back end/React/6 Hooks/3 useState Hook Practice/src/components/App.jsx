import React, { useState } from "react";

function App() {
  //Challenge 1 completed
  let now = new Date().toLocaleTimeString();
  let [time, setTime] = useState(now);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //Challenge 2 completed
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
