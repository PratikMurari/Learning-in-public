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
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: false,

  // ❌ Error Example:
  // isHot: 5
  // Type 'number' is not assignable to type 'boolean'
};

/* ============================================================
   3. Using Type Aliases for Cleaner Code
   ============================================================ */

/**
 * Instead of repeating inline object types,
 * define a reusable type alias.
 */
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakTea: Tea = {
  name: "Adrak Tea",
  price: 30,
  ingredients: ["water", "milk", "sugar", "tea leaves", "ginger"],

  // ❌ Error Example:
  // ingredients: ["water", 2, "milk"]
  // Type 'number' is not assignable to type 'string'
};

/* ============================================================
   4. Structural Typing & Extra Property Behavior
   ============================================================ */

/**
 * TypeScript uses structural typing.
 * If an object has ALL required properties,
 * extra properties are usually allowed.
 */

type Cup = { size: string };

let smallCup: Cup = { size: "small" };
let bigCup = { size: "big", material: "steel" };

/**
 * This is allowed because `bigCup` has at least
 * the required property (`size`) of type Cup.
 */
smallCup = bigCup;

/**
 * But the reverse is NOT allowed:
 */
// bigCup = smallCup;
// ❌ Property 'material' is missing

/* ============================================================
   5. Important: Excess Property Check Nuance
   ============================================================ */

/**
 * When assigning a variable to another variable,
 * extra properties are allowed.
 *
 * But when assigning an OBJECT LITERAL directly,
 * TypeScript performs an excess property check.
 */

type Brew = { brewTime: number };

let coffee = { brewTime: 5, flavor: "strong" };

/**
 * Allowed: because coffee is already a variable.
 */
let chaiBrew: Brew = coffee;

/**
 * ❌ This would fail:
 *
 * let chaiBrew: Brew = { brewTime: 5, flavor: "strong" };
 *
 * Error: Object literal may only specify known properties.
 */

/* ============================================================
   6. Required Properties Must Exist
   ============================================================ */

type User = {
  username: string;
  password: string;
};

let user: User = {
  username: "john_doe",
  password: "securepassword123",
};

/**
 * If `password` was missing,
 * TypeScript would throw an error.
 *
 * All required properties must be present.
 */

/* ============================================================
   7. Splitting Complex Types (Best Practice)
   ============================================================ */

/**
 * Instead of creating one large type,
 * split it into smaller reusable pieces.
 */

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

/**
 * Benefits:
 * - Reusable types
 * - Cleaner structure
 * - Easier maintenance
 */

/* ============================================================
   8. Utility Types - Partial<T>
   ============================================================ */

/**
 * Partial<T> makes all properties optional.
 */

type ChaiDetails = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<ChaiDetails>) => {
  console.log("Updating chai with:", updates);
};

updateChai({ price: 25 });
updateChai({ name: "Masala Chai", isHot: false });
updateChai({}); // All valid

/* ============================================================
   9. Utility Types - Required<T>
   ============================================================ */

/**
 * Required<T> makes all properties mandatory.
 */

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log("Placing order:", order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 2,
});

// ❌ This would fail:
// placeOrder({ name: "Masala Chai" });

/* ============================================================
   10. Utility Types - Pick<T, K>
   ============================================================ */

/**
 * Pick<T, K> selects specific properties from a type.
 */

type newChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<newChai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

/* ============================================================
   11. Utility Types - Omit<T, K>
   ============================================================ */

/**
 * Omit<T, K> removes specific properties from a type.
 */

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChaiInfo = Omit<NewChai, "secretIngredients">;

/**
 * PublicChaiInfo now contains:
 * {
 *   name: string;
 *   price: number;
 *   isHot: boolean;
 * }
 */
