# 🧩 Section 15: Enums in TypeScript

Enums (short for **Enumerations**) let you define a **set of named constants** — like categories, states, or modes — to make your code easier to read and maintain.

Instead of using arbitrary numbers or strings, enums give you **meaningful names** for values.

---

## 🧠 What You’ll Learn

- What enums are
- Why enums exist
- Numeric vs String enums
- How enums are compiled into JavaScript
- `const enum` optimization
- Latest (2025) TypeScript updates

---

## ⚙️ Why Enums Exist

Enums help **restrict the possible values** a variable can take.

For example, in an airline booking system, a passenger’s seat can only be:

- `Aisle`
- `Middle`
- `Window`

You don’t want someone assigning `"PilotSeat"` accidentally!

---

### 🧩 Without Enums — Using Constants

**_ Example.ts _**

```ts
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

let seat = AISLE; // 0
```

**_ /Example.ts _**

✅ Works fine, but not ideal:

- Easy to mix up numbers
- Hard to know what 0, 1, or 2 means later
- Not easy to extend or restrict

---

## 🚀 Enter Enums

Enums make it **type-safe**, **organized**, and **self-descriptive**.

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.AISLE;
```

**_ /Example.ts _**

🧠 Now:

- Each seat type has a **name** and **numeric value**
- TypeScript restricts variables to only allowed options

---

## 🔢 Default Numeric Values

By default, enums assign **incremental numbers** starting from `0`.

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE, // 0
  MIDDLE, // 1
  WINDOW, // 2
}
```

**_ /Example.ts _**

You can **customize** the starting number:

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE = 10,
  MIDDLE, // 11
  WINDOW, // 12
}
```

**_ /Example.ts _**

Or mix them up (though not recommended):

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE = 10,
  MIDDLE = 22,
  WINDOW, // 23
  FOURTH, // 24
}
```

**_ /Example.ts _**

---

## 💬 String Enums

You can also assign **string values** to enum members.
In this case, **each member must have an explicit value**.

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE = "Aisle",
  MIDDLE = "Middle",
  WINDOW = "Window",
}
```

**_ /Example.ts _**

✅ Now the values are **human-readable strings**, not numbers.
Perfect for APIs or database records.

---

## ⚙️ Mixed Enums (Number + String)

Technically allowed, but **not recommended** for consistency.

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE = "Aisle",
  MIDDLE = 3,
  WINDOW, // 4
}
```

**_ /Example.ts _**

👉 Once you assign a **string value**, you must provide values for all subsequent members.

---

## 🧩 Using Enums in Variables

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

let passengerSeat: SeatChoice = SeatChoice.MIDDLE;

