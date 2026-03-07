# OOP Concepts in TypeScript

> Source: https://youtu.be/B_eCW0umzjA?si=JOqJcnojE9c8GY9T

# 1. What is OOP in TypeScript?

OOP stands for **Object-Oriented Programming**.

TypeScript uses the **same OOP concepts as JavaScript**, but with **extra features and type safety**.

Main OOP concepts we see in TypeScript:

- Classes
- Constructors
- Access Modifiers (public, private, protected)
- Readonly properties
- Getters & Setters
- Static members
- Inheritance
- Abstract classes
- Composition

TypeScript mainly adds **type safety and better syntax**.

---

# 2. Creating a Class

A class is a **blueprint for objects**.

Example:

```ts
class Tea {
  flavor: string;
  price: number;
}
```

Here:

- `flavor` → string
- `price` → number

But TypeScript will warn because we didn't initialize them.

So we usually use a **constructor**.

---

# 3. Constructor

A constructor runs **when an object is created**.

Example:

```ts
class Tea {
  flavor: string;
  price: number;

  constructor(flavor: string, price: number) {
    this.flavor = flavor;
    this.price = price;
  }
}
```

Now creating an object:

```ts
const gingerTea = new Tea("Ginger", 20);
```

Important keyword:

`this`

It refers to **the object that is being created**.

---

# 4. Why Classes Are Useful

Example:

```ts
const tea = new Tea("Masala", 15);
```

If you type:

```
tea.
```

TypeScript will suggest:

```
flavor
price
```

This **predictable behavior** is why classes are useful.

---

# 5. Access Modifiers

TypeScript provides **access control**.

Three main types:

| Modifier  | Access                |
| --------- | --------------------- |
| public    | accessible everywhere |
| private   | only inside class     |
| protected | class + subclasses    |

---

# 6. Public Properties

Example:

```ts
class Tea {
  public flavor: string = "Masala";
}
```

Public means:

```
object.flavor
```

can be accessed anywhere.

---

# 7. Private Properties

Private means:

❌ Cannot access outside the class.

Example:

```ts
class Tea {
  private secretIngredient: string = "Cardamom";

  revealSecret() {
    return this.secretIngredient;
  }
}
```

Usage:

```ts
const t = new Tea()

t.secretIngredient ❌ error
t.revealSecret() ✔ works
```

So we use **methods to control access**.

---

# 8. Protected Properties

Protected works like **staff-only access**.

Accessible by:

- the class
- subclasses (child classes)

Example:

```ts
class Shop {
  protected shopName: string = "Tea Corner";
}
```

Child class:

```ts
class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}
```

Protected = **accessible inside inheritance chain**

---

# 9. Private Using # (JavaScript Style)

TypeScript also supports JavaScript private syntax.

Example:

```ts
class Wallet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}
```

Usage:

```ts
const w = new Wallet()

w.#balance ❌ error
w.getBalance() ✔ works
```

However many developers prefer:

```
private balance
```

because it's clearer.

---

# 10. Readonly Properties

Sometimes a value should be **assigned once only**.

Example:

```ts
class Cup {
  readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
```

Usage:

```ts
const cup = new Cup(250)

cup.capacity = 300 ❌ error
```

Readonly = value cannot change after initialization.

---

# 11. Getters and Setters

Used when we want **controlled access** to private variables.

Example:

```ts
class ModernTea {
  private _sugar = 0;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) {
      throw new Error("Too sweet");
    }

    this._sugar = value;
  }
}
```

Usage:

```ts
const tea = new ModernTea();

tea.sugar = 3;
console.log(tea.sugar);
```

Benefits:

- Validation
- Controlled access
- Encapsulation

---

# 12. Static Members

Static properties belong to the **class itself**, not objects.

Example:

```ts
class Tea {
  static shopName = "ChaiCode Cafe";
}
```

Access like this:

```ts
Tea.shopName;
```

NOT like this:

```
new Tea().shopName ❌
```

Static values are **shared across all objects**.

---

# 13. Abstract Classes

Sometimes we want:

- A base blueprint
- But we **don't want to create objects from it**

That is an **abstract class**.

Example:

```ts
abstract class Drink {
  abstract make(): void;
}
```

You cannot do:

```
new Drink() ❌
```

---

### Child class must implement methods

```ts
class MyTea extends Drink {
  make() {
    console.log("Brewing tea");
  }
}
```

Abstract classes enforce **rules for subclasses**.

---

# 14. Inheritance

Inheritance means:

One class can **extend another class**.

Example:

```ts
class Animal {
  move() {}
}

class Dog extends Animal {
  bark() {}
}
```

Child class inherits parent features.

---

# 15. Composition

Another way to reuse code is **composition**.

Instead of inheriting a class, we **use another class inside it**.

Example:

```ts
class Heater {
  heat() {
    console.log("Heating water");
  }
}
```

Another class:

```ts
class TeaMaker {
  constructor(private heater: Heater) {}

  makeTea() {
    this.heater.heat();
  }
}
```

Here:

- TeaMaker **uses Heater**
- But does not extend it

This is called **composition**.

Many developers prefer:

```
Composition > Inheritance
```

because it is more flexible.

---

# 16. OOP Concepts Summary

| Concept     | Meaning                            |
| ----------- | ---------------------------------- |
| Class       | blueprint of objects               |
| Constructor | runs when object is created        |
| Public      | accessible everywhere              |
| Private     | accessible inside class only       |
| Protected   | class + subclasses                 |
| Readonly    | cannot change after initialization |
| Getter      | read private value                 |
| Setter      | update private value safely        |
| Static      | belongs to class                   |
| Abstract    | blueprint class                    |
| Inheritance | extend another class               |
| Composition | use another class inside           |

---

# 17. Important Note

TypeScript **does not replace JavaScript OOP**.

It simply adds:

- type safety
- better tooling
- cleaner structure

TypeScript is basically:

```
JavaScript + Types
```

---

# 18. Final Takeaway

If you understand:

- Classes
- Access modifiers
- Getters/Setters
- Static
- Abstract
- Inheritance
- Composition

You understand **most OOP patterns in TypeScript**.

The rest is mostly **JavaScript fundamentals**.

---

☕ Keep practicing. OOP becomes natural with real projects.
