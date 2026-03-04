"use strict";
// Array, Enum, and Tuples in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// Arrays
const chaiFlavours = ["Masala", "Adrak" /*, 25*/]; // This will cause a type error because 25 is not a string
const chaiPrices = [25, 30];
// Different way to declare an array
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 25 },
    { name: "Adrak", price: 30 },
];
// Read only array
// Array you can define but cannot modify it later
const cities = ["Delhi", "Mumbai", "Bangalore"];
// cities.push("Pune"); // This will cause an error because the array is read-only
//# sourceMappingURL=11.ArrayEnumTuples.js.map