import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";
import { OrderForm } from "./components/OrderForm";
import "./App.css";
import { Card } from "./components/Card";
const menu = [
    { id: 1, name: "Green Tea", price: 299 },
    { id: 2, name: "Masala Tea", price: 349 },
    { id: 3, name: "Lemon Tea", price: 199 },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsx("h1", { style: { textDecoration: "underline" }, children: "Welcome to React (TypeScript Edition)" }), _jsxs("div", { children: [_jsx("hr", {}), _jsx("h2", { style: { textDecoration: "underline" }, children: "Chai Cards" }), _jsx(ChaiCard, { name: "Green Tea", price: 299 }), _jsx(ChaiCard, { name: "Masala Tea", price: 349, isSpecial: true }), _jsx("hr", {})] }), _jsxs("div", { children: [_jsx("h2", { style: { textDecoration: "underline" }, children: "Counter" }), _jsx(Counter, {}), _jsx("hr", {})] }), _jsxs("div", { children: [_jsx("h2", { style: { textDecoration: "underline" }, children: "Chai List" }), _jsx(ChaiList, { items: menu }), _jsx("hr", {})] }), _jsxs("div", { children: [_jsx("h2", { style: { textDecoration: "underline" }, children: "Order Form" }), _jsx(OrderForm, { onSubmit: (order) => {
                            console.log("Order submitted:", order.name, order.cups);
                        } }), _jsx("hr", {})] }), _jsxs("div", { children: [_jsx(Card, { title: "React In TypeScript", footer: _jsx("button", { children: "Order Now" }) }), _jsx("hr", {})] })] }));
}
export default App;
//# sourceMappingURL=App.js.map