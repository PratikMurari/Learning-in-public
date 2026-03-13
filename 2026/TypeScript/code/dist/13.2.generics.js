"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics are templates, just like interfaces. they are used to create reusable components. they can be used with classes, interfaces, and functions.
function wrapInArray(item) {
    return [item];
}
// The <T> is a placeholder for the type that will be passed in when the function is called.
// it can be any type, and it will be replaced with the actual type when the function is called.
// this allows us to create a function that can work with any type, without having to specify the type in the function definition.
wrapInArray(5); // returns [5]
wrapInArray("masala"); // returns ["masala"]
wrapInArray({ flavor: "Ginger" }); // returns [{flavor:"Ginger"}]
//# sourceMappingURL=13.2.generics.js.map