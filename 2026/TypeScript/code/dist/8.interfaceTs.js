"use strict";
// since we had common parameters in both makeChai and serveChai,
// we can create an interface for it called ChaiOrder and use it as the type for the parameter of both functions.
// which made our code more readable, reusable and easier to maintain.
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
//# sourceMappingURL=8.interfaceTs.js.map