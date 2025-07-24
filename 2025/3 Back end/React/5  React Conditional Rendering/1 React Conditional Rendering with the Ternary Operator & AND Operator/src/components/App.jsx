//https://en.wikipedia.org/wiki/Single-responsibility_principle

import React from "react";
import Login from "./Login";

var LoggedIn = true;
const currentTime = new Date().getHours();

// function render() {
//   if (LoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {
        // {render()}
        //Ternary operator
        //we will use ternary operator
        //condition ? Do if true : Do if false
        //LoggedIn === true ? <h1>Hello</h1> : <Login />
        //since it's a boolian we can remove true
        //LoggedIn ? <h1>Hello</h1> : <Login />
        //&& operator
        //now we will use && for react
        //Condition && Expression
        //True && Expression
        //False && Expression
        currentTime > 12 && <h1>Why you are still here??</h1>
      }
    </div>
  );
}

export default App;
