"use strict";
// Type narrowing is a TypeScript process that refines a variable's broad type (e.g., string | number)
// into a more specific, predictable type (e.g., string) within a certain block of code.
// It uses runtime checks like typeof, instanceof, or custom predicates to enable precise operations,
// improving safety and enabling better IDE autocompletion
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `chai order: ${kind}`;
}
// as you can see in the above example when you will add . after kind in the if block you will get all the string methods
// and properties and in the else block you will get all the number methods and properties.
// This is because TypeScript has narrowed down the type of kind based on the typeof check.
// Best practices for type narrowing:
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return "Serving default plain chai";
}
//exapmle with exhausting checks:
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai...`;
    }
    return `chai order: ${size}`;
}
//test cases for orderChai function
console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai("large"));
console.log(orderChai(42));
//# sourceMappingURL=4.typeNarrowing.js.map