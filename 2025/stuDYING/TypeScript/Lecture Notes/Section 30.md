# 🧭 Section 30: `instanceof` and Type Predicates: Simplified Notes

https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing

### 🚀 What This Topic Is About

This section talks about two more **type narrowing techniques**:

1. `instanceof` — checks if a value is created (instantiated) from a specific **class**.
2. **Type predicates** — a special TypeScript feature that lets us **create custom logic** to tell TypeScript _what type_ a value really is.

Both of these help TypeScript understand our code more precisely — so it can give better IntelliSense, avoid runtime errors, and make our code safer.

---

## 🧩 1. `instanceof` Narrowing

### 💡 What It Means

`instanceof` checks whether an object **was created from** a specific class using the `new` keyword.

Think of it as asking:

> “Was this object made using this particular recipe (class)?”

### 🧠 When To Use It

Use `instanceof` when:

- You’re dealing with **class-based objects**.
- You need to know what class an object belongs to.
- `typeof` doesn’t help (because it only works for simple values like strings or numbers).

---

### 🧰 Example

**_ Example.ts _**

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log("It's a date:", x.toUTCString());
  } else {
    console.log("It's a string:", x.toUpperCase());
  }
}

logValue(new Date()); // Logs: It's a date: ...
logValue("Hello"); // Logs: It's a string: HELLO
```

**_ /Example.ts _**

✅ TypeScript now knows exactly which type `x` is inside each block.

---

### 🪄 Another Way to Think About It

Imagine a toy box full of things — cars, dolls, and balls.
When you pick something up, you can check what it is by saying:

> “Is this toy an _instance of_ Car?”

If yes, you know what you can do with it — roll it, not throw it!
That’s basically what `instanceof` does in TypeScript.

---

### ⚠️ Caution

- Works **only with classes or constructor functions** (things made with `new`).
- Does **not** work with object literals like `{}` or plain JSON data.
- For those, use `in` or `typeof` instead.

---

## 🧩 2. Type Predicates

### 💡 What It Means

A **type predicate** is a **custom function** you write to tell TypeScript what a value really is.

You use it when TypeScript can’t automatically tell if a value is one type or another.

The syntax is:

```ts
function isSomething(value: unknown): value is SomeType {
  // return true if it’s that type
}
```

That `value is SomeType` part is what makes it special —
it’s not returning just `true` or `false`, it’s also **telling TypeScript**:

> “If this function returns true, you can safely treat the value as `SomeType`.”

---

### 🧰 Example: Fish and Bird 🐠 🐦

**_ Example.ts _**

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Custom type guard (type predicate)
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "Fish food 🐟";
  } else {
    return "Bird food 🐦";
  }
}

const goldfish: Fish = { swim: () => console.log("swimming...") };
const parrot: Bird = { fly: () => console.log("flying...") };

console.log(getFood(goldfish)); // Fish food 🐟
console.log(getFood(parrot)); // Bird food 🐦
```

**_ /Example.ts _**

---

### 🔍 How It Works Step-by-Step

1. The `isFish()` function **checks** if `swim` exists.
2. If it does, it **returns `true`** — meaning the value _is definitely a Fish_.
3. Because of `pet is Fish`, TypeScript automatically narrows the type in the `if` block.
4. Inside `if (isFish(pet))`, you can safely call `pet.swim()` — no errors.

---

### ⚙️ Common Use Cases

- Working with **mixed types** in APIs.
- Handling **optional object fields**.
- Distinguishing **custom class types**.
- Building **validation utilities** that make TypeScript smarter.

---

### 🧠 Alternate Way to Understand It

You can think of a **type predicate** as a “truth-telling function”:

> “If I say yes, trust me — this thing is definitely of that type.”

In real life:

- You check if something quacks and swims — it’s probably a duck.
- In code, you check if something has `.swim()` — it’s a fish!

---

### ⚡ Why Type Predicates Matter

They let you teach TypeScript _how to think_ about your data.
So even when the compiler doesn’t know your business logic, **you can tell it**.

---

## 🕰️ Outdated or Missing Info (2025 Update)

This concept is still valid, but here’s what’s newer:

1. **TypeScript 5.x improvements**

   - TypeScript now performs **“control-flow narrowing”** better — it can often figure out types automatically without needing custom predicates for simple checks.

2. **`satisfies` Operator**

   - Introduced recently; helps check that an object fits a type _without changing its inferred type_.
     It’s not a replacement for type predicates, but works great alongside them.

     ```ts
     const pet = { swim: () => {} } satisfies Fish;
     ```

3. **Modern codebases** prefer using **discriminated unions** (with a `kind` or `type` field) instead of writing too many custom `isType()` functions:

   ```ts
   type Pet =
     | { kind: "fish"; swim: () => void }
     | { kind: "bird"; fly: () => void };

   function getFood(pet: Pet) {
     return pet.kind === "fish" ? "Fish food" : "Bird food";
   }
   ```

   ✅ Simpler, cleaner, and automatically narrowed by TypeScript.

---

## 🧩 Quick Recap

| Concept            | Description                                               | Use Case                                      |
| ------------------ | --------------------------------------------------------- | --------------------------------------------- |
| **`instanceof`**   | Checks if a value was made from a specific class          | Class instances like `Date`, `Error`, `Array` |
| **Type Predicate** | Custom function that tells TS what type a value is        | Mixed data, custom logic checks               |
| **Alternative**    | Use discriminated unions (`kind` fields)                  | Modern, simpler narrowing                     |
| **Key Rule**       | `instanceof` works with `new`; predicates work with logic | Use them together smartly                     |

---

## 🧪 Practice Task

### 🧭 Task:

Create a function that accepts either a `Car` or a `Bike`:

- `Car` has a `drive()` method.
- `Bike` has a `ride()` method.
- Write a **type predicate** `isCar()` that checks for the presence of `drive`.
- Then use it inside a `move()` function to call the correct method.

### 💬 Example Output:

```
Car is moving 🚗
Bike is moving 🚴
```

### 💡 Hint:

Use `pet is Type` style syntax to return a **type**, not just `true` or `false`.

---

✅ **Key Takeaway:**
Both `instanceof` and type predicates help TypeScript “see through” your logic.
They make your code **smarter**, **safer**, and **more reliable** — especially when dealing with flexible or unknown types.
