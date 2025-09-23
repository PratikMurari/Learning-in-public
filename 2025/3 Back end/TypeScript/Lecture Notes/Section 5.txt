SECTION 5: NUMBERS, BOOLEANS & TYPE INFERENCE
=============================================

1) Focus of This Lesson
-----------------------
- Learn how to use `number` and `boolean` in TypeScript.
- Understand **type inference** (TypeScript automatically detects types).
- Best practices → when to annotate vs when to let TS infer.

2) Numbers in TypeScript
------------------------
- Type name = `number` (singular).
- No separate `int` or `float`. JS/TS treat all numeric values as `number`.

*** Example.ts ***
let userId: number = 334466;
console.log(userId.toFixed(2));   // 334466.00
*** /Example.ts ***

- Methods available: `toFixed()`, `toExponential()`, `toLocaleString()`.
- Integers, decimals, negatives — all are `number`.

💡 Tip: Use `bigint` if you need very large integers (`let big: bigint = 123n;`).

3) Booleans
-----------
- Type name = `boolean` (lowercase).
- Values: `true` or `false`.

*** Example.ts ***
let isLoggedIn: boolean = false;
console.log(isLoggedIn);   // false
*** /Example.ts ***

- Booleans have very few methods — they’re just flags.

4) Type Inference
-----------------
- When you **declare and assign** a value, TS can guess its type.
- Writing an explicit type in these cases is redundant.

✅ Better:
*** Example.ts ***
let userId = 334466;     // TS infers: number
let isLoggedIn = true;   // TS infers: boolean
*** /Example.ts ***

🚫 Overkill:
*** Example.ts ***
let userId: number = 334466;   // Too obvious
*** /Example.ts ***

⚠️ When declaring without initialization, always annotate:
*** Example.ts ***
let score: number;
score = 99;
*** /Example.ts ***

5) Why Inference Matters
------------------------
- Keeps code shorter & cleaner.
- TS still enforces the type:

*** Example.ts ***
let age = 25;        // inferred number
age = "twenty";      // ❌ Error: string not assignable to number
*** /Example.ts ***

6) Best Practices
-----------------
- Use inference if:
  - Value is assigned right away.
  - Type is obvious.
- Use explicit types if:
  - Declaring without initializing.
  - For function parameters & returns.
  - At “boundaries” (e.g., library/public API).

💡 New in TS 5.x:
- Better inference for `const`, arrays, and objects.

7) Code Recap
-------------
*** Example.ts ***
// Numbers
let userId = 334466;        // inferred as number
console.log(userId.toFixed(2));

// Booleans
let isLoggedIn = false;     // inferred as boolean

// Explicit type when no value yet
let highScore: number;
highScore = 100;
*** /Example.ts ***

8) Output / Compilation
-----------------------
- Compile:
- Types (`: number`, `: boolean`) disappear in compiled JS → they’re for development only.

9) Modern Notes (3 yrs later)
-----------------------------
- `bigint` (TS ≥4.0) supports very large integers.
- Boolean handling unchanged.
- Type inference is even smarter in TS 5+.

PRACTICE TASK
-------------
1. Create a new file.
2. Declare:
   - A `number` using explicit annotation.
   - A `number` using inference.
   - A `boolean` with inference.
3. Try assigning a string to the number → see the TS error.
4. Add a `bigint` example (`let huge: bigint = 9007199254740991n;`).
5. Compile & run.

KEY TAKEAWAY
------------
Use explicit types only when needed or to clarify intent.  
When the value is obvious, trust TypeScript’s **inference** — cleaner code, same safety.






**** Some Updates ****

# Section 5: Number, Boolean, and Type Inference

## 📝 Notes (in simple language)

- TypeScript has primitive types: **string, number, boolean**.  
- Unlike some languages, **JavaScript/TypeScript don’t have `int` vs `float`**. Everything numeric is just `number`.  
- **Number examples**: integers, decimals, negatives → all fall under `number`.  
- **Boolean examples**: `true` or `false`.  
- **Type inference**:  
  - If you declare and assign a value at the same time, TypeScript **automatically figures out the type**.  
  - Example: `let x = 10;` → TypeScript infers `x` is a `number`.  
  - Writing `let x: number = 10;` is redundant.  
- **When to avoid inference?**  
  - If you declare a variable without a value, inference doesn’t work. In such cases, **explicitly annotate the type**.

---

### Example: Numbers

*** Example.ts ***
let userId: number = 334466; // explicit annotation
let balance = 99.5;          // inferred as number
console.log(balance.toFixed(2)); // ✅ works
*** /Example.ts ***

---

### Example: Booleans

*** Example.ts ***
let isLoggedIn: boolean = false; // explicit
let hasAccess = true;            // inferred as boolean
*** /Example.ts ***

---

### Example: Type Inference

*** Example.ts ***
let score = 100;  // TypeScript infers number
// score = "oops"; // ❌ Error: string not assignable to number
*** /Example.ts ***

---

## 📌 Key Takeaways

1. Use **type inference** for cleaner code when assignment is immediate.  
2. Use **explicit types** when:  
   - You declare a variable without assigning a value.  
   - You want stricter readability for teammates.  

---

## 🏋️ Practice Task

Create variables for:
1. A product price (`number`)  
2. A user’s subscription status (`boolean`)  
3. A variable `points` where you first declare its type, then assign the value `150`.  

---

## 🔄 Latest TypeScript Updates (2023–2024)

- TypeScript now has **`bigint`** as a built-in type for very large integers.  
  *** Example.ts ***
  let huge: bigint = 12345678901234567890n;
  *** /Example.ts ***
- **`const` type inference improvements**:  
  - If you use `const`, TypeScript narrows types automatically.  
  *** Example.ts ***
  const isOnline = true;  // type is true (literal), not just boolean
  *** /Example.ts ***
- TypeScript 5.x improved **control flow analysis**:  
  - TypeScript is smarter in detecting impossible conditions with booleans and numbers.  
