# 🧩 Section 24: Abstract Classes in TypeScript

## 🎯 Overview

Abstract classes in TypeScript are **blueprints** for other classes.  
They define **structure and behavior rules**, just like interfaces —  
but unlike interfaces, they can also include **actual code** (method implementations).

> 🧠 Think of abstract classes as **partially complete classes**.  
> They say *“Here’s what every child class must have”* but also *“Here’s what I already provide for you.”*

---

## ⚙️ 1. Basic Abstract Class Example

An **abstract class** can define properties and methods, but **you can’t create an object directly** from it.

*** Example.ts ***
```typescript
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}
}

// ❌ You cannot do this:
const photo = new TakePhoto("portrait", "vintage"); // Error!
```

*** /Example.ts ***

> 🚫 **Error:** You can’t create objects from abstract classes.
> ✅ Only subclasses that **extend** them can be instantiated.

---

## 🧱 2. Extending an Abstract Class

To use an abstract class, you must **extend** it with another class.

*** Example.ts ***

```typescript
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
}

const insta = new Instagram("portrait", "vintage", 5);
console.log(insta);
```

*** /Example.ts ***

> 🧩 The `super()` keyword passes values from the subclass (`Instagram`)
> to the parent abstract class (`TakePhoto`).

---

## 🔍 3. Abstract Methods (Compulsory Implementation)

Abstract classes can include **abstract methods**,
which act like *must-have rules* — any class extending it **must implement** them.

*** Example.ts ***

```typescript
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void; // 👈 Must be implemented by subclass
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Applying Sepia filter...");
  }
}

const insta = new Instagram("portrait", "vintage", 5);
insta.getSepia(); // Output: Applying Sepia filter...
```

*** /Example.ts ***

> 💡 Abstract methods **don’t have a body** —
> they are like *rules* you must define when extending the class.

---

## 🧠 4. Difference Between Interface and Abstract Class

| Feature                          | Interface                 | Abstract Class                              |
| -------------------------------- | ------------------------- | ------------------------------------------- |
| **Object creation**              | Not possible              | Not possible                                |
| **Can have code implementation** | ❌ No                      | ✅ Yes                                       |
| **Can hold constructor**         | ❌ No                      | ✅ Yes                                       |
| **Can extend multiple types**    | ✅ Yes                     | ❌ Only one class                            |
| **Used when**                    | You just want a structure | You want a partial structure + shared logic |

> 🧩 **Shortcut memory tip:**
>
> * “Interface → Implements”
> * “Abstract → Extends”
>   Both start with the same letter (I & I, A & E)!

---

## ⚡ 5. Adding Real Methods in Abstract Class

Unlike interfaces, abstract classes can include **real methods** with implementation.

*** Example.ts ***

```typescript
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void; // must be implemented by subclasses

  getReelTime(): number {
    // shared behavior for all subclasses
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Applying Sepia tone...");
  }
}

const insta = new Instagram("portrait", "vintage", 5);
console.log(insta.getReelTime()); // Output: 8
```

*** /Example.ts ***

> 💡 Abstract classes can contain **both**:
>
> * Abstract methods (must be implemented)
> * Regular methods (shared logic)

---

## 🧩 6. Why Use Abstract Classes?

Here’s when abstract classes are helpful:

| Use Case                       | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| **Shared Logic**               | When multiple classes share similar functionality.           |
| **Partially Defined Behavior** | Some code is shared, some must be customized.                |
| **Team Consistency**           | Helps developers follow a clear base structure.              |
| **Better than Interface**      | When you need both structure **and** reusable functionality. |

---

## 🧪 7. Practice Task

Try building this on your own 👇

*** Example.ts ***

```typescript
// Step 1: Create an abstract class
abstract class Media {
  constructor(public title: string) {}

  abstract play(): void; // must be implemented

  stop(): void {
    console.log(`${this.title} has stopped playing.`);
  }
}

// Step 2: Create two classes extending Media
class Song extends Media {
  play(): void {
    console.log(`🎵 Playing song: ${this.title}`);
  }
}

class Video extends Media {
  play(): void {
    console.log(`🎬 Playing video: ${this.title}`);
  }
}

// Step 3: Create objects and test
const song = new Song("Shape of You");
const video = new Video("Nature Documentary");

song.play();   // 🎵 Playing song: Shape of You
video.play();  // 🎬 Playing video: Nature Documentary
song.stop();   // Shape of You has stopped playing.
```

*** /Example.ts ***

✅ **Challenge:**
Add a new class `Podcast` that extends `Media`,
and implement its own `play()` and `stop()` methods.

---

## 🧭 Summary

| Concept                   | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| **Abstract class**        | Blueprint for other classes. Cannot create objects directly. |
| **Abstract method**       | Declared but not defined; must be implemented in subclasses. |
| **Super()**               | Used to call the parent’s constructor.                       |
| **Implements vs Extends** | Interfaces are implemented; Abstract classes are extended.   |
| **Can contain logic**     | Yes — can have default methods and real code.                |

---

✅ **In short:**
Abstract classes are **partially complete templates** that mix the flexibility of interfaces
with the power of real class methods. They’re perfect when multiple classes share
common logic but still need their own behavior.

**Next Up →** Abstract vs Interface Comparison in Real Projects 🚀