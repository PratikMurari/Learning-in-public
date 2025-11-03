# 🧭 Section 31: Discriminated Unions & Exhaustiveness Checking with `never`

### 🚀 What This Topic Is About

This is the final step in **Type Narrowing** — how TypeScript learns to tell one kind of object from another.  
It combines two powerful ideas:

1. **Discriminated Unions** – a clean, type-safe way to model multiple related shapes or objects.
2. **Exhaustiveness Checking with `never`** – a safeguard that ensures you’ve handled _every possible case_ so your code won’t silently break when new types are added.

---

## 🧩 1. Discriminated Unions

### 💡 The Core Idea

A _discriminated union_ is a fancy way of saying:

> “Give every variant a shared property with a unique literal value.”

That shared property (often called `kind` or `type`) _discriminates_ between the variants — so TypeScript can instantly tell which one it’s looking at.

---

### 🧰 Example: Shapes

**_ Example.ts _**

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;
```

**_ /Example.ts _**

Now every shape has the same `kind` field, but with a unique literal value.
That’s the _discriminant_ — the magic key that lets TypeScript narrow types automatically.

---

### 🧩 Using `kind` to Narrow Types

**_ Example.ts _**

```ts
function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.side * shape.side;
  } else {
    // At this point, TS knows shape must be a rectangle
    return shape.length * shape.width;
  }
}
```

**_ /Example.ts _**

✅ TypeScript automatically recognizes the exact variant from the `kind` field, so you get perfect autocomplete and zero runtime confusion.

---

### 🪄 Real-World Analogy

Imagine a delivery app that handles different types of vehicles:

- `{ kind: "car" }`
- `{ kind: "bike" }`
- `{ kind: "truck" }`

Each has its own rules. The `kind` tag lets you handle them safely:

```ts
if (vehicle.kind === "bike") ride();
```

---

### ⚠️ Common Pitfall

If you forget to include `kind` (or make it inconsistent), TypeScript won’t be able to discriminate the types correctly — you’ll lose all that smart narrowing.

---

## 🧩 2. Exhaustiveness Checking with `never`

### 💡 The Problem

What happens when you add a _new_ shape — like `Triangle` — but forget to update `getArea()`?

Your code will still run, but the new shape won’t be handled.
That’s risky and hard to catch.

---

### 💡 The Solution → `never`

The `never` type means “this should never happen.”
We can use it in a `switch` or `if/else` chain to make sure we’ve covered _every_ case.

**_ Example.ts _**

```ts
function getAreaSafe(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      // Exhaustiveness check
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

**_ /Example.ts _**

✅ If you later add a new `Triangle` type but forget to add a `case "triangle":`,
TypeScript will _yell at you_ — `Type 'Triangle' is not assignable to type 'never'`.
That’s a _good_ thing! It tells you your logic isn’t future-proof yet.

---

### 🧠 Why It Matters

In real projects (e.g. payment gateways, status codes, API responses), new cases appear over time.
An exhaustive `never` check ensures your app doesn’t silently ignore new possibilities.

Example:

```ts
type PaymentStatus = "initiated" | "captured" | "refunded";

// Later: a new "authorized" status appears
// With a never check, TS forces you to handle it!
```

---

## 🕰️ 2025 Updates & Best Practices

1. **Still 100 % relevant.**
   Discriminated unions + `never` checks are _core_ to modern TypeScript.

2. **Use `as const`** for literal discriminants:

   ```ts
   const circle = { kind: "circle", radius: 10 } as const;
   ```

3. **Prefer `switch`** over long `if/else` chains for clarity.
   It makes exhaustiveness checks cleaner.

4. **New utility helpers** (TypeScript 5.4 +) can generate exhaustive guards automatically with template literal types — but manual `never` checks are still the clearest approach.

---

## 🧩 Quick Recap

| Concept                  | What It Does                                  | Why It Matters                             |
| ------------------------ | --------------------------------------------- | ------------------------------------------ |
| **Discriminated Union**  | Gives each variant a shared key (like `kind`) | Enables automatic, safe narrowing          |
| **`never` Type**         | Represents impossible states                  | Lets TS warn you about missing cases       |
| **Exhaustive Check**     | Ensures all cases handled                     | Prevents silent bugs when new types appear |
| **Switch + Never Combo** | Classic pattern                               | The gold-standard for type safety          |

---

## 🧪 Practice Task

### 🧭 Task:

Create a union type `Vehicle` with three interfaces:

- `Car` → `kind: "car"`, property `doors: number`
- `Bike` → `kind: "bike"`, property `cc: number`
- `Truck` → `kind: "truck"`, property `capacity: number`

Then write a `getVehicleInfo(vehicle: Vehicle)` function that:

- Uses a `switch` on `vehicle.kind`
- Returns a different message for each kind
- Includes a `default` branch with a `never` check.

### 💬 Expected Output:

```
Car with 4 doors 🚗
Bike with 200cc 🏍️
Truck with 8-ton capacity 🚚
```

---

✅ **Key Takeaway:**
Discriminated unions make TypeScript “understand” your data.
`never` ensures your logic never misses future cases.
Together, they build code that is safer, smarter, and ready to grow.
