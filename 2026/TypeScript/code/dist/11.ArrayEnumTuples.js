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
// Multidimensional array
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
// Tuples
let chaiTuple = ["Masala", 25]; // This is a tuple where the first element is a string and the second element is a number
// chaiTuple = [25, "Masala"]; // This will cause a type error because the order of types is not correct
let userInfo;
userInfo = ["John Doe", 30, true]; // This is a tuple with an optional boolean value
userInfo = ["Jane Doe", 25]; // This is also valid because the boolean value is optional
// Readonly tuple
const location = [28.6139, 77.209]; // This is a readonly tuple representing latitude and longitude
// location[0] = 29.0000; // This will cause an error because the tuple is read-only
//# sourceMappingURL=11.ArrayEnumTuples.js.map