# Type Narrowing & Type Guards in TypeScript

## 1. What This Lecture Is About

This lecture explains **how TypeScript safely works with uncertain data** using:

1. **Type Narrowing**
2. **Type Guards**
3. Difference between **`any`** and **`unknown`**

These concepts are:

- Not limited to TypeScript
- Actually **good coding practices**
- Already used in JavaScript (but often ignored)

TypeScript **forces you** to write safer code that JavaScript allows you to skip.

---

## 2. The Core Problem TypeScript Solves

In real applications:

- Data can come in multiple forms
- APIs can return different shapes
- Optional values may or may not exist

Example:

```ts
string | number;
```

TypeScript asks:

> “Before using this value, prove what it actually is.”

That proof is called **Type Narrowing**.

---

## 3. What Is Type Narrowing?

> **Type Narrowing** means reducing a broad type
> (like `string | number`)
> into a **specific type** using checks.

Once narrowed, TypeScript:

- Knows exactly what the type is
- Gives correct method suggestions
- Prevents unsafe operations

---

## 4. Basic Type Narrowing Using `typeof`

### Example: Union type parameter

```ts
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  } else {
    return `Chai order number ${kind}`;
  }
}
```

### What happened?

- `typeof` is a **type guard**
- Inside `if`, `kind` is guaranteed to be `string`
- Inside `else`, it is guaranteed to be `number`

This guarantee is **Type Narrowing**.

---

## 5. Why Type Narrowing Is Powerful

Inside each block:

- Only valid methods are suggested
- No runtime surprises
- Clean, readable logic

This becomes **extremely powerful** in large applications.

---

## 6. Truthiness-Based Narrowing (Optional Values)

### Example: Optional parameter

```ts
function serveChai(message?: string) {
  if (message) {
    return `Serving chai with message: ${message}`;
  }

  return "Serving default masala chai";
}
```

### Why this works

- `message?: string` means `string | undefined`
- `if (message)` checks truthiness
- Inside `if`, `message` is guaranteed to exist

This is also **Type Narrowing**.

---

## 7. Exhaustive Checks with Union Types

When you define **limited valid values**, you should handle **all cases**.

### Example: Chai size

```ts
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "Serving small cutting chai";
  }

  if (size === "medium") {
    return "Serving medium chai";
  }

  if (size === "large") {
    return "Serving large chai";
  }

  return `Serving chai order number ${size}`;
}
```

### What is happening?

- Every possible type is handled
- No invalid state can slip through
- This is called **exhaustive checking**

---

## 8. Type Guards Using `instanceof`

Used when working with **classes**.

### Example: Two chai classes

```ts
class KulhadChai {
  serve() {
    return "Serving kulhad chai";
  }
}

class CuttingChai {
  serve() {
    return "Serving cutting chai";
  }
}
```

### Using `instanceof`

```ts
function serveChai(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }

  return chai.serve();
}
```

Even if methods are same:

- `instanceof` guarantees which class it is
- Improves readability & safety

---

## 9. Introducing Custom Types (`type` keyword)

TypeScript allows **custom structured types**.

### Example: Chai Order type

```ts
type ChaiOrder = {
  type: string;
  sugar: number;
};
```

Now this becomes a **contract**.

---

## 10. Custom Type Guards (Very Important)

You can write **your own type-checking functions**.

### Example: Type Guard Function

```ts
function isChaiOrder(item: any): item is ChaiOrder {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof item.type === "string" &&
    typeof item.sugar === "number"
  );
}
```

### Why this is powerful

Once this function returns `true`:

- TypeScript fully trusts the type
- No further checks required
- Full autocomplete works

---

## 11. Using Custom Type Guards

```ts
function serveOrder(item: unknown) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }

  return "Serving custom chai";
}
```

Inside `if`:

- `item` is guaranteed to be `ChaiOrder`
- Safe access to properties
- No runtime crashes

---

## 12. `any` vs `unknown` (Critical Difference)

### `any`

```ts
let value: any;
```

- TypeScript gives up
- No checks
- No safety
- Very dangerous

---

### `unknown`

```ts
let value: unknown;
```

- TypeScript says: “I don’t know yet”
- Forces you to **check before using**
- Much safer than `any`

---

## 13. Why `unknown` Is Better Than `any`

| Feature         | `any` | `unknown` |
| --------------- | ----- | --------- |
| Type safety     | ❌    | ✅        |
| Requires checks | ❌    | ✅        |
| Recommended     | ❌    | ✅        |
| Production safe | ❌    | ✅        |

**Rule**:

> If you don’t know the type yet → use `unknown`

---

## 14. Type Narrowing with `in` Operator

Sometimes you narrow by checking **properties**.

```ts
function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    // Must be MasalaChai
  }
}
```

This works because:

- Only one type has that property
- TypeScript narrows automatically

---

## 15. Discriminated Unions (Real-World Pattern)

### Example: Different chai types

```ts
type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
};

type ElaichiChai = {
  type: "elaichi";
};

type Chai = MasalaChai | GingerChai | ElaichiChai;
```

---

## 16. Narrowing Using `switch`

```ts
function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return "Making masala chai";
    case "ginger":
      return "Making ginger chai";
    case "elaichi":
      return "Making elaichi chai";
  }
}
```

### Benefits

- Compiler ensures all cases are handled
- Excellent autocomplete
- Very safe & readable

---

## 17. Why Type Guards Matter in Production

- APIs are unreliable
- Data can be malformed
- Bugs are expensive

Type Guards:

- Catch errors early
- Make logic explicit
- Improve confidence
- Scale beautifully in large teams

---

## 18. Final Summary

### Type Narrowing

- Reduces uncertain types
- Makes code safe
- Improves IDE support

### Type Guards

- Proof mechanisms for TypeScript
- Can be built-in (`typeof`, `instanceof`)
- Or custom (`is Type` functions)

### `unknown` vs `any`

- Prefer `unknown`
- Avoid `any` whenever possible

> **Type Guards don’t restrict you**
> **They protect you**

---

## 19. What’s Next?

Upcoming lectures will cover:

- Arrays & objects in depth
- Functions & return types
- Interfaces vs types
- Real-world TypeScript patterns
