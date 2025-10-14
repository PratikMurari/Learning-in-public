# Section 11: ReadOnly and Optional

## 📝 Notes (in simple language)

- TypeScript provides two very useful tools when working with **types**:  
  1. `readonly` — makes a property **immutable** after initialization.  
  2. `?` (question mark) — makes a property **optional**.  
- These are often seen in real-world TypeScript projects, especially when defining models or database types.  
- You’ll encounter them often in open-source repositories or backend APIs written in TypeScript.  

---

## 💻 Example 1: Using `readonly`

*** Example.ts ***
type User = {
  readonly _id: string;  // cannot be modified after creation
  name: string;
  email: string;
  isActive: boolean;
};

const myUser: User = {
  _id: "123",
  name: "Mr. H",
  email: "h@h.com",
  isActive: false,
};

// ✅ allowed
myUser.email = "h@gmail.com";

// ❌ Error: Cannot assign to '_id' because it is a read-only property
myUser._id = "456";
*** /Example.ts ***

### 🧠 Explanation
- The `readonly` modifier ensures a property can’t be reassigned.  
- Common use case: `_id` fields from databases like MongoDB that should never change.  
- This restriction exists **only at compile time** — TypeScript enforces it, not JavaScript runtime.

---

## 💻 Example 2: Using `?` (Optional Properties)

*** Example.ts ***
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // optional property
};

const freeUser: User = {
  _id: "321",
  name: "John",
  email: "john@example.com",
  isActive: true,
};

// ✅ No error – creditCardDetails is optional
const paidUser: User = {
  _id: "999",
  name: "Jane",
  email: "jane@example.com",
  isActive: true,
  creditCardDetails: 1234567890,
};
*** /Example.ts ***

### 🧠 Explanation
- Optional properties are useful for cases where **not all users** or entities have every detail.  
- Adding `?` before the colon makes the property **optional**.  
- It prevents TypeScript from complaining when the property is missing.  

---

## 💡 Tip: Mix and Match Existing Types (Intersection Types)

You can combine multiple types into one using the **`&` (ampersand)** operator.

*** Example.ts ***
type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};

type CardDetails = CardNumber & CardDate & {
  cvv: number;
};

const myCard: CardDetails = {
  cardNumber: "1111-2222-3333-4444",
  cardDate: "10/30",
  cvv: 123,
};
*** /Example.ts ***

### 🧠 Explanation
- The `&` symbol **merges multiple types** into one combined type.  
- Useful when you want to reuse already defined types rather than redefining everything.  
- This technique helps maintain **DRY (Don’t Repeat Yourself)** code principles.  

---

## ✅ Key Takeaways

- `readonly` protects values from being accidentally changed.  
- `?` allows flexible, optional properties.  
- `&` combines multiple types together.  
- TypeScript only enforces these at **compile time**, not runtime.  
- Use these features to make your type definitions **more expressive and safer**.  

---

## 🏋️ Practice Task

1. Create a type `Product` with:  
   - `readonly id: string`  
   - `name: string`  
   - `price: number`  
   - `discount?: number`  

2. Try changing the `id` — TypeScript should throw an error.  
3. Create two products — one with discount, one without.  
4. Log them to verify optional property handling.  

---

## 🔄 Bonus Tip (2024+ Update)

- Modern TypeScript now supports **readonly arrays and tuples**.  
  - Example:  
    ```ts
    const nums: readonly number[] = [1, 2, 3];
    nums.push(4); // ❌ Error – cannot modify readonly array
    ```
- Use this feature to prevent accidental mutations in data structures.

📌 **In short:**  
Use `readonly` to protect data integrity, `?` for flexibility, and `&` for composability — all of which make your TypeScript code cleaner and safer.
