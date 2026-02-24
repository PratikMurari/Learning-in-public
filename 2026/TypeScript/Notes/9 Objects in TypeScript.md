# Objects in TypeScript

## 1. Why a Separate Lecture on Objects?

Objects look **simple** in JavaScript, but in TypeScript they become **very powerful**.

Why spend extra time on objects?

- Most real-world data is **object-based**
- APIs, users, orders, configs → all objects
- Small mistakes in object typing can cause **big bugs**

So this lecture focuses on:

- How objects are typed
- How TypeScript checks object shapes
- Utility types that make object handling easier

---

## 2. Basic Object Inference

### Example

```ts
const tea = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
```

TypeScript **automatically infers** this as:

```ts
{
  name: string;
  price: number;
  isHot: boolean;
}
```

This is called **type inference**.

✔ No need to manually annotate
✔ Happens behind the scenes

---

## 3. Explicitly Declaring Object Types

Sometimes inference is not enough.
We want **strict control**.

### Example

```ts
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
```

Now when assigning:

```ts
tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};
```

### Benefits

- Missing property → ❌ error
- Wrong type → ❌ error
- Autocomplete suggestions → ✅

---

## 4. Why Errors Are a Good Thing

Example mistake:

```ts
isHot: 5;
```

❌ Error: `number is not assignable to boolean`

These errors:

- Catch bugs early
- Save debugging time
- Make code safer

This is the **foundation of TypeScript**.

---

## 5. Object Type Aliases (Reusable Objects)

Instead of repeating object shapes, use **type aliases**.

### Example

```ts
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
```

### Usage

```ts
const gingerTea: Tea = {
  name: "Ginger Tea",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};
```

✔ Cleaner
✔ Reusable
✔ Easy to maintain

---

## 6. Arrays Inside Objects

If a property is an array:

```ts
ingredients: string[];
```

Then:

- Only strings are allowed
- Numbers or other types → ❌ error

```ts
ingredients: ["ginger", 2]; // ❌ error
```

---

## 7. Duck Typing (Structural Typing)

TypeScript uses **structural typing**, also called **duck typing**.

> “If it looks like a duck and quacks like a duck, it’s a duck.”

---

### Example

```ts
type Cup = {
  size: string;
};

const bigCup = {
  size: "500ml",
  material: "steel",
};

let smallCup: Cup = bigCup;
```

✔ Valid
Why?

- `size` exists and is correct
- Extra properties are ignored

---

## 8. Extra Properties Are Allowed (Sometimes)

TypeScript checks:

- **Minimum required properties**
- Not exact matches

So:

- Missing property → ❌ error
- Extra property → ✅ allowed

This is very important to remember.

---

## 9. Missing Properties Cause Errors

Example:

```ts
type User = {
  username: string;
  password: string;
};

const u1: User = {
  username: "chaiCode",
};
```

❌ Error: `password is missing`

TypeScript is strict about:

- Required properties
- Correct object shape

---

## 10. Splitting Object Types (Best Practice)

Large objects should be **split into smaller types**.

### Example

```ts
type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  orderId: string;
  items: Item[];
  address: Address;
};
```

### Why split?

- Better readability
- Reusability
- Cleaner architecture

This is **very common in production code**.

---

## 11. Utility Types – The Real Power

TypeScript gives **special helper types** for objects.

---

## 12. `Partial<T>`

Makes **all properties optional**.

### Example

```ts
type Tea = {
  name: string;
  price: number;
  isHot: boolean;
};

function updateTea(updates: Partial<Tea>) {
  console.log(updates);
}
```

### Usage

```ts
updateTea({ price: 25 });
updateTea({ isHot: false });
updateTea({}); // ✅ allowed
```

⚠️ Be careful:

- Empty object is allowed
- Can cause logical bugs if misused

---

## 13. `Required<T>`

Makes **all properties mandatory**, even optional ones.

### Example

```ts
type Order = {
  name?: string;
  quantity?: number;
};

function placeOrder(order: Required<Order>) {}
```

### Usage

```ts
placeOrder({ name: "Tea" });
// ❌ error (quantity missing)

placeOrder({ name: "Tea", quantity: 2 });
// ✅
```

---

## 14. `Pick<T, Keys>`

Creates a new type by **selecting specific properties**.

### Example

```ts
type Tea = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicTeaInfo = Pick<Tea, "name" | "price">;
```

### Usage

```ts
const info: BasicTeaInfo = {
  name: "Lemon Tea",
  price: 30,
};
```

✔ Only selected fields required
✔ Very useful for summaries & previews

---

## 15. `Omit<T, Keys>`

Creates a new type by **removing specific properties**.

### Example

```ts
type Tea = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicTea = Omit<Tea, "secretIngredients">;
```

### Usage

```ts
const publicTea: PublicTea = {
  name: "Masala Tea",
  price: 20,
  isHot: true,
};
```

✔ Secret fields hidden
✔ Great for public APIs

---

## 16. Summary of Utility Types

| Utility       | What it does                  |
| ------------- | ----------------------------- |
| `Partial<T>`  | Makes all properties optional |
| `Required<T>` | Makes all properties required |
| `Pick<T>`     | Selects specific properties   |
| `Omit<T>`     | Removes specific properties   |

---

## 17. Key Takeaways

- Objects are **core** to TypeScript
- TypeScript checks **structure**, not names
- Missing properties = ❌
- Extra properties = usually ✅
- Utility types make object handling **powerful & flexible**

---

## 18. Final Thought

> Mastering objects in TypeScript means
> you’ve mastered **80% of real-world TypeScript usage**.

Next up: **Functions in TypeScript** 🚀
That’s where everything comes together.

### ☕ Happy coding, happy chai!
