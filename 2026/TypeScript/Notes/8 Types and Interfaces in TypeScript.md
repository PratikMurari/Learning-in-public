# Types and Interfaces in TypeScript

> Source: https://youtu.be/kwcBi3S4bHU?si=SyjDWH9BB5m8sL2x

## 1. Why Do We Need Types & Interfaces?

As projects grow, data becomes **complex and repetitive**.

Example:

- A tea order has:
  - type of tea
  - sugar amount
  - strong or not

This same structure may be used:

- in multiple functions
- in multiple files
- by multiple developers

👉 Repeating the same object structure again and again is:

- hard to read
- error-prone
- difficult to maintain

That’s why **Type Aliases** and **Interfaces** exist.

---

## 2. What Is a Type Alias?

A **type alias** is a custom name for a data structure.

### Example (Problem First)

```ts
function makeTea(order: { type: string; sugar: number; strong: boolean }) {}

function serveTea(order: { type: string; sugar: number; strong: boolean }) {}
```

❌ Same structure repeated  
❌ Hard to maintain

---

### Solution: Create a Type Alias

```ts
type TeaOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};
```

Now reuse it:

```ts
function makeTea(order: TeaOrder) {}
function serveTea(order: TeaOrder) {}
```

✅ Clean
✅ Reusable
✅ Readable

---

## 3. What Does “Data Signature” Mean?

A **signature** means:

> The shape and structure of data

For example:

```ts
{
  type: string;
  sugar: number;
  strong: boolean;
}
```

Even if used in different places,
**same structure = same signature**

Type aliases help us **name that signature**.

---

## 4. When Should You Create a Type?

Create a type when:

- the same structure is used multiple times
- the data is meaningful (like Order, User, Config)
- code readability matters

❌ If used only once → inline type is okay
✅ If repeated → create a type

---

## 5. Interfaces – The Sibling of Type

Interfaces are **very similar** to types.

### Interface Syntax

```ts
interface TeaRecipe {
  water: number;
  milk: number;
}
```

Difference in syntax:

- `type` → uses `=`
- `interface` → no `=`

---

## 6. Types vs Interfaces (Big Difference)

### Key Rule 🔥

> **Classes prefer interfaces**

---

### Why?

Let’s say you want a class to follow a structure.

#### ❌ Using a union type (fails)

```ts
type CupSize = "small" | "large";

class Tea implements CupSize {}
```

❌ ERROR
Classes **cannot implement literal unions**

---

### ✅ Correct Way: Use Interface

```ts
interface CupSize {
  size: "small" | "large";
}

class Tea implements CupSize {
  size = "large";
}
```

✔ Works
✔ Recommended
✔ Industry standard

---

## 7. Why Interfaces Are Preferred for Classes

Interfaces:

- are designed for `implements`
- work cleanly with classes
- are more predictable in OOP

**Rule of thumb**:

- ❯ Object shapes → either `type` or `interface`
- ❯ Classes → **prefer `interface`**

---

## 8. Literal Types (Very Important Concept)

This is called a **Literal Type** 👇

```ts
type TeaType = "masala" | "ginger" | "lemon";
```

Meaning:

- Only these exact values are allowed
- Nothing else is accepted

```ts
orderTea("coffee"); // ❌ error
orderTea("masala"); // ✅
```

These are NOT strings —
they are **specific string values**

---

## 9. Union Types (`|`)

Union means:

> “One of these”

```ts
type TeaType = "masala" | "ginger" | "lemon";
```

Only **one value at a time**, from the list.

---

## 10. Intersection Types (`&`)

Intersection means:

> “All of these combined”

### Example

```ts
type BaseTea = {
  teaLeaves: number;
};

type ExtraIngredients = {
  masala: number;
};

type MasalaTea = BaseTea & ExtraIngredients;
```

Now `MasalaTea` must have:

- `teaLeaves`
- `masala`

---

### Using Intersection Type

```ts
const cup: MasalaTea = {
  teaLeaves: 2,
  masala: 1,
};
```

❌ Missing any property → error
✅ All required → valid

---

## 11. Optional Properties (`?`)

Sometimes data **may or may not exist**.

### Example: User Profile

```ts
type User = {
  username: string;
  bio?: string;
};
```

- `username` → required
- `bio` → optional

---

### Usage

```ts
const user1: User = {
  username: "hitesh",
};

const user2: User = {
  username: "hitesh",
  bio: "chai aur code",
};
```

Both are valid ✅

---

## 12. Readonly Properties

Some values should:

- be set once
- never be changed again

### Example: App Configuration

```ts
type AppConfig = {
  readonly appName: string;
  version: number;
};
```

---

### Usage

```ts
const config: AppConfig = {
  appName: "MasterJi",
  version: 1,
};

config.version = 2; // ✅ allowed
config.appName = "XYZ"; // ❌ error
```

Readonly:

- protects critical values
- prevents accidental bugs

---

## 13. Types vs Interfaces – Quick Comparison

| Feature               | Type       | Interface |     |
| --------------------- | ---------- | --------- | --- |
| Object shapes         | ✅         | ✅        |     |
| Union (`              | `)         | ✅        | ❌  |
| Intersection (`&`)    | ✅         | ❌        |     |
| Class `implements`    | ⚠️ limited | ✅ best   |     |
| Preferred for classes | ❌         | ✅        |     |

---

## 14. Best Practices (Real World)

✔ Use **type** when:

- unions
- intersections
- utility types
- complex compositions

✔ Use **interface** when:

- working with classes
- defining contracts
- designing APIs

Most production code uses **both**.

---

## 15. Final Takeaways

- Types & interfaces make code **readable**
- Prevent duplication
- Catch bugs early
- Essential for large projects

> **TypeScript shines when data shapes are explicit**

---

## 16. What’s Next?

Upcoming topics will build on this:

- Advanced interfaces
- Extending interfaces
- Generics
- Real-world API typing

☕ Keep learning, keep sipping chai, keep coding!
