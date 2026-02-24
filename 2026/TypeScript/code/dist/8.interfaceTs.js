"use strict";
/* ============================================================
   1. Shared object shapes with `type`
   ============================================================ */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Prepares chai based on the given order.
 */
function makeChai(order) {
    console.log("Making chai:", order);
}
/**
 * Serves chai based on the given order.
 * Reuses the same ChaiOrder type for consistency.
 */
function serveChai(order) {
    console.log("Serving chai:", order);
}
/**
 * MasalaChai must match the TeaRecipe interface exactly.
 */
class MasalaChai {
    water = 100;
    milk = 100;
}
/**
 * Chai class implements CupSize and must follow its constraints.
 */
class Chai {
    size = "large";
}
class MyResponse {
    ok = true;
}
function orderChai(type) {
    console.log("Ordered chai type:", type);
}
/**
 * Object must satisfy ALL properties from both types.
 */
const cup = {
    teaLeaves: 2,
    masala: 1,
};
const u1 = { username: "Pratik" };
const u2 = { username: "Pratik", bio: "Pratik.ai" };
const cfg = {
    appName: "coffee",
    version: "1.0",
};
// ❌ Error: Cannot assign to 'appName' because it is readonly
// cfg.appName = "tea";
// ✅ Allowed: mutable property
cfg.version = "1.1";
//# sourceMappingURL=8.interfaceTs.js.map