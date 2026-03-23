import { useState } from "react";
import { ChaiCard } from "./components/ChaiCard";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to React (TypeScript Edition)</h1>
      </div>
      <ChaiCard name="Green Tea" price={299} />
      <ChaiCard name="Masala Tea" price={349} isSpecial={true} />
    </>
  );
}

export default App;
