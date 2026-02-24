"use strict";
// 1 types
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
class MasalaChai {
    water = 100;
    milk = 100;
}
class Chai {
    size = "large";
}
// 3 A class can only implement an object type or intersection of object types with statically known members.
// as soon as u will make interface out of it, it will start working
// type Response = { ok: true } | { ok: false };
// class myRes implements Response {
//   ok = true;
// }
//# sourceMappingURL=8.interfaceTs.js.map