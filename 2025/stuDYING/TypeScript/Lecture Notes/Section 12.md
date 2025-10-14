# 🧩 Section 12: Arrays in TypeScript

Arrays in TypeScript are **very similar to JavaScript**, but with one extra superpower — **type safety**.

That means you can tell TypeScript what kind of values are allowed in your array, so it can **catch mistakes before your program runs**.

---

## 🧠 What You’ll Learn

- How to define arrays in TypeScript
- Two different syntaxes for arrays
- How to define arrays of custom types
- How to work with nested arrays
- Bonus: Readonly arrays (newer TS feature)

---

## 🪄 Defining Arrays (and the “never” type)

If you just make an empty array without specifying a type:

**_ Example.ts _**

```ts
let superheroes = [];
superheroes.push("Spider-Man");
```

**_ /Example.ts _**

You’ll get an error:

> “Argument of type ‘string’ is not assignable to parameter of type ‘never’.”

That’s because TypeScript can’t figure out what type the array should be, so it marks it as **`never[]`**, which means “no values allowed”.

---

## ✅ Correct Way: Declare the Array Type

You must tell TypeScript what kind of data it will hold.

**_ Example.ts _**

```ts
let superheroes: string[] = [];
superheroes.push("Spider-Man");
superheroes.push("Iron Man");

let heroPowers: number[] = [];
heroPowers.push(100);
heroPowers.push(85);
```

**_ /Example.ts _**

### Explanation:

- `string[]` → array of strings
- `number[]` → array of numbers
- You can’t mix them unless you explicitly tell TypeScript to allow both.

---

## 💎 Alternative Syntax (Using Generics)

You’ll also see this a lot in real projects:

**_ Example.ts _**

```ts
let heroPowers: Array<number> = [];
heroPowers.push(90);
heroPowers.push(70);
```

**_ /Example.ts _**

This means **exactly the same thing** as `number[]`.
`Array<number>` is just the _generic_ version.

✅ Both are valid and equal — pick whichever you find more readable.

---

## 👥 Arrays of Custom Types

You can also make arrays that hold **objects with specific shapes**.

**_ Example.ts _**

```ts
type User = {
  name: string;
  isActive: boolean;
};

let allUsers: User[] = [];

allUsers.push({ name: "Alice", isActive: true });
allUsers.push({ name: "Bob", isActive: false });
```

**_ /Example.ts _**

If you try to push an object missing any property, TypeScript will warn you!

---

## 🧩 Nested Arrays (Arrays inside Arrays)

Sometimes, especially in data-heavy or ML projects, you might need **arrays inside arrays** (like matrices or pixel values).

**_ Example.ts _**

```ts
let rgbValues: number[][] = [
  [255, 255, 255], // white
  [0, 0, 0], // black
  [128, 0, 128], // purple
];
```

**_ /Example.ts _**

💡 You can read this as:

> “An array of arrays of numbers.”

---

## 🔒 Readonly Arrays (2025 Update)

If you want an array that **cannot be modified**, TypeScript now supports **readonly arrays** more cleanly.

**_ Example.ts _**

```ts
const favoriteFruits: readonly string[] = ["Apple", "Mango", "Banana"];

// ❌ Error: Property 'push' does not exist on type 'readonly string[]'
favoriteFruits.push("Orange");
```

**_ /Example.ts _**

Or using the generic version:

**_ Example.ts _**

```ts
const favoriteColors: ReadonlyArray<string> = ["Red", "Blue"];
```

**_ /Example.ts _**

---

## ⚙️ Extra Tip (Since 2023)

TypeScript has improved type inference for arrays:

- It now infers `readonly` for `as const` declarations.
- You can combine `readonly` with tuples or complex array shapes easily.

**_ Example.ts _**

```ts
const colors = ["red", "green", "blue"] as const;
// colors is readonly ["red", "green", "blue"]
```

**_ /Example.ts _**

---

## 🧠 Summary

| Concept           | Description             | Example                  |
| ----------------- | ----------------------- | ------------------------ |
| `string[]`        | Array of strings        | `let arr: string[] = []` |
| `Array<number>`   | Generic array syntax    | `let arr: Array<number>` |
| Custom Type Array | Array of typed objects  | `User[]`                 |
| Nested Arrays     | Array inside an array   | `number[][]`             |
| Readonly Arrays   | Arrays you can’t change | `readonly string[]`      |

---

## 🧩 Practice Task

✅ **Task 1:**
Create an array of `Book` objects.
Each book should have:

- `title` (string)
- `author` (string)
- `published` (boolean)

Then:

1. Push two books into it.
2. Try to push a book missing one property — see what happens!
3. Finally, make the array `readonly`.

**_ Example.ts _**

```ts
type Book = {
  title: string;
  author: string;
  published: boolean;
};

const library: Book[] = [];

library.push({ title: "1984", author: "George Orwell", published: true });
library.push({
  title: "Brave New World",
  author: "Aldous Huxley",
  published: true,
});

// ❌ Try pushing this and see TypeScript complain!
library.push({ title: "Untitled", author: "Unknown" });

// 🔒 Make it readonly
const readonlyLibrary: readonly Book[] = library;
```

**_ /Example.ts _**

---

## 🆕 Latest (2025) TypeScript Updates for Arrays

### 🧩 1. Variadic Tuple Types (TS 5.x+)

TypeScript now supports **spreading arrays and tuples** in type definitions.

**_ Example.ts _**

```ts
type RGB = [number, number, number];
type RGBA = [...RGB, number]; // adds alpha channel
```

**_ /Example.ts _**

### 🧱 2. Readonly and Immutable Improvements

Readonly arrays now better support:

- `map`, `filter`, and other array methods (typed immutably)
- Narrowed inference for `as const`

### 🧮 3. `const` type inference in arrays

`const` now helps TypeScript infer **literal array types** automatically — no need for manual `readonly` sometimes.

---

### 🚀 That’s it for Arrays!

You now know:

- How to define arrays safely in TypeScript
- How to use both syntaxes
- How to handle custom, nested, and readonly arrays
- The latest TS updates that make arrays more powerful than ever
