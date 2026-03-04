// Array, Enum, and Tuples in TypeScript

// Arrays
const chaiFlavours: string[] = ["Masala", "Adrak" /*, 25*/]; // This will cause a type error because 25 is not a string
const chaiPrices: number[] = [25, 30];

// Different way to declare an array
const rating: Array<number> = [4.5, 5.0];

// Array of objects
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 25 },
  { name: "Adrak", price: 30 },
];

// Read only array
// Array you can define but cannot modify it later
const cities:readonly string[] = ["Delhi", "Mumbai", "Bangalore"];
// cities.push("Pune"); // This will cause an error because the array is read-only

// Multidimensional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];