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
// guardrails for type narrowing: instanceof, typeof, in operator, custom type predicates, exhaustive checks, and control flow analysis.
// instanceof is used to check if an object is an instance of a specific class or constructor function. It helps in narrowing down the type of an object to a specific class type.
// typeof is used to check the type of a variable at runtime. It helps in narrowing down the type of a variable to a specific primitive type (e.g., string, number, boolean).
// in operator is used to check if a property exists in an object. It helps in narrowing down the type of an object based on the presence of a specific property.
// custom type predicates are user-defined functions that return a boolean value indicating whether a variable is of a specific type. They help in narrowing down the type of a variable based on custom logic.
// exhaustive checks are used to ensure that all possible cases of a union type are handled. They help in preventing unhandled cases and ensuring that the code is robust.
// control flow analysis is used by TypeScript to analyze the flow of code and determine the types of variables at different points in the code. It helps in narrowing down the types of variables based on the control flow of the program.
class Kulhd {
    serve() {
        return "Serving kulhd chai...";
    }
}
class Cutting {
    serve() {
        return "Serving cutting chai...";
    }
}
function serve(chai) {
    if (chai instanceof Kulhd) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "type" in obj &&
        typeof obj.type === "string" &&
        "sugar" in obj &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar...`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai...`;
            break;
        case "ginger":
            return `Ginger Chai...`;
            break;
        case "elaichi":
            return `Elaichi Chai...`;
            break;
    }
}
// function brew(order: Masala Chai|GingerChai) {
//   if ("spiceLevel" in order){
//   }
// }
//# sourceMappingURL=4.typeNarrowing.js.map