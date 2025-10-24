# 🧱 Section 22: Protected in TypeScript

## 🎯 Overview

In this section, we’ll explore the **`protected`** access modifier — the third and final modifier in TypeScript after `public` and `private`.

Access modifiers in TypeScript control **how and where properties or methods can be accessed**.  
They help keep your classes secure, organized, and predictable.

---

## 🧠 Recap: Access Modifiers

| Modifier      | Accessible Inside Class | Accessible by Child Class | Accessible Outside Class |
| ------------- | ----------------------- | ------------------------- | ------------------------ |
| **public**    | ✅ Yes                  | ✅ Yes                    | ✅ Yes                   |
| **protected** | ✅ Yes                  | ✅ Yes                    | ❌ No                    |
| **private**   | ✅ Yes                  | ❌ No                     | ❌ No                    |

> 🧩 `protected` gives middle-ground access: child classes can use it, but outside code cannot.

---

## 📘 Example 1: Using `protected` in a Parent Class

**_ Example.ts _**

```typescript
class User {
  protected _courseCount = 1; // 👈 Protected property

  constructor(public email: string, public name: string) {}

  public get courseCount(): number {
    return this._courseCount;
  }
}
```

**_ /Example.ts _**

> 💡 `protected` is like `private`, except that **child classes** can access it.

---

## ⚙️ Example 2: Accessing `protected` in a Child Class

Here we create a **`SubUser`** class that inherits from `User` using `extends`.

**_ Example.ts _**

```typescript
class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount(): void {
    // ✅ Allowed because _courseCount is protected
    this._courseCount = 4;
  }
}

const user1 = new SubUser("hitesh@abc.com", "Hitesh");
user1.changeCourseCount();

// ❌ Not allowed: _courseCount is protected
// console.log(user1._courseCount); // Error

console.log(user1.courseCount); // ✅ Works via getter
```

**_ /Example.ts _**

> 🧩 Even though `_courseCount` is **not directly accessible outside**,
> the **child class** can still modify it internally.

---

## ⚠️ Example 3: Difference Between `private` and `protected`

**_ Example.ts _**

```typescript
class Parent {
  private privateValue = "Private";
  protected protectedValue = "Protected";

  showValues() {
    console.log(this.privateValue, this.protectedValue);
  }
}

class Child extends Parent {
  accessValues() {
    // ❌ this.privateValue; // Error: Not accessible
    console.log(this.protectedValue); // ✅ Accessible
  }
}

const child = new Child();
child.accessValues();

// ❌ child.protectedValue; // Error: Protected property
```

**_ /Example.ts _**

> 💡 `private` restricts everything to its own class.
> `protected` lets children see the value — but **not outside code**.

---

## 🧱 Real-World Use Case

Use `protected` when:

- You want **child classes** to reuse or modify internal logic.
- You don’t want **external access** from objects.

Example:
A base `Account` class defines shared behavior, and subclasses like `SavingAccount` can access internal protected methods.

**_ Example.ts _**

```typescript
class Account {
  protected balance: number = 1000;

  protected updateBalance(amount: number): void {
    this.balance += amount;
  }
}

class SavingAccount extends Account {
  deposit(amount: number) {
    this.updateBalance(amount);
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new SavingAccount();
acc.deposit(500);
console.log(acc.getBalance()); // ✅ 1500
```

**_ /Example.ts _**

> 🧩 External code can’t directly change `balance`, ensuring controlled updates.

---

## 🎯 Practice Task

Create a class `BankAccount`:

1. It should have a **protected** property `_balance` (default: 1000).
2. Add a method `getBalance()` (public).
3. Create a subclass `PremiumAccount` that:

   - Adds a method `increaseBalance(amount: number)`
   - Can update `_balance` directly using the protected property.

**_ Example.ts _**

```typescript
class BankAccount {
  protected _balance = 1000;

  public getBalance(): number {
    return this._balance;
  }
}

class PremiumAccount extends BankAccount {
  public increaseBalance(amount: number): void {
    this._balance += amount;
  }
}

const premium = new PremiumAccount();
console.log(premium.getBalance()); // 1000
premium.increaseBalance(500);
console.log(premium.getBalance()); // 1500

// ❌ premium._balance; // Error: Protected property
```

**_ /Example.ts _**

---

## 🆕 TypeScript Updates (as of 2025)

### 🔹 1. `#private` Fields Still More Restricted

Modern JavaScript now uses **`#private`** fields that are enforced at runtime.
Unlike `protected`, they **cannot** be accessed even by child classes.

**_ Example.ts _**

```typescript
class Base {
  #secret = 42;
}

class Derived extends Base {
  showSecret() {
    // ❌ this.#secret; // Error: Not accessible
  }
}
```

**_ /Example.ts _**

> 💡 `#private` is stronger than `protected` — it’s hidden even from subclasses.

---

### 🔹 2. `protected` Works with New “Auto Accessors” (TS 5.1+)

Protected can now be used with the new **auto-accessor fields** syntax introduced in TS 5.1.

**_ Example.ts _**

```typescript
class Base {
  protected accessor value: number = 10;
}

class Derived extends Base {
  increase() {
    this.value += 5;
  }

  get currentValue() {
    return this.value;
  }
}

const d = new Derived();
d.increase();
console.log(d.currentValue); // ✅ 15
```

**_ /Example.ts _**

---

## 🧭 Summary

| Modifier      | Access Level           | Used In              | Notes                            |
| ------------- | ---------------------- | -------------------- | -------------------------------- |
| **public**    | Everywhere             | Inside/outside class | Default if nothing is specified  |
| **private**   | Only inside class      | Encapsulation        | Not accessible to child classes  |
| **protected** | Inside + child classes | Inheritance          | Perfect for parent–child sharing |

---

✅ **In short:**
`protected` gives your classes **controlled inheritance access** —
child classes can reuse internal logic safely, while keeping those details hidden from outside the class.

**Next Up →** Inheritance and Overriding Methods.
