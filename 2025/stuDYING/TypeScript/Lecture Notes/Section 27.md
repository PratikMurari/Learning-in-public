## 🧩 Section 27: Generics in Classes — Easy Notes

### 🌱 What’s this section about?

This part continues our talk about **Generics** — a key concept that makes TypeScript powerful, reusable, and safe.

If you skipped the last two sections on generics in **functions** and **arrays**, go back!
This one builds on those — otherwise, it’ll feel like you jumped into the middle of a math problem.

---

### 💡 Quick Reminder: What are Generics?

Think of *generics* as **“type placeholders.”**

When you don’t know exactly what data type something will be — maybe a number, maybe a string, or even a complex object — you use generics to tell TypeScript:

> “Hey, I’ll decide the type later when I use this function or class, but keep it consistent!”

For example:

```ts
function echo<T>(value: T): T {
  return value;
}
```

When you call `echo(42)` → TypeScript automatically knows `T` is a `number`.
When you call `echo("hello")` → `T` becomes a `string`.

It’s like a **template** that adapts automatically — and that’s why generics are so powerful.

---

### 🧱 Step 1: Generics Can Have Multiple Type Placeholders

Sometimes you need more than one type.

Example:

```ts
function pair<T, U>(first: T, second: U) {
  return { first, second };
}

pair(3, "three");  // T = number, U = string
```

So here, we’re not locking into one type — `T` can be a number, `U` can be a string.
This is super flexible.

🧠 **Think of it like this:**
T = Type 1
U = Type 2
V = Type 3
You can add as many as you want.

---

### 🧩 Step 2: Using `extends` — Putting Boundaries on Generics

Sometimes, flexibility can cause problems.
You don’t always want *any* type — you want to restrict it a bit.

That’s where `extends` comes in.

```ts
function logId<T extends number>(id: T) {
  console.log(id);
}

logId(5);     // ✅ Works
logId("abc"); // ❌ Error: must be a number
```

So here, we’re saying:

> “T can be any type, but it must behave like a number.”

This is called a **type constraint** — it’s how you tell TypeScript what’s allowed.

---

### 🧠 Another Way to Understand This

Think of `extends` like “putting a border around the playground.”
Kids (types) can play however they want, but only **inside** that boundary.

For example:

```ts
interface Dog {
  name: string;
}

function printName<T extends Dog>(animal: T) {
  console.log(animal.name);
}
```

Now, anything passed here **must** have a `name` property.
That’s the playground boundary.
So, `printName({ name: "Buddy" })` works fine, but
`printName({ breed: "Husky" })` doesn’t.

---

### 🧠 Real-World Use Case — Working with a Database Example

Imagine you’re writing a function that connects to a database.
You want to accept any kind of database (MongoDB, MySQL, etc.), but you still want to make sure they all have certain required properties.

```ts
interface Database {
  connection: string;
  username: string;
  password: string;
}

function connect<T extends Database>(db: T) {
  console.log(`Connecting to ${db.connection} as ${db.username}`);
}
```

✅ Works if you pass:

```ts
connect({ connection: "mongo://localhost", username: "admin", password: "1234" });
```

❌ Fails if you forget any field:

```ts
connect({ connection: "mysql://", username: "root" }); // Missing password
```

So you get both flexibility *and* safety.

---

### 🧰 Step 3: Generics in Classes

Now, let’s move from functions to **classes**.

The idea is the same — you use generics when you want a class that can work with **any data type**, but stay consistent with the one you pick.

#### Example:

Let’s say you’re building an app that sells **courses** and **quizzes**.

```ts
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}
```

We can make a generic class that works for both:

```ts
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
```

Now we can use the same class for different data types:

```ts
const quizCart = new Sellable<Quiz>();
quizCart.addToCart({ name: "TypeScript Quiz", type: "coding" });

const courseCart = new Sellable<Course>();
courseCart.addToCart({ name: "React Mastery", author: "Hitesh", subject: "Web Dev" });
```

💡 The cool part:

* You don’t need two separate classes for “quiz” and “course.”
* TypeScript enforces that whatever type you pass (Quiz or Course) stays consistent throughout.

---

### 🔄 Another Way to Understand Generic Classes

Think of a **generic class** as a “container factory.”

* You tell it *what kind of thing* to hold (like `Course` or `Quiz`).
* It gives you a perfectly shaped container that only fits those things.
* If you try to push in something that doesn’t fit, TypeScript says “nope!”

This pattern makes your code:
✅ **Reusable** — one class can handle many data types.
✅ **Type-safe** — you can’t mix wrong types accidentally.
✅ **Future-proof** — you can add new “sellable” items later easily.

---

### ⚙️ In Modern TypeScript (2025 updates)

Here’s what’s changed or improved since this course was recorded (~2022):

1. **Type Inference Got Better:**
   TypeScript can now infer generic types even more accurately — so in many cases, you don’t even need to write `<T>` explicitly.

   Example:

   ```ts
   function identity<T>(value: T) { return value; }
   const result = identity("Hello"); // Infers T = string automatically
   ```

2. **Satisfies Operator (since TS 4.9):**
   You can now use `satisfies` to check structure without locking type.

   ```ts
   const db = {
     connection: "local",
     username: "root",
     password: "1234"
   } satisfies Database;
   ```

   This helps TypeScript confirm shape correctness while keeping type flexibility.

3. **`extends` + `infer` + Conditional Types (advanced):**
   TypeScript now supports deeper patterns in generics like:

   ```ts
   type UnwrapArray<T> = T extends (infer U)[] ? U : T;
   ```

   This lets you extract inner types dynamically.
   (You’ll see this later in frameworks like React, Next.js, Prisma, etc.)

---

### 🧠 Big Picture — How to Think About Generics

If this feels abstract right now, that’s okay.
Here are 3 mental models to remember generics easily:

1. **Generics = “Fill-in-the-blanks” for data types**
   Like Mad Libs for programming.

2. **`extends` = “put a boundary”**
   Like a fence in a playground.

3. **Generic Class = “reusable container”**
   You decide what kind of things it holds.

---

### 🏁 Summary — TL;DR

* **Generics** let functions and classes handle multiple data types while staying type-safe.
* You can use **multiple generics** (like `<T, U, V>`).
* Use **`extends`** to limit what kinds of data are allowed.
* **Generic classes** are perfect for reusable code structures — e.g., carts, lists, stores, etc.
* **Modern TypeScript** adds even more power with inference and conditional types.
