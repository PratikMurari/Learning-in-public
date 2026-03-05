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
// Tuple with named elements
const chaiItems = ["Masala", 25]; // This is a tuple with named elements for better readability
// Enums
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
// This is how you use Enums in TypeScript
const size = CupSize.LARGE;
// Enums Auto Increment Values
// By default, enums start with 0 and increment by 1 for each member. However, you can assign custom values to the members of an enum.
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
// Enums with String Values
// we addign to avoid getting the auto incremented (default) values and to make it more readable
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "Masala";
    ChaiType["ADRAK"] = "Adrak";
    ChaiType["ELACHI"] = "Elachi";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making a cup of ${type} chai.`);
}
makeChai(ChaiType.MASALA); // This will print "Making a cup of Masala chai."
//makeChai(AADRAK); // This will cause an error because AADRAK is not a valid member of the ChaiType enum
//# sourceMappingURL=11.ArrayEnumTuples.js.map