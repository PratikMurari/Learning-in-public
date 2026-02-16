# Type Assertion, `unknown`, and `never` in TypeScript

## 1. What This Lecture Is About

This lecture explains **three important TypeScript concepts** that appear a lot in real projects:

1. **Type Assertion** – telling TypeScript: _“Trust me, I know the type.”_
2. **`unknown` type** – safer alternative to `any`
3. **`never` type** – used for impossible cases and exhaustive checks

These are not just TypeScript tricks — they represent **good production coding practices**.

---

## 2. Type Assertion – What It Really Means

### Definition

> **Type Assertion** means you are telling TypeScript  
> “I am sure about the type — please assume it.”

⚠️ Important:

- Type assertion is **NOT type conversion**
- It does **not change the value**
- It only affects **TypeScript’s understanding**

---

## 3. Basic Example of Type Assertion

```ts
let response: any;
response = "chai aur code";
```

Now if you try:

```ts
response.length;
```

❌ No suggestions
❌ No safety

Because TypeScript still thinks `response` is `any`.

---

### Fix using Type Assertion

```ts
(response as string).length;
```

Now:

- TypeScript trusts you
- String methods appear
- Autocomplete works

This is **forceful assertion**.

---

## 4. When Type Assertion Is Commonly Required

### Environment variables

```ts
const port = process.env.PORT as string;
```

### DOM elements

```ts
const input = document.getElementById("username") as HTMLInputElement;
```

Without assertion:

- TypeScript doesn’t know which element it is
- Input-specific properties won’t appear

---

## 5. Type Assertion with JSON & Local Storage

### Real-world problem

Local Storage always stores **strings**.

```ts
let bookString = '{"name":"The One Thing"}';
```

Parsing JSON:

```ts
const bookObj = JSON.parse(bookString);
```

❌ TypeScript doesn’t know what `bookObj` is.

---

### Define a custom type

```ts
type Book = {
  name: string;
};
```

### Assert the parsed value

```ts
const book = JSON.parse(bookString) as Book;
```

Now:

- `book.name` works
- TypeScript gives suggestions
- You get safety (if used carefully)

---

## 6. Type Assertion Is a Promise, Not a Check

TypeScript does **not verify** your assertion.

This will compile:

```ts
const wrong = JSON.parse("{}") as Book;
```

But at runtime:

- `name` may be missing
- Bugs can happen

👉 Use **type guards** when data is unreliable.

---

## 7. `any` vs `unknown` (Quick Recap)

### `any`

```ts
let value: any;
value.toUpperCase(); // allowed
```

- No checks
- No safety
- TypeScript gives up

---

### `unknown`

```ts
let value: unknown;
value.toUpperCase(); // ❌ error
```

TypeScript says:

> “First prove what this is.”

---

## 8. Using `unknown` Safely with Type Guards

```ts
let newValue: unknown;
newValue = "chai aur code";

if (typeof newValue === "string") {
  newValue.toUpperCase(); // ✅ safe
}
```

✔ Forces checks
✔ Prevents runtime errors
✔ Preferred over `any`

---

## 9. Why `unknown` Is Better Than `any`

| Feature          | `any` | `unknown` |
| ---------------- | ----- | --------- |
| Requires checks  | ❌    | ✅        |
| Type safety      | ❌    | ✅        |
| Recommended      | ❌    | ✅        |
| Production ready | ❌    | ✅        |

**Rule of thumb**:

> Use `unknown` when type is not known yet.

---

## 10. `never` Type – The Most Misunderstood Type

### What does `never` mean?

> **`never` means: this should never happen**

It represents:

- Impossible values
- Unreachable code
- Functions that never finish

---

## 11. `never` in Exhaustive Role Checks

### Example: Role-based logic

```ts
type Role = "admin" | "user";

function redirect(role: Role) {
  if (role === "admin") {
    return;
  }

  if (role === "user") {
    return;
  }

  role; // type is `never`
}
```

Why `never`?

- All possible roles are already handled
- Nothing is left
- This line should never be reached

---

## 12. Why This Is Extremely Useful

Now imagine later someone adds:

```ts
type Role = "admin" | "user" | "superadmin";
```

TypeScript will:

- Immediately point out missing logic
- Prevent silent bugs
- Force you to handle new cases

This is **compile-time safety**.

---

## 13. `never` in Infinite Functions

Some functions **never return**.

### Example: Infinite loop

```ts
function runServer(): never {
  while (true) {
    console.log("Server running...");
  }
}
```

This function:

- Never ends
- Never returns
- Correct return type is `never`

---

## 14. `never` in Error Handling

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

Since it always throws:

- Code after it never runs
- Return type is `never`

---

## 15. `never` vs `void`

| `void`                   | `never`                 |
| ------------------------ | ----------------------- |
| Function returns nothing | Function never returns  |
| Function finishes        | Function never finishes |
| Common                   | Special / advanced      |

---

## 16. Type Assertion in `try...catch`

### Common mistake

```ts
try {
  riskyCode();
} catch (error: any) {
  console.log(error.message);
}
```

❌ Unsafe
❌ Assumes error shape

---

### Safe approach

```ts
try {
  riskyCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
}
```

✔ Proper type guard
✔ Production-ready
✔ Uses TypeScript correctly

---

## 17. Key Takeaways

### Type Assertion

- Tells TypeScript to trust you
- Does not convert values
- Use only when sure

### `unknown`

- Safer alternative to `any`
- Forces validation
- Preferred in APIs & external data

### `never`

- Represents impossible cases
- Helps catch missing logic
- Very powerful in large apps

---

## 18. Final Summary

> **Type Assertion** gives control
> **`unknown` gives safety**
> **`never` gives guarantees**

These three together make TypeScript:

- Safer
- More predictable
- Perfect for production-grade apps

---

## 19. What’s Next?

Upcoming lectures will cover:

- Arrays & objects in depth
- Interfaces vs types
- Function typing patterns
- Real-world TypeScript architecture
