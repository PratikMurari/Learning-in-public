"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
// forceful type assertion, we are telling the compiler that we know better than it does about the type of response.
let numericLength = response.length;
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
// inputElement case
const inputElement = document.getElementById("username");
// Any vs Unknown
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // No error, but will cause a runtime error if value is not a string
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); // Error: Object is of type 'unknown'.
if (typeof newValue === "string") {
    newValue.toUpperCase(); // No error, we have narrowed the type to string
}
// try catch block with unknown
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log("Unknown error", error);
    }
}
// Type Casting vs Assertion with unknown
const data = "chai aur code";
const strData = data; // This is type casting
let someValue = "hello world";
let strLength = someValue.length; // Type assertion
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard...");
        return;
    }
    if (role === "guest") {
        console.log("Redirecting to guest dashboard...");
        return;
    }
    role; // This will cause a compile-time error because role can only be "admin", "user", or "guest"
    // yet it is added coz if someone adds a new role in the future and forgets to update this function, the compiler will catch that error.
    // example how we later added superadmin role but forgot to update the function
}
// Never type example
// where it is used: when a function never returns, it can be used to indicate that the function will never complete its execution and will always throw an error or enter an infinite loop.
function neverReturns() {
    while (true) { }
}
//# sourceMappingURL=7.moreTypes.js.map