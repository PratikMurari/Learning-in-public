# ⚔️ Section 13: Union Types in TypeScript

Union types are one of **TypeScript’s most powerful tools** for making your code flexible _without losing safety_.

They allow a variable, parameter, or return type to be **one of several types** — e.g. a `string` **or** a `number`.
You define unions using the **pipe (`|`)** symbol.

---

## 🧠 What You’ll Learn

- What union types are
- How to use them in variables and functions
- How to “narrow” union types safely
- How to use them in arrays
- Real-world scenarios (seat selection, ID handling, etc.)
- Latest 2025 updates

---

## 🪄 Basic Syntax of Union Types

If you aren’t sure whether a variable will be a `number` or `string`, you can define both using the **pipe (`|`)** symbol.

**_ Example.ts _**

```ts
let score: number | string = 33;

score = 44; // ✅ allowed
score = "Fifty-Five"; // ✅ also allowed
score = true; // ❌ not allowed — only number or string
```

**_ /Example.ts _**

💡 Think of `|` as “OR”.
The variable can hold _either_ of the listed types.

---

## 🧱 Why Use Union Types Instead of `any`?

Using `any` disables type checking entirely — TypeScript won’t help you find errors.

Unions, on the other hand, **keep safety** and **define clear boundaries** of what’s acceptable.

✅ Better alternative to `any`
✅ Safer function design
✅ Improved IntelliSense and auto-completion

---

## 🧩 Union with Custom Types

You can also combine **custom types** (e.g. `User` and `Admin`).

**_ Example.ts _**

```ts
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// A person can be either a User OR an Admin
let person: User | Admin = { name: "Alice", id: 101 };

// Later, this could be changed to an Admin
person = { username: "SuperAdmin", id: 334 };
```

**_ /Example.ts _**

💬 **Use case:**
When building apps with roles like `User`, `Admin`, or `Guest`, this pattern keeps your logic flexible and strongly typed.

---

## ⚙️ Union Types in Functions

Let’s say you have a function that accepts either a number or string as a database ID.

**_ Example.ts _**

```ts
function getDbId(id: number | string) {
  console.log(`DB ID is: ${id}`);
}

getDbId(123); // ✅ number
getDbId("user-22"); // ✅ string
```

**_ /Example.ts _**

This works fine — until you try to do operations that don’t exist on both types.

For example:

**_ Example.ts _**

```ts
function getDbId(id: number | string) {
  // ❌ Error: Property 'toLowerCase' does not exist on type 'string | number'
  console.log(id.toLowerCase());
}
```

**_ /Example.ts _**

---

## 🧩 Narrowing (Type Checking in Unions)

To safely use methods like `toLowerCase()`, you must **narrow the type** using checks like `typeof`.

**_ Example.ts _**

```ts
function getDbId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toLowerCase()); // ✅ safe, id is string
  } else {
    console.log(id + 2); // ✅ safe, id is number
  }
}
```

**_ /Example.ts _**

💡 This is called **type narrowing** — telling TypeScript exactly what type you’re working with.

---

## 🧮 Union Types with Arrays

You can also use union types inside arrays.

### ❌ Wrong way (common beginner mistake)

**_ Example.ts _**

```ts
let data: string | number[] = [1, 2, "three"];
```

**_ /Example.ts _**

This means **either** all strings **or** all numbers — not both!

### ✅ Correct way

Wrap the union in parentheses before adding `[]`.

**_ Example.ts _**

```ts
let data: (string | number)[] = [1, "two", 3, "four"];
```

**_ /Example.ts _**

💬 You can even mix more types (though not recommended):
**_ Example.ts _**

```ts
let mixedData: (string | number | boolean)[] = [1, "two", true];
```

**_ /Example.ts _**

---

## 🧱 Literal Unions (Specific Allowed Values)

You can restrict a variable to a **fixed set of literal values** — very common in UI or config settings.

**_ Example.ts _**

```ts
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window"; // ✅ OK
seatAllotment = "crew"; // ❌ Error — not one of allowed values
```

**_ /Example.ts _**

💡 **Real-world use case:**
In a flight booking app, a seat can only be one of `"aisle"`, `"middle"`, or `"window"`.
This ensures invalid options are caught early.

---

## 🧩 Combining Unions with Functions & Objects

Unions can be used for return types too!

**_ Example.ts _**

```ts
function formatId(id: number | string): string {
  return typeof id === "number" ? `#${id}` : id.toUpperCase();
}
```

**_ /Example.ts _**

---

## ⚡ Quick Summary

| Concept        | Description                        | Example                      |                    |
| -------------- | ---------------------------------- | ---------------------------- | ------------------ |
| `              | ` (pipe)                           | Combine multiple types       | `number \| string` |
| Type narrowing | Checking which type is used        | `typeof id === "string"`     |                    |
| Union arrays   | Arrays with multiple element types | `(string \| number)[]`       |                    |
| Literal union  | Restrict values to fixed options   | `"red" \| "blue" \| "green"` |                    |

---

## 🧠 Practice Tasks

### ✅ **Task 1: Multi-type Variable**

Create a variable called `paymentId` that can be either `number` or `string`.
Assign both types of values and log them.

### ✅ **Task 2: Type Narrowing**

Write a function `printValue` that takes a `number | string`.
If it’s a number, multiply it by 2.
If it’s a string, print it in uppercase.

**_ Example.ts _**

```ts
function printValue(value: number | string) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}
```

**_ /Example.ts _**

### ✅ **Task 3: Literal Union**

Create a variable `trafficLight` that only accepts `"red"`, `"yellow"`, or `"green"`.
Try assigning an invalid color to test it.

---

## 🆕 Latest (2025) TypeScript Updates for Unions

### 🧩 1. Smarter Control Flow Analysis (TS 5.x+)

TypeScript now better narrows **union types inside loops, switches, and ternary expressions**, improving autocomplete accuracy.

**_ Example.ts _**

```ts
function logInput(value: string | number | boolean) {
  switch (typeof value) {
    case "string":
      console.log(value.toUpperCase()); // narrowed to string
      break;
    case "number":
      console.log(value.toFixed(2)); // narrowed to number
      break;
    default:
      console.log(value ? "true" : "false");
  }
}
```

**_ /Example.ts _**

---

### 🧱 2. Discriminated Unions with `in` and `tag` Fields

A newer, cleaner way to handle multiple object types.

**_ Example.ts _**

```ts
type Dog = { type: "dog"; bark: () => void };
type Cat = { type: "cat"; meow: () => void };

function makeSound(animal: Dog | Cat) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

**_ /Example.ts _**

💡 This is **super common** in React, APIs, and state machines.

---

### 🧮 3. Exhaustiveness Checking

TypeScript now ensures all union cases are handled — great for preventing missed logic.

**_ Example.ts _**

```ts
function handleSeat(seat: "aisle" | "middle" | "window") {
  switch (seat) {
    case "aisle":
      return "Aisle Seat";
    case "middle":
      return "Middle Seat";
    case "window":
      return "Window Seat";
    default:
      const neverSeat: never = seat; // 🛑 Error if new type added
      return neverSeat;
  }
}
```

**_ /Example.ts _**

---

## 🚀 Summary

Union types make your TypeScript:

- **Flexible**, for multiple possible values
- **Safe**, with strict checks and autocomplete
- **Scalable**, ideal for real-world apps

They’re a **must-learn** concept before tackling advanced types, generics, or discriminated unions.
