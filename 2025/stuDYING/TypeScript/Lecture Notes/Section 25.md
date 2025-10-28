# 🧠 Section 25: Generics in TypeScript

## 🎯 Overview

Generics are one of the most **powerful** features in TypeScript.  
They make your code **reusable**, **flexible**, and **type-safe** — all at once.

> 🧩 Think of generics as _templates_ that allow your functions, classes, or interfaces  
> to work with **any type**, but still **remember** which type you’re using.

---

## ⚙️ 1. What Problem Do Generics Solve?

Let’s start with a simple example — the **identity function**.  
This function returns whatever value you pass to it.

**_ Example.ts _**

```typescript
function identity1(value: number | boolean): number | boolean {
  return value;
}
```

**_ /Example.ts _**

✅ Works fine, but…
❌ Not scalable — you must keep adding more types (`| string | object | ...`).
❌ The return type isn’t guaranteed to match the input type.

We might try fixing it with `any`:

**_ Example.ts _**

```typescript
function identity2(value: any): any {
  return value;
}
```

**_ /Example.ts _**

✅ Works for all data types
❌ But loses all **type information**

➡️ You could pass a number and get back a string — TypeScript won’t catch it.

---

## 💎 2. Enter Generics

Generics help us create a function that **preserves the type** of its argument.

**_ Example.ts _**

```typescript
function identity3<Type>(value: Type): Type {
  return value;
}
```

**_ /Example.ts _**

### 💡 How it works:

- `<Type>` (or `<T>`) is a **placeholder** for the actual type.
- Whatever type is passed in, becomes “locked” for that instance.

---

## 🧪 3. Using a Generic Function

**_ Example.ts _**

```typescript
// Using number
let num = identity3<number>(42); // TypeScript knows it's a number

// Using string
let str = identity3<string>("Hello"); // Returns a string

// Using boolean
let flag = identity3<boolean>(true); // Returns a boolean
```

**_ /Example.ts _**

TypeScript automatically **infers** the type too —
you don’t always have to specify `<number>` explicitly:

```typescript
let auto = identity3("Hey!"); // Type inferred as string
```

✅ **Type Safety:**
Whatever you pass in, you’ll get the same type back — guaranteed.

---

## 🪄 4. The Shortcut Syntax

Developers often use `T` instead of writing the full word `Type`.

**_ Example.ts _**

```typescript
function identity4<T>(value: T): T {
  return value;
}
```

**_ /Example.ts _**

✅ This is identical to the previous example.
✅ The letter `T` stands for “Type” — but you can use any letter or word (`U`, `K`, `Data`, etc.).

---

## 🔍 5. Generics in Arrays (Already Built-In)

Arrays are **generic** by default in TypeScript!

**_ Example.ts _**

```typescript
let scores: Array<number> = [90, 85, 75];
let names: Array<string> = ["Alex", "Sam", "Jordan"];
```

**_ /Example.ts _**

is the same as:

```typescript
let scores: number[] = [90, 85, 75];
let names: string[] = ["Alex", "Sam", "Jordan"];
```

> ✅ `Array<number>` is just a **generic version** of arrays.

---

## 🧩 6. Generics with Custom Types

You can even use your **own interfaces or types** as generic parameters.

**_ Example.ts _**

```typescript
interface Bottle {
  brand: string;
  type: number;
}

// Generic function
function identity<T>(value: T): T {
  return value;
}

// Using custom interface as type
const myBottle = identity<Bottle>({
  brand: "Nike",
  type: 2,
});

console.log(myBottle.brand); // ✅ TypeScript knows it's a string
```

**_ /Example.ts _**

> 💡 This means your generic function can work with **any shape** of data
> — and still provide **type safety** and **auto-completion**.

---

## ⚡ 7. Why Not Just Use `any`?

| Feature                | `any` | Generics |
| ---------------------- | ----- | -------- |
| Works with all types   | ✅    | ✅       |
| Keeps type information | ❌    | ✅       |
| Type checking          | ❌    | ✅       |
| IDE autocomplete       | ❌    | ✅       |
| Reusability            | ⚠️    | ✅ ✅ ✅ |

✅ **In short:** Generics give you flexibility _and_ safety.
`any` just gives flexibility — and potential bugs.

---

## 🔧 8. Real-World Example

Let’s say you want a reusable function to get the first item in any list.

**_ Example.ts _**

```typescript
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

// Works with any data type:
const numbers = getFirstItem([10, 20, 30]); // number
const words = getFirstItem(["a", "b", "c"]); // string
const flags = getFirstItem([true, false, true]); // boolean
```

**_ /Example.ts _**

✅ TypeScript automatically infers the type of `T` from the array elements.

---

## 🧠 9. Generics in Documentation (TS Docs)

In the [TypeScript documentation](https://www.typescriptlang.org/docs/),
you’ll often see examples like this:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello Generics");
```

> These examples emphasize that **you can define one function**
> that works for **many types**, while still maintaining **type integrity**.

---

## 🧩 10. Recap: Generics Are Everywhere

| Where You Can Use Generics | Example                                        |
| -------------------------- | ---------------------------------------------- |
| **Functions**              | `function logData<T>(data: T): T`              |
| **Classes**                | `class Box<T> { content: T }`                  |
| **Interfaces**             | `interface Pair<T, U> { first: T; second: U }` |
| **Promises**               | `Promise<string>`                              |
| **Arrays**                 | `Array<number>`                                |

---

## 🧭 Summary

| Concept          | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| **Generic**      | A reusable “type variable” that represents any data type     |
| **Syntax**       | `<T>` placed after the function or class name                |
| **Purpose**      | To write reusable, type-safe code                            |
| **Benefit**      | Keeps type info, enables IDE help, prevents mismatched types |
| **Common usage** | Functions, arrays, interfaces, and classes                   |

---

### 🧩 In Simple Words:

> Generics are like saying:
> “I don’t care what type you give me — just tell me once,
> and I’ll remember it and stay consistent.”

---

✅ **Next Up →** Advanced Generics with Constraints and Real-World Use Cases 🚀