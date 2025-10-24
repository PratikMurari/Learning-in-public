# 🧱 Section 21: Getters and Setters in TypeScript

## 🎯 Overview

In this section, we’ll learn about **getters** and **setters** in TypeScript — special methods that let you **control how class properties are read and updated**.

They behave very similarly to JavaScript, but TypeScript adds **type safety** and some **strict rules**, which are commonly asked about in interviews.

---

## 🧠 What Are Getters and Setters?

- **Getter (`get`)** → Used to **retrieve** a property’s value.
- **Setter (`set`)** → Used to **update** a property’s value, often with validation logic.

They help with **encapsulation**, allowing controlled access to private data.

---

## 📘 Example 1: Basic Getter

**_ Example.ts _**

```typescript
class User {
  constructor(public email: string, public name: string) {}

  // Getter that modifies how email is returned
  get appleEmail(): string {
    return `apple-${this.email}`;
  }
}

const user = new User("john@example.com", "John");

console.log(user.appleEmail); // ✅ apple-john@example.com
```

**_ /Example.ts _**

> 🧩 Notice: You access the getter **like a property**, not a method.
> You don’t call it with parentheses — just `user.appleEmail`, not `user.appleEmail()`.

---

## ⚙️ Example 2: Private Property with Getter & Setter

Let’s say we have a **private** property `_courseCount`, and we want to access and update it **safely** using getter and setter.

**_ Example.ts _**

```typescript
class User {
  private _courseCount = 1;

  // Getter for reading the value
  get courseCount(): number {
    return this._courseCount;
  }

  // Setter for updating the value (no return type allowed)
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const user = new User();
console.log(user.courseCount); // ✅ 1

user.courseCount = 3; // ✅ updates successfully
console.log(user.courseCount); // ✅ 3

// user.courseCount = 0; // ❌ Throws error: Course count should be more than 1
```

**_ /Example.ts _**

---

## ⚠️ Important: No Return Type for `set`

If you try to define a return type (like `void` or `number`) in a setter, TypeScript will throw an error.

**_ Example.ts _**

```typescript
class Example {
  private _data = "";

  // ❌ Wrong: Setters cannot have return type annotations
  // set data(value: string): void { // ❌ Error
  //   this._data = value;
  // }

  // ✅ Correct
  set data(value: string) {
    this._data = value;
  }
}
```

**_ /Example.ts _**

> 💡 **Interview Tip:**
> “A setter in TypeScript cannot have a return type annotation.”
> This is a common interview question.

---

## 🧱 Example 3: Combining Getter and Setter with Private Logic

Let’s combine both with a simple rule — only allow increasing the course count.

**_ Example.ts _**

```typescript
class Student {
  private _courseCount = 1;

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(count: number) {
    if (count <= this._courseCount) {
      throw new Error("New course count must be greater than current count");
    }
    this._courseCount = count;
  }
}

const student = new Student();
console.log(student.courseCount); // 1
student.courseCount = 2; // ✅ OK
// student.courseCount = 1;       // ❌ Error
```

**_ /Example.ts _**

> 🧩 You can perform validations or add business rules easily with getters and setters.

---

## 🔒 Example 4: Private Methods with Getters and Setters

Private methods work just like private variables — they can only be accessed **inside the class**.

**_ Example.ts _**

```typescript
class User {
  private _token = "xyz123";

  private deleteToken(): void {
    console.log("Token deleted!");
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
    this.deleteToken(); // ✅ Can call private method inside class
  }
}

const user = new User();
console.log(user.token); // xyz123
user.token = "abc456"; // Triggers deleteToken()
// user.deleteToken();   // ❌ Error: Method is private
```

**_ /Example.ts _**

> ✅ You can use private helper methods to enforce logic within your setters or getters.

---

## 🧩 Use Cases

| Use Case                 | Example                                               |
| ------------------------ | ----------------------------------------------------- |
| Read-only computed value | `get fullName()` returning `${firstName} ${lastName}` |
| Validated updates        | Setter rejecting invalid data                         |
| Data transformation      | Getter that modifies format before returning          |
| Encapsulation            | Hide private properties from direct access            |

---

## 🎯 Practice Task

Create a `Course` class that:

1. Has a private `_rating` property (number, default 3)
2. Has a getter for `rating`
3. Has a setter that:

   - Throws an error if `rating` < 1 or > 5
   - Updates `_rating` otherwise

**_ Example.ts _**

```typescript
class Course {
  private _rating = 3;

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    if (value < 1 || value > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    this._rating = value;
  }
}

const course = new Course();
console.log(course.rating); // 3

course.rating = 5; // ✅ OK
console.log(course.rating); // 5

// course.rating = 6; // ❌ Error: Rating must be between 1 and 5
```

**_ /Example.ts _**

---

## 🆕 TypeScript Updates (as of 2025)

### 🔹 1. ECMAScript `#private` Fields + Getters/Setters

TypeScript now supports **private fields (`#property`)** natively in getters and setters.

**_ Example.ts _**

```typescript
class Account {
  #balance = 1000;

  get balance() {
    return this.#balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Invalid balance");
    this.#balance = amount;
  }
}

const acc = new Account();
console.log(acc.balance); // 1000
acc.balance = 1500; // ✅ OK
// acc.#balance = 10; // ❌ JS SyntaxError
```

**_ /Example.ts _**

> ✅ Works natively in modern browsers and Node.js with `"target": "ES2022"` or higher.

---

### 🔹 2. Auto-Accessor Fields (New in TS 5.1+)

TypeScript now supports **auto-accessors**, which are a shorthand for getters/setters.

**_ Example.ts _**

```typescript
class Product {
  accessor price: number = 100; // acts like getter/setter pair
}

const p = new Product();
p.price = 120;
console.log(p.price); // ✅ 120
```

**_ /Example.ts _**

> 🧠 You can customize these with decorators and validation logic soon.

---

## 🧭 Summary

| Keyword    | Purpose                         | Notes                          |
| ---------- | ------------------------------- | ------------------------------ |
| `get`      | Retrieve a property value       | Acts like a property (no `()`) |
| `set`      | Update a property value         | No return type allowed         |
| `private`  | Restrict access to inside class | Enforces encapsulation         |
| `#private` | JavaScript runtime private      | Supported since TS 4.3+        |
| `accessor` | Auto getter/setter (TS 5.1+)    | New and modern shorthand       |

---

✅ **In short:**
Getters and setters in TypeScript make your classes **cleaner, safer, and more controlled**, while giving you full flexibility to manage how data is exposed or changed.

**Next Up →** Inheritance and `protected` keyword.