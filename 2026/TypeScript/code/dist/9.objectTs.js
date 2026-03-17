/* ============================================================
   1. Type Inference (Implicit Typing)
   ============================================================ */
/**
 * TypeScript automatically infers the type of an object
 * based on its properties and their values.
 */
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
};
/**
 * Inferred type of `chai`:
 * {
 *   name: string;
 *   price: number;
 *   isHot: boolean;
 * }
 *
 * No need to explicitly define the type unless necessary.
 */
/* ============================================================
   2. Explicit Object Type Annotation
   ============================================================ */
/**
 * You can explicitly define the structure of an object.
 * This is useful when the variable is declared first
 * and assigned later.
 */
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: false,
    // ❌ Error Example:
    // isHot: 5
    // Type 'number' is not assignable to type 'boolean'
};
const adrakTea = {
    name: "Adrak Tea",
    price: 30,
    ingredients: ["water", "milk", "sugar", "tea leaves", "ginger"],
    // ❌ Error Example:
    // ingredients: ["water", 2, "milk"]
    // Type 'number' is not assignable to type 'string'
};
let smallCup = { size: "small" };
let bigCup = { size: "big", material: "steel" };
/**
 * This is allowed because `bigCup` has at least
 * the required property (`size`) of type Cup.
 */
smallCup = bigCup;
let coffee = { brewTime: 5, flavor: "strong" };
/**
 * Allowed: because coffee is already a variable.
 */
let chaiBrew = coffee;
let user = {
    username: "john_doe",
    password: "securepassword123",
};
const updateChai = (updates) => {
    console.log("Updating chai with:", updates);
};
updateChai({ price: 25 });
updateChai({ name: "Masala Chai", isHot: false });
updateChai({}); // All valid
const placeOrder = (order) => {
    console.log("Placing order:", order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 2,
});
const chaiInfo = {
    name: "Lemon Tea",
    price: 30,
};
export {};
/**
 * PublicChaiInfo now contains:
 * {
 *   name: string;
 *   price: number;
 *   isHot: boolean;
 * }
 */
//# sourceMappingURL=9.objectTs.js.map