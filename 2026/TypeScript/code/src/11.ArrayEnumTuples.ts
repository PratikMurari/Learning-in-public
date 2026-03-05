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
const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];
// cities.push("Pune"); // This will cause an error because the array is read-only

// Multidimensional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// Tuples
let chaiTuple = ["Masala", 25]; // This is a tuple where the first element is a string and the second element is a number
// chaiTuple = [25, "Masala"]; // This will cause a type error because the order of types is not correct

let userInfo: [string, number, boolean?];
userInfo = ["John Doe", 30, true]; // This is a tuple with an optional boolean value
userInfo = ["Jane Doe", 25]; // This is also valid because the boolean value is optional

// Readonly tuple
const location: readonly [number, number] = [28.6139, 77.209]; // This is a readonly tuple representing latitude and longitude
// location[0] = 29.0000; // This will cause an error because the tuple is read-only

// Tuple with named elements
const chaiItems: [name: string, price: number] = ["Masala", 25]; // This is a tuple with named elements for better readability

// Enums
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

// This is how you use Enums in TypeScript
const size = CupSize.LARGE;
