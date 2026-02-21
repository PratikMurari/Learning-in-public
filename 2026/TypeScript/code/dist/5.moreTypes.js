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
//# sourceMappingURL=5.moreTypes.js.map