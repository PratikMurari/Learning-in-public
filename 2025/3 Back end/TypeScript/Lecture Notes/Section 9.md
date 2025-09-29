Section 9: Bad Behaviour of Objects

## 📝 Notes

* Adding TypeScript doesn’t **magically remove all JavaScript quirks**. Some “bad behaviors” still remain.
* Objects are everywhere in JS/TS — storing data, passing to functions, or returning from them.
* Defining function parameters with object types makes your code **more predictable and safer**.
* Functions can also **return objects** with strict type definitions.
* ❌ **Odd Behavior**:
  If you directly pass an object literal with extra properties → TypeScript throws an error.
  But if you first assign that object to a variable and then pass it → TypeScript allows extra properties.
  This is known as **Excess Property Checks** only happening on object literals, not variables.
* This is why interfaces and optional properties (coming in next section) are better tools to enforce stricter contracts.

---

## 💻 Examples

### Creating an object

\*\*\* Example.ts \*\*\*

```ts
const user = {
  name: "Hitesh",
  email: "hitesh@example.com",
  isActive: true,
};
```

\*\*\* /Example.ts \*\*\*

---

### Function expecting an object

\*\*\* Example.ts \*\*\*

```ts
function createUser(user: { name: string; isPaid: boolean }) {
  return user;
}

// ❌ Error: missing "isPaid"
createUser({ name: "Hitesh" });

// ✅ Works
createUser({ name: "Hitesh", isPaid: false });
```

\*\*\* /Example.ts \*\*\*

---

### Function returning an object

\*\*\* Example.ts \*\*\*

```ts
function createCourse(): { name: string; price: number } {
  return { name: "ReactJS", price: 399 };
}
```

\*\*\* /Example.ts \*\*\*

---

### The odd behavior (Excess Properties)

\*\*\* Example.ts \*\*\*

```ts
// ❌ Direct object literal → Error: extra property "email"
createUser({ name: "Hitesh", isPaid: true, email: "h@example.com" });

// ✅ Assign to variable first → Allowed
const newUser = { name: "Hitesh", isPaid: true, email: "h@example.com" };
createUser(newUser); // Works fine, even with extra property
```

\*\*\* /Example.ts \*\*\*

---

## 📌 Key Takeaways

* Functions + objects = core pattern in real apps (especially APIs).
* You can define both **parameter objects** and **return objects** with strict typing.
* TypeScript **doesn’t catch all errors** — some JavaScript quirks remain (like excess property check bypass).
* Interfaces (next section) are the **proper way** to handle objects in scalable projects.
* Always be explicit about your return type to keep your codebase predictable.

---

## 🏋️ Practice Task

1. Write a function `registerUser` that takes an object with:

   * `username: string`
   * `password: string`
   * `isAdmin: boolean`
     and returns the object.
2. Try passing an extra property (like `age: 20`) **directly** and see the error.
3. Then, assign the object with the extra property to a variable and pass it again. Notice the difference.
4. (Bonus) Modify the return type so the function also returns a `createdAt: Date`.

---

## 🔄 Latest TS Updates (2023–2024)

* **Satisfies operator (TS 4.9+)**: A safer way to ensure an object meets a type without losing extra property information.
  Example:
  \*\*\* Example.ts \*\*\*

  ```ts
  type User = { name: string; isPaid: boolean };

  const newUser = {
    name: "Hitesh",
    isPaid: true,
    email: "extra@example.com", // extra property
  } satisfies User;
  ```

  \*\*\* /Example.ts \*\*\*

  This way:

  * TypeScript ensures `newUser` matches `User`
  * You **still keep** `email` available in `newUser`
* **Const type parameters (TS 5.0+)**: Helps preserve literal values more precisely in object typing.
* Still, best practice is to **use interfaces** for reusable and extendable object types (covered in next section).
