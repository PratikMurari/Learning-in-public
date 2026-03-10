# Interfaces and Generics in TypeScript

> Source: https://youtu.be/vwtYHcRtvag?si=uV5kkL98n0maCSRt

# 1. Why Interfaces Are Important

In the TypeScript ecosystem, **interfaces are used a lot**.

They are mainly used to:

- Define **structure (shape) of objects**
- Make code **predictable**
- Help with **type checking**
- Improve **code readability**

In real projects (React, APIs, libraries), interfaces appear **everywhere**.

---

# 2. What is an Interface?

An **interface defines the structure of an object**.

It tells TypeScript:

> “Any object of this type must follow this structure.”

Example:

```ts
interface Tea {
  flavor: string;
  price: number;
}
```

Now any object of type `Tea` must follow this structure.

Example usage:

```ts
const masalaTea: Tea = {
  flavor: "Masala",
  price: 30,
};
```

If you do:

```ts
price: "30";
```

TypeScript will give an error because `price` must be a **number**.

---

# 3. Interface vs Type

Both can define object structure.

Example using **type**:

```ts
type Tea = {
  flavor: string;
  price: number;
};
```

Example using **interface**:

```ts
interface Tea {
  flavor: string;
  price: number;
}
```

In **70–80% of cases**, both are interchangeable.

But interfaces are preferred when:

- designing APIs
- defining object structures
- working with classes

---

# 4. Optional Properties in Interfaces

Sometimes a property is **not required**.

Use `?`.

Example:

```ts
interface Tea {
  flavor: string;
  price: number;
  milk?: boolean;
}
```

Now this is valid:

```ts
const tea: Tea = {
  flavor: "Masala",
  price: 20,
};
```

And this is also valid:

```ts
const tea: Tea = {
  flavor: "Masala",
  price: 20,
  milk: true,
};
```

---

# 5. Readonly Properties in Interfaces

Sometimes values should **not change after creation**.

Example:

```ts
interface TeaShop {
  readonly id: number;
  name: string;
}
```

Usage:

```ts
const shop: TeaShop = {
  id: 1,
  name: "ChaiCode Cafe",
};
```

Trying to change it:

```ts
shop.id = 2;
```

❌ Error because `id` is **readonly**.

---

# 6. Interfaces for Functions

Interfaces can also define **function shapes**.

Example:

```ts
interface DiscountCalculator {
  (price: number): number;
}
```

Usage:

```ts
const apply50: DiscountCalculator = (price) => {
  return price * 0.5;
};
```

Meaning:

- takes a number
- returns a number

---

# 7. Interfaces with Methods

Interfaces can require objects to have **specific methods**.

Example:

```ts
interface TeaMachine {
  start(): void;
  stop(): void;
}
```

Implementation:

```ts
const machine: TeaMachine = {
  start() {
    console.log("Starting machine");
  },

  stop() {
    console.log("Stopping machine");
  },
};
```

If one method is missing → TypeScript error.

---

# 8. Index Signatures

Used when we **don’t know all property names in advance**.

Example:

```ts
interface TeaRatings {
  [flavor: string]: number;
}
```

Meaning:

- key = string
- value = number

Example usage:

```ts
const ratings: TeaRatings = {
  masala: 4.5,
  ginger: 4.8,
  lemon: 4.2,
};
```

This helps when objects have **dynamic keys**.

---

# 9. Interface Merging

One of the **most powerful features**.

If the same interface is declared multiple times, **TypeScript merges them automatically**.

Example:

```ts
interface User {
  name: string;
}
```

Another file or library:

```ts
interface User {
  age: number;
}
```

Final structure becomes:

```ts
interface User {
  name: string;
  age: number;
}
```

Usage:

```ts
const u: User = {
  name: "Hitesh",
  age: 42,
};
```

This is called **Interface Merging**.

Very useful when:

- extending library types
- adding new properties

---

# 10. Extending Interfaces

Interfaces can extend other interfaces.

Example:

```ts
interface A {
  a: string;
}

interface B {
  b: string;
}
```

New interface:

```ts
interface C extends A, B {}
```

Usage:

```ts
const obj: C = {
  a: "hello",
  b: "world",
};
```

---

# 11. Introduction to Generics

Generics allow you to write **reusable and flexible code**.

They act like **templates**.

Instead of specifying a type immediately, you use a **placeholder**.

Example placeholder:

```
T
```

But it can be any letter.

---

# 12. Basic Generic Function

Example:

```ts
function wrapInArray<T>(item: T): T[] {
  return [item];
}
```

Meaning:

- input type = `T`
- return type = `T[]`

Usage:

```ts
wrapInArray("Masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });
```

The function adapts automatically.

---

# 13. Generic Function with Multiple Types

Example:

```ts
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
```

Usage:

```ts
pair("Masala", "Tea");
pair("Masala", 10);
pair({ flavor: "ginger" }, 20);
```

This allows **different types together**.

---

# 14. Generic Interfaces

Interfaces can also be generic.

Example:

```ts
interface Box<T> {
  content: T;
}
```

Usage with number:

```ts
const numberBox: Box<number> = {
  content: 10,
};
```

Usage with string:

```ts
const stringBox: Box<string> = {
  content: "Masala Tea",
};
```

Type must match the generic definition.

---

# 15. Generic Utility Types

TypeScript provides built-in generic utilities.

Examples:

### Partial

```ts
Partial<T>;
```

Makes all properties optional.

---

### Pick

```ts
Pick<T, "name">;
```

Selects specific properties.

---

### Omit

```ts
Omit<T, "age">;
```

Removes properties.

These are heavily used in **real-world projects**.

---

# 16. Real World Use of Generics

Generics are commonly used in:

- API responses
- React state
- libraries
- frameworks
- database clients

Example API response:

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}
```

Usage:

```ts
const response: ApiResponse<{ flavor: string }> = {
  status: 200,
  data: {
    flavor: "Masala",
  },
};
```

This makes APIs **type-safe and reusable**.

---

# 17. Key Takeaways

Interfaces:

- define structure
- widely used in TypeScript
- support methods, readonly, optional properties
- allow interface merging

Generics:

- create reusable code
- work with multiple types
- common in libraries and APIs
- often appear in frameworks like React

---

# 18. Final Advice

Interfaces → **very important**
Generics → **powerful but advanced**

Even if you understand **40–50% of generics**, that's enough initially.

With practice and reading real TypeScript code, they become clearer.

---

☕ The more TypeScript code you read, the easier interfaces and generics will feel.
