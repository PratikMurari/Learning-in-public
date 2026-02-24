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
function orderChai(t) {
    console.log(t);
}
const cup = {
    teaLeaves: 2,
    masala: 1,
};
const u1 = { username: "Pratik" };
const u2 = { username: "Pratik", bio: "Pratik.ai" };
// since appName is readonly, we cannot change its value after it has been assigned.
// const cfg: Config = { appName: "coffee", version: "1.0" };
// cfg.appName = "tea";
//# sourceMappingURL=8.interfaceTs.js.map