"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Case 1: Type Inference
let drink = "chai";
drink = 4; // Error: Type 'number' is not assignable to type 'string'.
// Type inference allows TypeScript to automatically determine the type of a variable based on its initial value. 
// In this case, since 'drink' is initialized with a string value, TypeScript infers that 'drink' is of type 'string'. 
// Therefore, assigning a number to 'drink' results in a type error.
// Case 2: Type Syntax Error
let let, cup = Math.random() > 0.5 ? 10 : 5;
// Type syntax error: Unexpected identifier 'let'. Did you mean 'let'?
// The error in the code is due to the incorrect use of the 'let' keyword. 
// In TypeScript (and JavaScript), you cannot declare a variable with 'let' followed by another 'let'. 
// The correct syntax should be:
let cups = Math.random() > 0.5 ? 10 : 5;
//Case 3: Type Annotation
let channelName;
channelName = 1122; // Error: Type 'number' is not assignable to type 'string'.
// In this case, we have explicitly annotated the variable 'channelName' with the type 'string'. 
// This means that 'channelName' can only hold string values. 
// Assigning a number to 'channelName' results in a type error because it violates the type annotation.
//# sourceMappingURL=2.Annotations%20and%20Inference.js.map