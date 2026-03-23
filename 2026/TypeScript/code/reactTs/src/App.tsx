import { useState } from "react";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to React (TypeScript Edition)</h1>
        <ChaiCard name="Green Tea" price={299} />
        <ChaiCard name="Masala Tea" price={349} isSpecial={true} />
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
