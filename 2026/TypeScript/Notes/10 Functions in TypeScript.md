# Functions in TypeScript

> Source: https://youtu.be/hVMD8imCBrE?si=aea1QVrDfZK18_-4

## 1. Big Idea About Functions in TypeScript

Functions in TypeScript are actually very simple.

Every function has only **two main things**:

1. Does it take input (parameters)?
2. Does it return output (return value)?

That’s it.

TypeScript only helps us define:

- What type of data goes inside
- What type of data comes out

---

## 2. Basic Function with Typed Parameters

### Example

```ts
function makeTea(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}
```

### Usage

```ts
makeTea("Masala", 2);
```

If you do this:

```ts
makeTea("Masala", "two");
```

❌ Error: string is not assignable to number

✔ TypeScript catches it immediately.

---

## 3. Why This Is Powerful

Without TypeScript:

- You might pass wrong values
- You won’t know until runtime

With TypeScript:

- You know instantly
- Autocomplete works
- Safer code

---

## 4. Return Type in Functions

After the parentheses, you can define return type.

### Syntax

```ts
function getTeaPrice(): number {
  return 25;
}
```

### Meaning:

- This function must return a `number`
- If it returns something else → error

---

### Example of Error

```ts
function getTeaPrice(): number {
  return "25";
}
```

❌ Error: string is not assignable to number

---

## 5. Return Type Is Often Inferred

If you write:

```ts
function getTeaPrice() {
  return 25;
}
```

TypeScript automatically infers:

```ts
(): number
```

But best practice:

> Explicitly write return type for clarity.

---

## 6. Functions Returning Multiple Types (Union)

Sometimes a function may return different types.

Example:

```ts
function makeOrder(order: string): string | null {
  if (!order) {
    return null;
  }
  return order;
}
```

Here:

- It may return a `string`
- Or it may return `null`

If you write:

```ts
function makeOrder(order: string): string {
  if (!order) {
    return null; // ❌ error
  }
  return order;
}
```

TypeScript protects you from mistakes.

---

## 7. Void Functions

If a function does NOT return anything:

```ts
function logTea(): void {
  console.log("Tea is ready");
}
```

`void` means:

- Nothing comes back
- No return value expected

Best practice:

> Always explicitly write `: void` when nothing is returned.

---

## 8. Optional Parameters (`?`)

Sometimes parameters are optional.

```ts
function orderTea(type?: string) {
  console.log(type);
}
```

Now this works:

```ts
orderTea();
orderTea("Masala");
```

If parameter is optional:

- It may be undefined
- You must handle that carefully

---

## 9. Default Parameters

Another way to make parameter optional:

```ts
function orderTea(type: string = "Masala") {
  console.log(type);
}
```

Now:

```ts
orderTea(); // uses "Masala"
orderTea("Ginger");
```

### Industry Practice

- Optional parameters (`?`) usually placed at the **end**
- Default parameters also placed at the **end**

---

## 10. Important Rule About Optional Parameters

If you have multiple parameters:

```ts
function makeTea(type: string, cups?: number) {}
```

✔ Optional parameter must come after required ones.

This is a best practice.

---

## 11. Complex Parameter Objects

Instead of many parameters, we often pass an object.

### Example

```ts
function createTea(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
```

### Usage

```ts
createTea({
  type: "Masala",
  sugar: 2,
  size: "large",
});
```

This may look complex but it is simple:

- Parameter = object
- Object properties have types
- Return type defined after `):`

That’s all.

---

## 12. Functions + Object Types (Better Way)

Instead of inline object types, better to define type:

```ts
type TeaOrder = {
  type: string;
  sugar: number;
  size: "small" | "large";
};

function createTea(order: TeaOrder): number {
  return 4;
}
```

Cleaner and reusable.

---

## 13. What Happens Inside a Function?

Inside function:

- TypeScript may narrow types
- You can check type conditions
- You can return different values

Example:

```ts
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
}
```

This is called **type narrowing**.

---

## 14. Summary of Functions in TypeScript

| Concept                  | Purpose        |                           |
| ------------------------ | -------------- | ------------------------- |
| Parameter types          | Control input  |                           |
| Return type              | Control output |                           |
| `void`                   | No return      |                           |
| Union return (`string    | null`)         | Multiple possible returns |
| Optional parameter (`?`) | Not required   |                           |
| Default parameter        | Fallback value |                           |

---

## 15. Golden Rule

Functions in TypeScript only care about:

1. What goes in
2. What comes out

That’s it.

Everything else is just JavaScript logic.

---

## 16. Final Takeaway

Do not fear complex-looking function signatures.

Even this:

```ts
function createTea(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number;
```

Is just:

- One object parameter
- Defined structure
- One return type

Nothing scary.

---

## 17. Closing Thought

If you understand:

- Objects
- Functions
- Utility types

You understand **most of practical TypeScript**.

Next level topics will build on this foundation.

### ☕ Keep coding. Keep learning.
