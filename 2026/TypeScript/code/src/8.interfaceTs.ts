/* ============================================================
   1. Shared object shapes with `type`
   ============================================================ */

/**
 * Represents a generic chai order.
 * This type is reused across multiple functions to avoid duplication.
 */
type ChaiOrder = {
  type: string; // Type of chai (e.g., "masala", "ginger")
  sugar: number; // Amount of sugar (e.g., teaspoons)
  strong: boolean; // Whether the chai should be strong
};

/**
 * Prepares chai based on the given order.
 */
function makeChai(order: ChaiOrder): void {
  console.log("Making chai:", order);
}

/**
 * Serves chai based on the given order.
 * Reuses the same ChaiOrder type for consistency.
 */
function serveChai(order: ChaiOrder): void {
  console.log("Serving chai:", order);
}

/* ============================================================
   2. Interfaces vs Types (when working with classes)
   ============================================================ */

/**
 * Interfaces are commonly used to define contracts for classes.
 * A class that implements an interface MUST provide all its properties.
 */
interface TeaRecipe {
  water: number; // amount of water in ml
  milk: number; // amount of milk in ml
}

/**
 * MasalaChai must match the TeaRecipe interface exactly.
 */
class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 100;
}

/**
 * Interface defining allowed cup sizes.
 * Uses a union of string literals.
 */
interface CupSize {
  size: "small" | "large";
}

/**
 * Chai class implements CupSize and must follow its constraints.
 */
class Chai implements CupSize {
  size: "small" | "large" = "large";
}

/* ============================================================
   3. Why classes cannot implement union types
   ============================================================ */

/**
 * A class can only implement:
 * - an interface, or
 * - an object type (or intersection of object types)
 *
 * Union types (`A | B`) are NOT allowed because the class
 * cannot guarantee which shape it should implement.
 */

// ❌ This does NOT work
// type Response = { ok: true } | { ok: false };
// class MyResponse implements Response {
//   ok = true;
// }

// ✅ Correct approach: use an interface or a single object type
interface Response {
  ok: boolean;
}

class MyResponse implements Response {
  ok = true;
}

/* ============================================================
   4. Literal unions for strict values
   ============================================================ */

/**
 * TeaType restricts chai orders to known options only.
 * This prevents invalid values at compile time.
 */
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(type: TeaType): void {
  console.log("Ordered chai type:", type);
}

/* ============================================================
   5. Intersection types (combining multiple object types)
   ============================================================ */

/**
 * Base ingredients for any chai.
 */
type BaseChai = {
  teaLeaves: number;
};

/**
 * Extra ingredients specific to masala chai.
 */
type MasalaExtras = {
  masala: number;
};

/**
 * Intersection type that combines BaseChai and MasalaExtras.
 */
type MasalaChaiIngredients = BaseChai & MasalaExtras;

/**
 * Object must satisfy ALL properties from both types.
 */
const cup: MasalaChaiIngredients = {
  teaLeaves: 2,
  masala: 1,
};

/* ============================================================
   6. Optional properties
   ============================================================ */

/**
 * User type where `bio` is optional.
 * Optional properties are marked using `?`.
 */
type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Pratik" };
const u2: User = { username: "Pratik", bio: "Pratik.ai" };

/* ============================================================
   7. Readonly properties
   ============================================================ */

/**
 * Config type with a readonly property.
 * `appName` can be read but not reassigned.
 */
type Config = {
  readonly appName: string;
  version: string;
};

const cfg: Config = {
  appName: "coffee",
  version: "1.0",
};

// ❌ Error: Cannot assign to 'appName' because it is readonly
// cfg.appName = "tea";

// ✅ Allowed: mutable property
cfg.version = "1.1";
