# Understanding Union Types & `any` in TypeScript

## 1. What This Lecture Is About

This lecture covers **two very important TypeScript concepts**:

1. **Union Types** → _A variable can have more than one allowed type_
2. **`any` type** → _TypeScript gives up type checking (dangerous)_

You will:

- Use **Union types often**
- Be tempted to use **`any`**
- Learn **why `any` should usually be avoided**

---

## 2. Why Union Types Exist

In an ideal world:

- Every variable has exactly one type

In the real world:

- APIs change
- Data formats vary
- Same value can arrive in different forms

TypeScript gives us **Union Types** to handle this safely.

---

## 3. Union Type – Basic Example

### Problem

Subscriber count can be:

- A number → `1000000`
- A string → `"1M"`

### Solution: Union Type

```ts
let subscribers: number | string;

subscribers = 10; // ✅
subscribers = "1M"; // ✅
subscribers = true; // ❌
```

### Key syntax

- `|` (pipe) means **OR**
- Read it as: _number OR string_

---

## 4. What Is a Union Type?

> A **Union Type** allows a variable to hold **one of multiple predefined types**

This makes your code:

- Flexible
- Safe
- Explicit

---

## 5. Real-World Example: API Request Status

API calls usually have **limited valid states**.

### Define allowed values using Union

```ts
let apiStatus: "pending" | "success" | "error";

apiStatus = "pending"; // ✅
apiStatus = "success"; // ✅
apiStatus = "done"; // ❌
```

### Why this is powerful

- Prevents invalid states
- Gives autocomplete suggestions
- Makes logic predictable

Hovering over `apiStatus` shows:

```
"pending" | "success" | "error"
```

---

## 6. Union Types Are NOT Just for Primitives

You can use unions with **fixed string values** (called _literal unions_).

### Example: Airline Seat Selection

```ts
let seatType: "aisle" | "window" | "middle";

seatType = "window"; // ✅
seatType = "crew"; // ❌
```

### Benefits

- Autocomplete support
- No spelling mistakes
- Easy refactoring
- Clear business rules

This is extremely useful in:

- Forms
- API responses
- State management
- UI logic

---

## 7. Union Types Scale Very Well

As your project grows:

- Union types protect logic
- Reduce bugs
- Improve developer confidence

They are **one of the strongest features of TypeScript**.

---

## 8. Enter the Dangerous Type: `any`

### What is `any`?

```ts
let value: any;
```

Means:

- “I don’t know the type”
- OR “I don’t care about the type”

TypeScript **stops checking** this variable.

---

## 9. Why `any` Is Dangerous

Once a variable becomes `any`:

- You can assign anything
- No errors
- No safety
- No autocomplete
- No protection

```ts
let data: any;

data = "chai";
data = 42;
data = true;
data.toUpperCase(); // ❌ runtime error possible
```

TypeScript will **not warn you**.

---

## 10. How `any` Sneaks In (Very Common Case)

### Example: Loop logic

```ts
let orders = ["12", "20", "28", "42"];
let currentOrder;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
```

Hovering shows:

```ts
let currentOrder: any;
```

### Why this happens

- Variable declared without value
- TypeScript cannot infer type
- So it defaults to `any`

---

## 11. Why This Is a Problem

- `currentOrder` could be:
  - string
  - undefined

- But TypeScript gave up checking
- Bugs can appear silently

---

## 12. Fixing `any` Using Union Types

### Correct solution

```ts
let currentOrder: string | undefined;
```

Now TypeScript understands:

- Value might exist
- Or might not

This is **safe and explicit**.

---

## 13. Understanding `undefined` in Unions

```ts
let currentOrder: string | undefined;
```

Means:

- Variable may be empty
- Logic must handle that case

TypeScript now allows usage **only after checks**.

This prevents:

- Accessing values before assignment
- Runtime crashes

---

## 14. Why TypeScript Warns About “Used Before Assigned”

TypeScript is saying:

> “You used this variable, but there’s no guarantee it was assigned.”

JavaScript allows this.
TypeScript **protects you**.

---

## 15. When Is `any` Acceptable?

⚠️ **Rare cases only**

Acceptable scenarios:

- Very dynamic API responses
- Temporary prototyping
- Gradual migration from JS to TS

Even then:

- Prefer `unknown`
- Or define proper types ASAP

---

## 16. Golden Rules

### ✅ Use Union Types when:

- Values have limited valid options
- API responses vary
- States are predefined

### ❌ Avoid `any` when:

- You know the type
- You can describe the shape
- You want safety

---

## 17. Final Summary

### Union Types

- Allow multiple valid types
- Extremely useful
- Safe & powerful
- Encourage better design

### `any`

- Turns off TypeScript
- Removes safety
- Should be avoided
- Use only as last resort

> **Union types make TypeScript strong**
> **`any` makes it weak**

---

## 18. What’s Next?

Next lectures will cover:

- Arrays & objects
- Function typing
- Return types
- More real-world patterns
