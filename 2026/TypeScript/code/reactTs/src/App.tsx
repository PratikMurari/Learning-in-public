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
      <h1 style={{ textDecoration: "underline" }}>
        Welcome to React (TypeScript Edition)
      </h1>
      <hr />

      <div>
        <h2 style={{ textDecoration: "underline" }}>Chai Cards</h2>
        <ChaiCard name="Green Tea" price={299} />
        <ChaiCard name="Masala Tea" price={349} isSpecial={true} />
      </div>
      <hr />

      <div>
        <h2 style={{ textDecoration: "underline" }}>Counter</h2>
        <Counter />
      </div>
      <hr />

      <div>
        <h2 style={{ textDecoration: "underline" }}>Chai List</h2>
        <ChaiList items={menu} />
      </div>
      <hr />
    </>
  );
}

export default App;
