# 🧩 Section 16: Interfaces in TypeScript

Interfaces are one of the most powerful and widely used features in **TypeScript**.
They help you define the **structure of an object** — what properties and methods it should have — **without describing how** they are implemented.

---

## 🧠 What You’ll Learn

- What an interface is
- How to define and use interfaces
- Optional and read-only properties
- Function definitions inside interfaces
- The difference between `interface` and `type` (briefly)
- Real-world examples

---

## ⚙️ What Is an Interface?

An **interface** acts like a **contract** for your object.
It defines **what** properties or methods the object should have,
but not **how** they are implemented.

It’s similar to a **blueprint** — the plan of what your object should look like.

---

## 🧩 Defining a Simple Interface

Let’s start by defining a user interface.

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
}
```

**_ /Example.ts _**

✅ This means:
Any object of type `User` **must have** an `email` (string) and a `userId` (number).

---

## 🧑‍💻 Using the Interface

**_ Example.ts _**

```ts
const hitesh: User = {
  email: "h@h.com",
  userId: 2211,
};
```

**_ /Example.ts _**

✅ Works perfectly fine.
❌ If you forget a property, TypeScript will throw an error.

---

## ⚙️ Optional Properties

Sometimes, some properties aren’t always present.
You can mark them as **optional** using `?`.

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
  googleId?: string;
}
```

**_ /Example.ts _**

✅ You can now create a user **with or without** a Google ID.

**_ Example.ts _**

```ts
const user1: User = { email: "a@a.com", userId: 1234 };
const user2: User = { email: "b@b.com", userId: 5678, googleId: "abc-xyz" };
```

**_ /Example.ts _**

---

## 🔒 Read-Only Properties

Sometimes you want a property that **can’t be modified** after creation.
You can use the `readonly` keyword.

**_ Example.ts _**

```ts
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
}
```

**_ /Example.ts _**

Now:
**_ Example.ts _**

```ts
const user: User = {
  dbId: 101,
  email: "test@mail.com",
  userId: 999,
};

user.email = "new@mail.com"; // ✅ allowed
user.dbId = 202; // ❌ Error: cannot assign to 'dbId' because it is a read-only property
```

**_ /Example.ts _**

✅ This ensures that critical fields like `dbId` or `ID` never change after initialization.

---

## ⚙️ Adding Methods to an Interface

Interfaces can also define **methods** (functions).
These methods describe what functions an object should have and what they return.

---

### 🧩 Method Syntax – Version 1 (Property Function)

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
  startTrial: () => string; // method returning a string
}
```

**_ /Example.ts _**

Implementing it:
**_ Example.ts _**

```ts
const user: User = {
  email: "h@h.com",
  userId: 101,
  startTrial: () => {
    return "Trial started!";
  },
};
```

**_ /Example.ts _**

✅ Works fine — the method must return a string.

---

### 🧩 Method Syntax – Version 2 (Preferred Style)

A cleaner way is to define methods with parentheses directly.

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
  startTrial(): string; // simpler, more readable
}
```

**_ /Example.ts _**

Then implement it:
**_ Example.ts _**

```ts
const user: User = {
  email: "h@h.com",
  userId: 101,
  startTrial() {
    return "Trial started!";
  },
};
```

**_ /Example.ts _**

💡 Both versions are valid, but **the second style is preferred** — it’s more natural and closer to how classes define methods.

---

## 🎟️ Adding Methods with Parameters

Let’s add a function that gives the user a **discount coupon**.

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
  startTrial(): string;
  getCoupon(couponName: string): number;
}
```

**_ /Example.ts _**

Now we implement it:

**_ Example.ts _**

```ts
const user: User = {
  email: "hc@hc.com",
  userId: 555,
  startTrial: () => "Trial activated!",
  getCoupon(name: string) {
    console.log(`Applying coupon: ${name}`);
    return 10; // 10% discount
  },
};

console.log(user.getCoupon("WELCOME10"));
```

**_ /Example.ts _**

✅ The function expects a **string** argument and returns a **number**.
❌ If you pass a non-string or return something else, TypeScript warns you.

---

## 🧱 Real-World Analogy

Think of an **interface** like the **interface of your operating system**:
When you double-click a file, it opens — but you don’t know what goes on behind the scenes.

Similarly, in TypeScript:

- The interface defines **what** methods or properties exist.
- The implementation defines **how** they actually work.

---

## 🧩 Interfaces Can Extend Other Interfaces

You can **extend** one interface from another to build on top of it.

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
  startTrial(): string;
}

interface Admin extends User {
  role: "admin" | "superadmin";
}

const admin: Admin = {
  email: "admin@mail.com",
  userId: 1,
  role: "admin",
  startTrial: () => "Admin trial started!",
};
```

**_ /Example.ts _**

✅ `Admin` gets all properties of `User` + its own new property `role`.

---

## ⚡ Interface vs Type (Quick Overview)

| Feature                | `interface`        | `type`       |
| ---------------------- | ------------------ | ------------ |
| Object shape           | ✅ Yes             | ✅ Yes       |
| Can extend another     | ✅ Yes (`extends`) | ✅ Yes (`&`) |
| Can merge declarations | ✅ Yes             | ❌ No        |
| Functions & arrays     | ✅ Yes             | ✅ Yes       |
| Runtime presence       | ❌ No              | ❌ No        |

💬 You’ll learn detailed differences in the next section — but for now:
➡️ **Use `interface`** when describing object structures
➡️ **Use `type`** when describing unions or combinations

---

## 🧩 Practice Task 1 — Simple User

Create an interface `User` that has:

- `email` (string)
- `userId` (number)
- `readonly dbId` (number)
- `getDiscount(code: string): number`

Then, create an object `student` that implements this interface.

**_ Example.ts _**

```ts
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  getDiscount(code: string): number;
}

const student: User = {
  dbId: 11,
  email: "student@mail.com",
  userId: 1001,
  getDiscount(code: string) {
    return code === "FRESH10" ? 10 : 0;
  },
};

console.log(student.getDiscount("FRESH10"));
```

**_ /Example.ts _**

---

## 🧩 Practice Task 2 — Interface Extension

Create a base interface `Employee`, then extend it to `Manager`.

**_ Example.ts _**

```ts
interface Employee {
  name: string;
  startDate: Date;
}

interface Manager extends Employee {
  department: string;
}

const manager: Manager = {
  name: "Alice",
  startDate: new Date(),
  department: "Engineering",
};
```

**_ /Example.ts _**

---

## 🧠 Summary

| Concept                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| **Interface**            | Defines the structure of an object (blueprint) |
| **Optional property**    | Add `?` after a property name                  |
| **Readonly property**    | Use `readonly` to prevent changes              |
| **Method**               | Can be defined with or without arrow syntax    |
| **Extends**              | Reuse another interface’s properties           |
| **Difference from Type** | Interfaces can merge and extend easily         |

---

## 🚀 Key Takeaway

Interfaces are like **contracts** — they define _what must exist_ in an object,
but not _how_ it’s implemented.

They’re essential for:

- Writing **scalable**, **readable** TypeScript code
- Building **large applications** with consistent object structures
- Enforcing **strict typing** while keeping flexibility

---

✨ **Pro Tip:**
Use **interfaces** for defining shapes of objects and **types** for unions, intersections, and more advanced combinations.