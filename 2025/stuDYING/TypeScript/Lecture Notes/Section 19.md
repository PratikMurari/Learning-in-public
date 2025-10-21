# 🧱 Section 19: Classes in TypeScript

## 🎯 Overview

In this section, we explore how **classes** work in TypeScript — one of its most powerful features.  
If you know JavaScript classes, this will feel familiar, but TypeScript adds **strong typing**, **read-only properties**, and **compiler checks** to prevent mistakes.

---

## 💡 Key Takeaways

### ✅ Classes in TypeScript are similar to JavaScript classes — but safer
TypeScript builds upon JavaScript’s class system by adding **types**, **access control**, and **compile-time checks**.

> 💬 Think of it like this:  
> JavaScript = freedom (you can do anything).  
> TypeScript = responsibility (you must define what can be done).

---

## 🧠 Creating a Basic Class

*** Example.ts ***
```typescript
class User {
  email: string;
  name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "Hitesh");
console.log(hitesh);
```
*** /Example.ts ***

### 🧩 Explanation:

* `class User` → defines a blueprint for creating user objects.
* `constructor()` → special method that runs automatically when you create a new instance.
* `this.email` and `this.name` → assign passed values to the object’s properties.
* `email: string` and `name: string` → explicitly define data types.

---

## ⚠️ Why We Need to Declare Properties First

In TypeScript, you **must declare all properties** before using them in the constructor.
If you don’t, TypeScript will throw an error saying the property doesn’t exist.

> 💬 Fix it by declaring the type first (like `email: string;`).

---

## 🧱 Adding Optional or Default Properties

If a property may not always be provided, use `?` or give it a default value.

*** Example.ts ***

```typescript
class User {
  email: string;
  name: string;
  city?: string; // Optional property

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "Hitesh");
hitesh.city = "Jaipur";
console.log(hitesh);
```

*** /Example.ts ***

> 📝 `?` makes a property optional, meaning you don’t have to provide it when creating the object.

---

## 🚫 Preventing Unwanted Modifications

TypeScript allows you to make a property **read-only**, which means it can’t be changed after initialization.

*** Example.ts ***

```typescript
class User {
  readonly city: string = "Jaipur";
  email: string;
  name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const hitesh = new User("h@h.com", "Hitesh");
console.log(hitesh.city); // Jaipur

// ❌ Error: Cannot assign to 'city' because it is a read-only property
// hitesh.city = "Delhi";
```

*** /Example.ts ***

> 🧠 The `readonly` modifier ensures immutability — once set, the property can’t change.

---

## 🧩 How TypeScript Protects You

In plain JavaScript:

* You can change properties freely (even accidentally).
* There’s no type enforcement.

In TypeScript:

* If you try to assign a number to a string, it won’t compile.
* If you try to modify a `readonly` property, you’ll get a compile-time error.
* You can configure `tsconfig.json` to **stop producing JS output** if there are errors.

This ensures your project doesn’t accidentally ship with broken logic.

---

## 🧰 Complete Example

*** Example.ts ***

```typescript
class User {
  readonly city: string = "Delhi";
  email: string;
  name: string;
  country?: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const u1 = new User("alex@example.com", "Alex");
u1.country = "India";

console.log(u1);
```

*** /Example.ts ***

Output:

```
User { city: 'Delhi', email: 'alex@example.com', name: 'Alex', country: 'India' }
```

---

## ⚙️ Modern TypeScript Shortcut (2025 Update)

You can **define and initialize properties directly in the constructor** — much cleaner!

*** Example.ts ***

```typescript
class User {
  constructor(
    public email: string,
    public name: string,
    public readonly city: string = "Delhi"
  ) {}
}

const u1 = new User("alex@example.com", "Alex");
console.log(u1);
```

*** /Example.ts ***

### 🧠 What Happens Here:

* `public` automatically creates and assigns class properties.
* You don’t need to manually write `this.email = email`.
* `readonly` still works exactly the same.

---

## 🚀 Practice Task

1. Create a class `Car` with:

   * `brand` (string)
   * `model` (string)
   * `year` (number)
   * `readonly registrationId` (string)
2. Add a constructor that initializes all properties.
3. Create a few car objects and try modifying `registrationId` to observe the TypeScript error.
4. Use the modern shortcut syntax (`public`, `readonly`) in another version of the class.

*** Example.ts ***

```typescript
class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
    public readonly registrationId: string
  ) {}
}

const myCar = new Car("Tesla", "Model 3", 2024, "REG123");
console.log(myCar);

// ❌ Error
// myCar.registrationId = "NEW123";
```

*** /Example.ts ***

---

## 🆕 TypeScript Updates (as of 2025)

### 🌟 Class Enhancements

* **Decorators** are now officially supported in TypeScript 5.0+.
* You can use `@readonly`, `@inject`, or framework decorators like `@Component` (Angular).
* TypeScript supports **ECMAScript private fields** (`#privateField`), making true privacy possible.

*** Example.ts ***

```typescript
class Account {
  #balance = 1000; // Private field
  deposit(amount: number) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(500);
console.log(acc.getBalance()); // 1500
```

*** /Example.ts ***

---

## 🧭 Summary

| Concept              | Description                       |
| -------------------- | --------------------------------- |
| `class`              | Blueprint for creating objects    |
| `constructor`        | Initializes new instances         |
| `public` / `private` | Controls visibility               |
| `readonly`           | Prevents modification             |
| `?`                  | Marks optional properties         |
| `#field`             | Private field syntax (modern JS)  |
| `extends`            | Used for inheritance (next topic) |

---

✅ **In short:**
Classes in TypeScript bring **OOP structure + type safety**, ensuring your code is organized, predictable, and error-free before runtime.

