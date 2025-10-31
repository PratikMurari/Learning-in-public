# Section 28: Type Narrowing

## 🧠 What You’re Learning Here

This section isn’t about solving a “problem” like arrays or loops — it’s about writing **safer, more predictable code**.
TypeScript can’t always _guess_ what type of data you’re working with — so **type narrowing** is how you help it (and yourself) by checking and confirming the type before you use it.

Think of it like saying:

> “Before I drive this car, I should check whether it’s actually a car and not a bicycle.”

---

## 💡 What Is Type Narrowing?

Type narrowing means:

> You start with a variable that could be _many types_, and then **narrow it down** (confirm one exact type) using conditions like `typeof`, `instanceof`, or custom checks.

Example:

```ts
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase(); // ✅ TS now *knows* val is a string
  } else {
    return val + 3; // ✅ TS now *knows* val is a number
  }
}
```

Here’s the key idea:

- TypeScript didn’t know what `val` was at the start.
- After your `if` check, it now _knows exactly_ which type it is.
- That’s **type narrowing**.

---

## 🧩 Real-world analogy

Imagine you have a box that _might_ contain:

- a toy car 🚗
- or a teddy bear 🧸

You open it and check:

> “Is it soft?” → then it’s a teddy bear.
> “Does it roll?” → then it’s a car.

You “narrowed” what’s inside the box based on **tests**.
TypeScript does the same with your data.

---

## 🔍 Why `typeof` Can Be Tricky

When you use JavaScript’s built-in `typeof`, you’ll notice:

```ts
typeof 1; // "number"
typeof "hello"; // "string"
typeof [1, 2, 3]; // "object" 😬
typeof null; // "object" 😬
```

Yeah… **arrays and null** both return `"object"` — that’s a long-standing JavaScript quirk (not a TypeScript bug).
So, `typeof` is _useful but limited_. That’s why we use extra checks like:

```ts
Array.isArray(val); // ✅ safer way to check arrays
val === null; // ✅ safer way to check null
```

---

## 🧰 Type Guards (fancy term, simple idea)

When you see the term **“type guard”**, don’t get scared.
It just means:

> “A condition that checks what type something is.”

Examples:

```ts
typeof val === "string"; // built-in type guard
Array.isArray(val); // another built-in type guard
val instanceof Date; // yet another one
```

You can even **make your own**:

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}
```

Now you can use it:

```ts
if (isNumber(value)) {
  console.log(value + 10); // ✅ TS knows value is number
}
```

---

## ⚠️ Caution: “Falsy” and “Truthy” Confusion

In JavaScript:

- `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN` are all _falsy_.
- Everything else is _truthy_.

So if you write:

```ts
if (str) {
  // "non-empty string"
}
```

That skips the case where `str` is an **empty string** (`""`).
TypeScript won’t throw an error, but you might miss logic in your app — like showing a warning “string is empty.”

So be explicit when it matters:

```ts
if (str === "") {
  console.log("Empty string detected!");
}
```

---

## 🧪 Another Example: Optional or Nullable Values

```ts
function getId(id: string | null) {
  if (!id) {
    console.log("Please provide an ID");
    return;
  }
  console.log(id.toLowerCase());
}
```

This is super common — maybe an API forgot to send an ID.
TypeScript makes sure you **check** that it’s not null before using it.
Otherwise, it yells at you early (before runtime errors).

---

## 🧱 Big Picture: Why Narrowing Matters

Without narrowing:

- TypeScript can’t know what properties or methods are safe to call.
- You’ll get “Property X does not exist on type Y” errors.
- You might accidentally do math on strings or call `.toLowerCase()` on numbers.

With narrowing:
✅ TypeScript ensures your code only does valid operations on the right types.

---

## 🕹 Alternate (or Modern) Ways to Think About It

1. **Think of narrowing as filtering.**
   You’re filtering out invalid types like you filter bad data in an array.

2. **Pattern Matching (future TS feature!)**
   Newer TypeScript (>= 5.2) is exploring _pattern matching_ syntax — a cleaner way to narrow types.
   Not fully standard yet, but worth watching.

3. **Use optional chaining (`?.`) & nullish coalescing (`??`)**
   Instead of tons of if-checks:

   ```ts
   console.log(user?.name?.toLowerCase() ?? "Guest");
   ```

   This automatically narrows and handles null/undefined safely.

---

## 🧭 What’s Outdated or Missing (Since the Course Is ~3 Years Old)

🔸 **TypeScript now has:**

- **`satisfies` operator** – helps preserve narrowing while maintaining type safety:

  ```ts
  const config = { port: 3000 } satisfies Record<string, unknown>;
  ```

- **Improved discriminated unions** – automatic narrowing based on unique property tags.
- **`in` operator narrowing** – more robust now:

  ```ts
  if ("price" in product) { ... }  // checks if property exists
  ```

- **Control flow analysis improvements** – TS is smarter at tracking what’s possible after `if`, `return`, or `throw`.

🔸 **What he didn’t mention:**

- You can narrow types inside _switch_ statements or ternary (`?:`) too.
- You can narrow using _equality checks_ (`===`, `!==`) and _property presence_.

---

## 🧾 Summary Table

| Concept        | What It Means                                             | Example                        |
| -------------- | --------------------------------------------------------- | ------------------------------ |
| Type Narrowing | Making sure a variable is a specific type before using it | `if (typeof val === "string")` |
| Type Guard     | A condition that “guards” your code by checking type      | `Array.isArray(x)`             |
| Falsy Check    | Some values act like false (e.g., `""`, `0`, `null`)      | `if (!id)`                     |
| Custom Guard   | Function that returns a type check                        | `x is number`                  |
| Safer Checking | `Array.isArray()` or `x === null` instead of `typeof x`   | ✅ Better practice             |
