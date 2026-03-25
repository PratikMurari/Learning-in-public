import { useState } from "react";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";
import { OrderForm } from "./components/OrderForm";

import type { Chai } from "./types";

import "./App.css";
import { Card } from "./components/Card";

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

      <div>
        <hr />
        <h2 style={{ textDecoration: "underline" }}>Chai Cards</h2>
        <ChaiCard name="Green Tea" price={299} />
        <ChaiCard name="Masala Tea" price={349} isSpecial={true} />
        <hr />
      </div>

      <div>
        <h2 style={{ textDecoration: "underline" }}>Counter</h2>
        <Counter />
        <hr />
      </div>

      <div>
        <h2 style={{ textDecoration: "underline" }}>Chai List</h2>
        <ChaiList items={menu} />
        <hr />
      </div>

      <div>
        <h2 style={{ textDecoration: "underline" }}>Order Form</h2>
        <OrderForm
          onSubmit={(order) => {
            console.log("Order submitted:", order.name, order.cups);
          }}
        />
        <hr />
      </div>

      <div>
        <Card title="React In TypeScript" footer={<button>Order Now</button>} />
        <hr />
      </div>
    </>
  );
}

export default App;
