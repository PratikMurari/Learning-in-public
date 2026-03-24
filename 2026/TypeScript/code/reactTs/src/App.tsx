import { useState } from "react";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";

import type { Chai } from "./types";

import "./App.css";

const menu: Chai[] = [
  { id: 1, name: "Green Tea", price: 299 },
  { id: 2, name: "Masala Tea", price: 349 },
  { id: 3, name: "Lemon Tea", price: 199 },
];

function App() {
  return (
    <>
      // ChaiCard
      <div>
        <h1>Welcome to React (TypeScript Edition)</h1>
        <ChaiCard name="Green Tea" price={299} />
        <ChaiCard name="Masala Tea" price={349} isSpecial={true} />
      </div>
      // Counter
      <div>
        <Counter />
      </div>
      // ChaiList
      <div>
        <ChaiList items={menu} />
      </div>
    </>
  );
}

export default App;
