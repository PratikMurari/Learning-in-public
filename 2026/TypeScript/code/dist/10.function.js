"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}...`);
}
makeChai("Masala Chai", 2);
function getChaiPrice() {
    // return "25 rupees"; // This will cause a type error because the return type is specified as number
    return 25;
}
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
//void function means it does not return anything
function logChai() {
    console.log("Chai is being made...");
}
//optional parameter function
//output will be optional, or if it comes, it will be of type string
function orderChai(type) { }
//default parameter function
function orderChaiWithDefault(type = "Masala Chai") {
    console.log(`Ordering ${type}...`);
}
//# sourceMappingURL=10.function.js.map