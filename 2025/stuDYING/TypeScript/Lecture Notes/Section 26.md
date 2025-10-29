# 🧠 Section 26: Generics in Arrays and Arrow Functions

## 🎯 Overview

In this section, we extend our discussion on **Generics** in TypeScript — focusing on:

- How **arrays** work with generics
- How to define **arrow functions** using generics
- Understanding a few syntax nuances (especially with React-like codebases)

Generics make your code flexible yet type-safe.  
When working with arrays and arrow functions, understanding their syntax becomes essential.

https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

---

## ⚙️ 1. Defining Generics with Arrays

Sometimes you’ll want to pass **arrays** to a function that uses generics.  
Let’s say we’re working on a product search — we might want to take in a list of products or IDs.

**_ Example.ts _**

```typescript
function getSearchProducts<T>(products: T[]): T {
  // perform some logic — e.g. fetch or filter results
  const myIndex = 3;
  return products[myIndex];
}
```

**_ /Example.ts _**

### 🔍 Explanation:

- `<T>` declares that the function is **generic** — it can accept any type.
- The parameter `products` is an **array of type T**.
- The return type is `T`, meaning we return a **single item** from that array.

✅ Works for:

```typescript
getSearchProducts<number>([10, 20, 30, 40]); // returns 40
getSearchProducts<string>(["TV", "Phone", "Laptop", "Watch"]); // returns "Watch"
```

> 💡 Important:
>
> - If you mark your parameter as `T[]`, your return type `T` should represent a _single element_ from that array.
> - You can also use the alternate syntax `Array<T>` instead of `T[]`.
>   Both are identical in TypeScript.

---

## 🧩 2. Alternate Array Type Syntax

TypeScript allows two equivalent ways to define arrays:

| Syntax     | Example         | Meaning          |
| ---------- | --------------- | ---------------- |
| `T[]`      | `number[]`      | Array of numbers |
| `Array<T>` | `Array<number>` | Array of numbers |

So the following two are **exactly the same**:

**_ Example.ts _**

```typescript
function getItems<T>(items: T[]): T {
  return items[0];
}

function getItemsAlt<T>(items: Array<T>): T {
  return items[0];
}
```

**_ /Example.ts _**

✅ Both functions work identically.

---

## 🧠 3. Generic Return Values and Type Locking

When you use generics, **TypeScript locks the type** of whatever you pass in.
So, the return type always corresponds to that same type.

Example:

```typescript
const result = getSearchProducts<string>(["Pen", "Book", "Paper"]);
console.log(result); // "Paper" (TypeScript knows this is a string)
```

If you tried to return a number (like an index) while the return type is `T`,
TypeScript will throw an error — because the generic type contract is violated.

✅ Correct:

```typescript
function getProduct<T>(items: T[]): T {
  return items[2];
}
```

❌ Incorrect:

```typescript
function getProduct<T>(items: T[]): T {
  return 3; // Error: number is not assignable to type T
}
```

---

## ⚡ 4. Converting Generic Function → Arrow Function

Now, let’s convert the same function into an **arrow function**.

**_ Example.ts _**

```typescript
const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};
```

**_ /Example.ts _**

### 🧩 Syntax Breakdown:

1. `<T>` — declares the generic type before the parameter list.
2. `(products: T[])` — parameter (array of type T).
3. `: T` — return type annotation.
4. `=> { ... }` — function body.

✅ This is a **generic arrow function**.

---

## 💡 5. Generic Arrow Function — Common Pitfall in JSX/React

If you use this syntax inside a **React** or **JSX** file,
TypeScript might confuse the `<T>` part with an **HTML tag**.

To fix this, you can add a **comma** after `<T>`:

**_ Example.tsx _**

```typescript
const getSearchResults = <T>(items: T[]): T => {
  return items[0];
};
```

**_ /Example.tsx _**

🧠 That trailing comma `,` tells TypeScript:

> “This is a generic type, not a JSX tag.”

This is **standard practice** in React and TSX files.

---

## 🧪 6. Using the Generic Arrow Function

Let’s see it in action with multiple data types.

**_ Example.ts _**

```typescript
const numbers = [10, 20, 30, 40, 50];
const products = ["Shoes", "Bag", "Shirt", "Watch", "Cap"];

console.log(getMoreSearchProducts(numbers)); // 50
console.log(getMoreSearchProducts(products)); // "Cap"
```

**_ /Example.ts _**

✅ Works seamlessly with any array type.

---

## 🧩 7. Understanding Array Generics with Documentation Context

According to TypeScript documentation:

> You can’t always use `.length` or other array methods
> unless the input is guaranteed to be an array.

That’s why defining your parameter as `T[]` or `Array<T>` ensures
you can safely use array properties like `.length`, `.map()`, `.filter()`, etc.

**_ Example.ts _**

```typescript
function printArrayLength<T>(items: T[]): void {
  console.log("Array length:", items.length);
}
```

**_ /Example.ts _**

✅ TypeScript now knows that `items` definitely supports `.length`.

---

## 🧠 8. Simplifying the Syntax — Template Thinking

When working with generics, think of the angular brackets `<T>`
as a **template declaration**, just like parameters for a function.

Example:

```typescript
function processItems<T>(list: T[]): T {
  const index = Math.floor(list.length / 2);
  return list[index];
}
```

✅ Works for strings, numbers, booleans, or custom objects — no need to redefine the function.

---

## 🧩 9. Key Syntax Reference

| Feature                | Example                             | Description                 |
| ---------------------- | ----------------------------------- | --------------------------- |
| Generic function       | `function fn<T>(arg: T): T {}`      | Basic generic function      |
| Generic array param    | `(list: T[])` or `(list: Array<T>)` | Two equivalent ways         |
| Generic arrow function | `const fn = <T>(arg: T): T => {}`   | Arrow function with generic |
| React-safe version     | `const fn = <T,>(arg: T): T => {}`  | Prevents JSX parsing issues |
| Type locked return     | Input type = Output type            | Type safety maintained      |

---

## 🧭 Summary

| Concept                   | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| **Generics in Arrays**    | Allow functions to handle any type of array safely         |
| **Return Type `T`**       | Always matches the element type of the input array         |
| **Arrow Function Syntax** | `<T>(args: T[]): T => { ... }`                             |
| **React-safe Syntax**     | `<T,>` prevents TypeScript from mistaking generics as JSX  |
| **Purpose**               | Makes array and function operations reusable and type-safe |

---

### 🧩 In Simple Words:

> Generics in arrays and arrow functions let you write **one function**
> that works with **any array type** — keeping full **type safety**
> and **auto-completion** without rewriting your logic.

---

✅ **Next Up →** Advanced Generic Types and Constraints in TypeScript 🚀