console.log(passengerSeat); // 1
```

**_ /Example.ts _**

✅ Gives clear meaning — you can use `SeatChoice.MIDDLE` instead of `1`.

---

## 🧠 Enums Under the Hood (Compiled JavaScript)

TypeScript compiles enums into **objects** that work both ways:

- From **name → value**
- From **value → name**

**_ Example.ts _**

```ts
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}
```

**_ /Example.ts _**

Compiles roughly to this JavaScript:

**_ Example.js _**

```js
"use strict";
var SeatChoice;
(function (SeatChoice) {
  SeatChoice[(SeatChoice["AISLE"] = 0)] = "AISLE";
  SeatChoice[(SeatChoice["MIDDLE"] = 1)] = "MIDDLE";
  SeatChoice[(SeatChoice["WINDOW"] = 2)] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
```

**_ /Example.js _**

💬 This structure is called an **IIFE** (Immediately Invoked Function Expression).
It creates a self-contained enum object with **bidirectional mapping**.

---

## ⚡ `const enum` — Cleaner Output

When you use `const enum`, TypeScript doesn’t generate that bulky IIFE code.
Instead, it **inlines values directly** — faster and cleaner JavaScript.

**_ Example.ts _**

```ts
const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;
console.log(mySeat); // 2
```

**_ /Example.ts _**

The compiled JS becomes:
**_ Example.js _**

```js
"use strict";
const mySeat = 2; /* SeatChoice.WINDOW */
console.log(mySeat);
```

**_ /Example.js _**

✅ Much cleaner and efficient.
❌ But note: `const enum` can’t be used if your build system doesn’t support **TypeScript inlining** (like Babel-only builds).

---

## 🧩 Real-World Use Cases for Enums

1. **Order Status**

   ```ts
   enum OrderStatus {
     PENDING,
     SHIPPED,
     DELIVERED,
     RETURNED,
   }
   ```

2. **User Roles**

   ```ts
   enum UserRole {
     ADMIN = "Admin",
     EDITOR = "Editor",
     VIEWER = "Viewer",
   }
   ```

3. **API Response Codes**

   ```ts
   const enum HttpStatus {
     OK = 200,
     NOT_FOUND = 404,
     INTERNAL_ERROR = 500,
   }
   ```

---

## 💡 Enum Reverse Mapping

Only **numeric enums** have reverse mapping:
**_ Example.ts _**

```ts
enum Direction {
  UP,
  DOWN,
}

console.log(Direction.UP); // 0
console.log(Direction[0]); // "UP"
```

**_ /Example.ts _**

String enums **don’t** have reverse mapping:
**_ Example.ts _**

```ts
enum Direction {
  UP = "UP",
  DOWN = "DOWN",
}

// console.log(Direction["UP"]); // "UP"
// console.log(Direction[0]);    // ❌ undefined
```

**_ /Example.ts _**

---

## 🧩 Practice Tasks

### ✅ Task 1: Movie Rating Enum

Create an enum `MovieRating` with values `"G"`, `"PG"`, `"PG-13"`, and `"R"`.
Then write a function that returns a message based on the rating.

**_ Example.ts _**

```ts
enum MovieRating {
  G = "General Audience",
  PG = "Parental Guidance",
  PG13 = "Teens 13 and above",
  R = "Restricted",
}

function getMovieMessage(rating: MovieRating) {
  return `This movie is rated: ${rating}`;
}

console.log(getMovieMessage(MovieRating.PG13));
```

**_ /Example.ts _**

---

### ✅ Task 2: Order Status Enum

Make an enum `OrderStatus` and write a function that prints order progress.

**_ Example.ts _**

```ts
enum OrderStatus {
  PLACED,
  SHIPPED,
  DELIVERED,
  CANCELLED,
}

function printStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.PLACED:
      console.log("Your order is placed.");
      break;
    case OrderStatus.SHIPPED:
      console.log("Your order is on the way!");
      break;
    case OrderStatus.DELIVERED:
      console.log("Order delivered successfully!");
      break;
    default:
      console.log("Order cancelled.");
  }
}

printStatus(OrderStatus.SHIPPED);
```

**_ /Example.ts _**

---

## 🆕 Latest TypeScript (2025) Updates on Enums

### 1. **Constant Enums Optimization**

Since TypeScript 5.3+, `const enum`s are even more optimized —
compiler performs better tree-shaking and removes unused members automatically.

### 2. **ESM Support for Const Enums**

Previously, `const enum`s were problematic in **ESM (ECMAScript Modules)**.
Now they are supported more smoothly with `isolatedModules` turned on.

### 3. **Union Types Over Enums (Modern Alternative)**

Many developers now prefer **union literal types** instead of enums:

**_ Example.ts _**

```ts
type SeatChoice = "Aisle" | "Middle" | "Window";
let seat: SeatChoice = "Aisle";
```

**_ /Example.ts _**

✅ No runtime JS output
✅ Simpler, cleaner
⚠️ But lacks automatic numbering and reverse mapping

---

## 🚀 Summary

| Feature         | Numeric Enum   | String Enum         | Const Enum                |
| --------------- | -------------- | ------------------- | ------------------------- |
| Auto numbering  | ✅ Yes         | ❌ No               | ✅ Yes                    |
| Reverse mapping | ✅ Yes         | ❌ No               | ❌ No                     |
| JS output       | Large (IIFE)   | Large               | Minimal                   |
| Best for        | Internal logic | Human-readable text | Performance-critical apps |

---

## 🧩 Key Takeaway

Enums help you:

- Restrict allowed values
- Write clean, descriptive code
- Prevent accidental mistakes

But in modern TypeScript, for simple use cases, **union types** can replace enums for a cleaner and more lightweight alternative.

---

✨ **Pro Tip:**
Use `enum` when you need **bi-directional lookup** or **auto-generated constants**,
and `type` unions when you just need **value restriction** without JS output.
