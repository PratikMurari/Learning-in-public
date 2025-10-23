# 🔒 Section 20: Public and Private Modifiers in TypeScript

---

## 🎯 Overview

In this section, we explore **access modifiers** — `public`, `private`, and briefly mention `readonly`.  
These modifiers control **how and where class properties or methods can be accessed**.

TypeScript adds strong visibility control on top of JavaScript’s class system, making your code **safer, more predictable, and better structured**.

---

## 🧠 Why Modifiers Matter

By default, all class members (properties and methods) are **public** — meaning you can access them from anywhere.

However, sometimes you want to:

- **Hide sensitive data** (like passwords, user IDs)
- **Prevent direct modification** of certain properties
- **Enforce encapsulation** (a core OOP principle)

That’s where **`private`**, **`public`**, and **`readonly`** come in.

---

## 🧩 Example Without Modifiers

**_ Example.ts _**

````typescript
class User {
  email: string;
  name: string;
  readonly city: string = "Jaipur";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const user = new User("test@email.com", "Hitesh");

console.log(user.city); // ✅ Allowed
// user.city = "Delhi"; // ❌ Error: Cannot assign to read-only property

*** /Example.ts ***

> 💬 Here, everything except `city` is public and can be accessed or modified freely.

---

## 🔐 Introducing `private`

The **`private`** modifier restricts access so that a property or method **can only be used within the same class**.

*** Example.ts ***

```typescript
class User {
  private city: string = "Jaipur";
  public email: string;
  public name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  // ✅ Allowed: Accessing private field inside the class
  printCity() {
    console.log(`User lives in ${this.city}`);
  }
}

const user = new User("test@email.com", "Hitesh");

user.printCity(); // ✅ Works fine
// console.log(user.city); // ❌ Error: Property 'city' is private
````

**_ /Example.ts _**

> 🧠 Private means only **this class** can touch it — not even subclasses or other files.

---

## 🌎 `public` Modifier

Everything that’s not explicitly marked is **public** by default — but you can still declare it for clarity.

**_ Example.ts _**

```typescript
class User {
  public email: string;
  public name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const user = new User("alex@example.com", "Alex");
console.log(user.email); // ✅ Accessible
```

**_ /Example.ts _**

> ✨ Tip: In TypeScript, you’ll often see `public` written for readability, even though it’s not required.

---

## 🧰 Shortcut: Defining Modifiers in the Constructor

Instead of declaring and initializing properties separately, TypeScript lets you **define and assign** them directly in the constructor using access modifiers.

**_ Example.ts _**

```typescript
class User {
  constructor(
    public email: string,
    public name: string,
    private city: string = "Jaipur"
  ) {}

  getCity() {
    return this.city;
  }
}

const user = new User("test@email.com", "Hitesh");
console.log(user.email); // ✅ Accessible
console.log(user.getCity()); // ✅ Accessible through method
// console.log(user.city); // ❌ Error: Property 'city' is private
```

**_ /Example.ts _**

### 🧩 What Happens Here:

- `public` and `private` create and assign properties automatically.
- You don’t need `this.email = email;`.
- Makes code **cleaner** and **shorter** — a favorite among professionals.

---

## ⚙️ Comparison: JavaScript `#private` vs TypeScript `private`

Modern JavaScript supports **private fields** using the `#` prefix.
TypeScript supports both styles — but there are key differences.

**_ Example.ts _**

```typescript
class Account {
  #balance = 1000; // JS private
  private currency = "INR"; // TS private

  deposit(amount: number) {
    this.#balance += amount;
  }

  getDetails() {
    return `${this.#balance} ${this.currency}`;
  }
}

const acc = new Account();
acc.deposit(500);
console.log(acc.getDetails()); // ✅ 1500 INR

// acc.#balance; // ❌ JS SyntaxError
// acc.currency; // ❌ TS Compile Error
```

**_ /Example.ts _**

| Feature             | `#private` (JavaScript) | `private` (TypeScript)   |
| ------------------- | ----------------------- | ------------------------ |
| Scope               | Enforced at runtime     | Enforced at compile time |
| Error Type          | Syntax Error            | Compile-time Error       |
| Works in JS runtime | ✅ Yes                  | ❌ No (TypeScript-only)  |
| Recommended for     | JS projects             | TypeScript projects      |

> 💡 Use `private` for TypeScript projects — it’s clearer and works well with TypeScript tooling.

---

## 🚀 Advanced Use Case: Private with Methods

Private methods are useful for logic you don’t want accessible outside your class.

**_ Example.ts _**

```typescript
class User {
  constructor(private email: string, private password: string) {}

  private encryptPassword(): string {
    return `encrypted-${this.password}`;
  }

  getUserDetails() {
    return {
      email: this.email,
      encryptedPass: this.encryptPassword(),
    };
  }
}

const user = new User("a@example.com", "12345");
console.log(user.getUserDetails());
// user.encryptPassword(); // ❌ Error: Method is private
```

**_ /Example.ts _**

---

## 🎯 Practice Task

1. Create a `BankAccount` class with:

   - `public accountHolder` (string)
   - `private balance` (number)
   - `readonly accountNumber` (string)

2. Add methods:

   - `deposit(amount: number)` — increases balance
   - `withdraw(amount: number)` — decreases balance safely
   - `getBalance()` — returns current balance

3. Try accessing `balance` outside the class (should show an error).

**_ Example.ts _**

```typescript
class BankAccount {
  constructor(
    public accountHolder: string,
    private balance: number,
    public readonly accountNumber: string
  ) {}

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("John", 5000, "AC12345");
acc.deposit(1500);
acc.withdraw(3000);
console.log(acc.getBalance()); // ✅ 3500
// console.log(acc.balance); // ❌ Error: 'balance' is private
```

**_ /Example.ts _**

---

## 🆕 TypeScript Updates (as of 2025)

### 🔹 1. Private Fields Compatibility

TypeScript now fully supports **ECMAScript `#private` fields** and maps them correctly when compiling to modern targets like `ES2022+`.

### 🔹 2. `protected` Keyword (Preview)

Introduced for inheritance — acts like `private`, but allows access in **derived classes**. (Covered in next section.)

### 🔹 3. Decorators Support

With stable decorators in TS 5.0+, you can mark members as private or readonly using decorators.

**_ Example.ts _**

```typescript
function Log(target: any, key: string) {
  console.log(`Accessed: ${key}`);
}

class Example {
  @Log
  private secret = "Hidden Data";

  getSecret() {
    return this.secret;
  }
}
```

**_ /Example.ts _**

---

## 🧭 Summary

| Modifier   | Access Scope           | Description                           |
| ---------- | ---------------------- | ------------------------------------- |
| `public`   | Everywhere             | Default visibility                    |
| `private`  | Inside class only      | Prevents external access              |
| `readonly` | Everywhere (read-only) | Can’t be reassigned                   |
| `#private` | JS private field       | Works at runtime, not TS compile time |

---

✅ **In short:**
TypeScript modifiers let you control **who can see or modify** your data — making your code more robust, secure, and easier to maintain.

**Next Up →** The `protected` modifier and class inheritance.

```

```
