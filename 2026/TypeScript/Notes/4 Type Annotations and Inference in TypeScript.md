# Type Annotations and Type Inference in TypeScript

## 1. What This Lecture Is About

This lecture explains **two of the most important core ideas in TypeScript**:

1. **Type Annotation** → _You explicitly tell TypeScript the type_
2. **Type Inference** → _TypeScript automatically understands the type_

If you understand these two concepts clearly, **50% of TypeScript is done**.

---

## 2. Real-Life Analogy (Easy to Remember)

There are two types of people:

- 👀 **Smart ones** → they understand without being told
- 🗣️ **Others** → you have to explain clearly

TypeScript behaves the same way:

- Sometimes it **understands automatically** → _Inference_
- Sometimes you **must explain clearly** → _Annotation_

---

## 3. Type Inference (TypeScript Understands Automatically)

### Example 1: Simple variable

```ts
let drink = "chai";
```

What TypeScript does:

- Sees `"chai"`
- Automatically infers type as `string`

If you hover over `drink`, you’ll see:

```ts
let drink: string;
```

✔️ No annotation needed
✔️ TypeScript is smart enough

---

### Reassigning wrong value ❌

```ts
drink = 0;
```

Error:

```
Type 'number' is not assignable to type 'string'
```

Once a type is inferred:

- You **cannot change it**
- TypeScript remembers it forever

---

## 4. Inference Works With Calculations Too

```ts
let cups = Math.random() > 0.5 ? 10 : 5;
```

TypeScript infers:

```ts
let cups: number;
```

### Mixed values example

```ts
let cups = Math.random() > 0.5 ? 10 : "five";
```

Now TypeScript infers:

```ts
let cups: number | string;
```

💡 This is called a **union type** (covered later).

---

## 5. JavaScript Types Supported in TypeScript

TypeScript automatically understands all JS primitive types:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`

You **don’t need to annotate everything manually**.

---

## 6. Common Errors in TypeScript

You’ll mostly see **two types of errors**:

---

### 1️⃣ Syntax Errors

Example:

```ts
let let value = 10;
```

These are:

- Grammar mistakes
- Already caught by JavaScript
- Easy to fix

---

### 2️⃣ Type Errors (Most Common)

Example:

```ts
let channelName = "Chai aur Code";
channelName = 123;
```

Error:

```
Type 'number' is not assignable to type 'string'
```

⚠️ This error appears **a LOT** in TypeScript.

> Whenever you see this error, it means:
> “You’re assigning a value of the wrong type”

---

## 7. Type Annotation (You Explicitly Tell TypeScript)

### Example

```ts
let teaFlavor: string = "Masala Chai";
```

This is **type annotation**:

- `:` is used to annotate
- You are clearly defining the type

You can reassign **same type only**:

```ts
teaFlavor = "Ginger Tea"; // ✅
teaFlavor = 2; // ❌
```

---

## 8. Why Use Annotation If Inference Exists?

### Use inference when:

- Value is obvious
- TypeScript can clearly infer

### Use annotation when:

- Declaring variables without value
- Function parameters
- Function return types
- Public APIs
- Team projects (clarity matters)

---

## 9. Basic Type Annotations You Must Know

### String

```ts
let teaType: string = "Masala";
```

---

### Number

```ts
let orderNumber: number = 101;
```

---

### Boolean

```ts
let isAvailable: boolean = true;
```

⚠️ Always lowercase:

- `string` ✅
- `String` ❌ (object type, not recommended)

---

## 10. Annotation vs Inference (Side-by-Side)

### Inference

```ts
let city = "Delhi";
```

TypeScript infers `string`.

---

### Annotation

```ts
let city: string = "Delhi";
```

You explicitly declare `string`.

Both are valid — choose wisely.

---

## 11. Key Rule to Remember

> **Let TypeScript infer when possible**
> **Annotate when clarity or safety is required**

Over-annotating:

- Makes code noisy
  Under-annotating:
- Can cause confusion in large projects

Balance is the key.

---

## 12. Final Summary

### Type Inference

- TypeScript understands automatically
- Less code
- Cleaner syntax

### Type Annotation

- You explicitly define types
- More control
- Better clarity in teams

Together, they make TypeScript:

- Safer
- More readable
- More predictable

---

## 13. What’s Next?

Next lectures will cover:

- More data types
- Arrays & objects
- Union types
- Real-world examples
