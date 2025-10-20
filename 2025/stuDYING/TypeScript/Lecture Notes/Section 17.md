# 🧩 Section 17: Interface vs Type in TypeScript

In this section, we’ll understand the **differences between `interface` and `type`**, and also explore some of the **unique features** of interfaces — like **extension**, **reopening**, and **inheritance**.
We’ll also see when to use which and how both can coexist in real-world TypeScript projects.

---

## 🧠 What You’ll Learn

- The difference between `interface` and `type`
- Interface reopening (adding more fields later)
- Interface extension (inheritance)
- Extending vs Intersection (`extends` vs `&`)
- Official TypeScript docs’ viewpoint

---

## ⚙️ The Similarity Between Interface and Type

At first glance, `type` and `interface` look _very similar_.
Both can define the **shape of an object**, specify **properties**, and describe **methods**.

For example:

**_ Example.ts _**

```ts
// Using interface
interface User {
  email: string;
  userId: number;
}

// Using type
type UserType = {
  email: string;
  userId: number;
};
```

**_ /Example.ts _**

✅ Both of these are **valid** and **work identically** for defining object structure.

---

## 🧩 The Power of Interface — “Reopening” or “Merging”

One unique feature of **interfaces** is that they are **open** —
meaning you can **add more properties** to an existing interface later in your code.

This is called **interface merging** (or informally, “reopening”).

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
}

// Later in another file or the same file
interface User {
  githubToken: string;
}
```

**_ /Example.ts _**

✅ TypeScript **merges** both declarations!
Now, the `User` interface contains all three fields.

**_ Example.ts _**

```ts
const dev: User = {
  email: "dev@mail.com",
  userId: 123,
  githubToken: "gh_abc123",
};
```

**_ /Example.ts _**

✅ Works perfectly.

💬 You **can’t** do this with `type`.
If you try redefining a type, TypeScript will throw an error:
**_ Example.ts _**

```ts
type UserType = {
  email: string;
};

// ❌ Error: Duplicate identifier 'UserType'
type UserType = {
  githubToken: string;
};
```

**_ /Example.ts _**

---

## 🧱 Extending Interfaces (Inheritance)

Interfaces can **extend** other interfaces using the `extends` keyword.
This is similar to class inheritance — the new interface inherits all properties of the base interface.

**_ Example.ts _**

```ts
interface User {
  email: string;
  userId: number;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
```

**_ /Example.ts _**

✅ Now `Admin` has all properties of `User`, plus the new one (`role`).

**_ Example.ts _**

```ts
const admin: Admin = {
  email: "admin@mail.com",
  userId: 1,
  role: "admin",
};
```

**_ /Example.ts _**

💬 This feature makes interfaces great for creating **hierarchies** or **shared models**.

---

## ⚙️ Extending Types (Using `&`)

While interfaces use `extends`,
**types** use **intersection (`&`)** to achieve a similar result.

**_ Example.ts _**

```ts
type UserType = {
  email: string;
  userId: number;
};

type AdminType = UserType & {
  role: "admin" | "ta" | "learner";
};

const admin: AdminType = {
  email: "admin@xyz.com",
  userId: 100,
  role: "admin",
};
```

**_ /Example.ts _**

✅ Works the same way conceptually — but **types cannot be reopened** later.

---

## 🧩 Interface Reopening — A Closer Look

Reopening or merging interfaces is very helpful when working with **third-party libraries**.

Example scenario:
You use a library that exports an `interface User` but it doesn’t include your `githubToken`.
You can **add it without touching** the library’s source code.

**_ Example.ts _**

```ts
// From the library
interface User {
  email: string;
  userId: number;
}

// Your custom extension
interface User {
  githubToken: string;
}

const devUser: User = {
  email: "dev@mail.com",
  userId: 1001,
  githubToken: "gh_token_987",
};
```

**_ /Example.ts _**

✅ This is a real-world pattern known as **interface augmentation**.
TypeScript merges both automatically.

⚠️ Be careful:
If your custom interface name matches one from a third-party library,
you could **unintentionally modify** that library’s behavior!

---

## ⚖️ Official Docs on Interface vs Type

TypeScript’s documentation explains the difference clearly:

| Feature                   | `interface`          | `type`                     |
| ------------------------- | -------------------- | -------------------------- |
| **Object shape**          | ✅ Yes               | ✅ Yes                     |
| **Extendable**            | ✅ `extends` keyword | ✅ `&` intersection        |
| **Merging (Reopening)**   | ✅ Yes               | ❌ No                      |
| **Classes can implement** | ✅ Yes               | ✅ Yes                     |
| **Preferred for**         | Object structures    | Unions, primitives, tuples |
| **Reopen/augment**        | ✅ Yes               | ❌ No                      |

💡 So, if you need something **open** and **extendable**, use **interface**.
If you need something **exact and closed**, use **type**.

---

## 🧠 Example: Combining Both

You can also combine `type` and `interface` — they work well together.

**_ Example.ts _**

```ts
type ID = number | string;

interface User {
  id: ID;
  email: string;
}

const user: User = {
  id: 123,
  email: "mix@demo.com",
};
```

**_ /Example.ts _**

✅ `type` handles unions well.
✅ `interface` handles structure and extension well.

---

## 🧩 Practice Task 1 — Interface Merging

1. Create an interface `Student` with:

   - `name: string`
   - `rollNo: number`

2. Later, add a new property `college: string` by **reopening** the interface.

3. Create an object implementing all three properties.

**_ Example.ts _**

```ts
interface Student {
  name: string;
  rollNo: number;
}

// Later in the code
interface Student {
  college: string;
}

const stu: Student = {
  name: "Rahul",
  rollNo: 42,
  college: "IIT Delhi",
};
```

**_ /Example.ts _**

✅ Works fine — this is interface reopening.

---

## 🧩 Practice Task 2 — Interface vs Type Extension

1. Create a `type Employee` with:

   - `name: string`
   - `id: number`

2. Create a `type Manager` that **extends** `Employee` using intersection (`&`)
   and adds `department: string`.

3. Do the same using **interface** and `extends`.

**_ Example.ts _**

```ts
// Using type
type Employee = {
  name: string;
  id: number;
};

type Manager = Employee & {
  department: string;
};

// Using interface
interface EmployeeInterface {
  name: string;
  id: number;
}

interface ManagerInterface extends EmployeeInterface {
  department: string;
}

const m1: Manager = { name: "Aman", id: 12, department: "Sales" };
const m2: ManagerInterface = { name: "Riya", id: 13, department: "HR" };
```

**_ /Example.ts _**

✅ Both work the same, but `interface` supports **reopening**, `type` doesn’t.

---

## 🧠 Summary

| Concept                       | `interface`    | `type`                         |
| ----------------------------- | -------------- | ------------------------------ |
| **Reopen / Merge**            | ✅ Yes         | ❌ No                          |
| **Extend another**            | ✅ (`extends`) | ✅ (`&`)                       |
| **Class implementation**      | ✅ Yes         | ✅ Yes                         |
| **Union / Primitive support** | ❌ No          | ✅ Yes                         |
| **Best used for**             | Object shapes  | Complex unions or combinations |

---

## 🚀 Key Takeaway

- Use **interface** when you want to **extend**, **merge**, or **reuse** object shapes.
- Use **type** when defining **complex types**, **unions**, or **literal combinations**.
- In large-scale applications, mixing both smartly gives you flexibility and maintainability.

---

✨ **Pro Tip:**
If you’re working with external libraries and want to add missing fields —
👉 **Use Interface Reopening.**
If you’re designing internal data models that don’t need changes —
👉 **Use Type Aliases.**
