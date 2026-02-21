"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
// forceful type assertion, we are telling the compiler that we know better than it does about the type of response.
let numericLength = response.length;
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
//# sourceMappingURL=5.moreTypes.js.map