# Section 8: A Better Way to Write Functions

## 📝 Notes (in simple language)

- In the last section, we learned to type function parameters.  
- But functions also need **explicit return types** to prevent mistakes.  
- Without return type annotations, TypeScript allows unexpected returns.  
  - Example: a function supposed to return a number can mistakenly return `"hello"`.  
- Adding return type annotations makes your code **safer, predictable, and team-friendly**.

---

### Example 1: Forcing a Return Type

*** Example.ts ***
function addTwo(num: number): number {
  // return "hello"; ❌ Error now
  return num + 2;     // ✅ Must return number
}
*** /Example.ts ***

---

### Example 2: Functions with Multiple Return Types (preview of unions)

- Sometimes a function might return **different types** depending on logic.  
- Example:  
  - If input > 5 → return `true`  
  - Else → return `200`  

*** Example.ts ***
function getValue(val: number) {
  if (val > 5) {
    return true;   // boolean
  }
  return 200;      // number
}
*** /Example.ts ***

👉 This is allowed, but not yet properly typed.  
👉 We’ll learn the **union type** (`number | boolean`) later to solve this.

---

### Example 3: Arrow Functions with Return Type

*** Example.ts ***
const sayHello = (name: string): string => {
  return `Hello, ${name}`;
};
*** /Example.ts ***

- Syntax: `(params): returnType => { ... }`  
- If you forget to return, TypeScript warns you.

---

### Example 4: Array `map` with Inferred Types

*** Example.ts ***
const heroes = ["Thor", "Spiderman", "Ironman"];

heroes.map((hero): string => {
  return `Hero is ${hero}`;
});
*** /Example.ts ***

- TypeScript automatically infers that `hero` is a `string`.  
- But explicitly typing the **return value of the map callback** makes code clearer for teams.  

---

### Example 5: Void Functions

- Use `void` for functions that **don’t return anything**.  

*** Example.ts ***
function consoleError(errorMessage: string): void {
  console.log(errorMessage);
}
*** /Example.ts ***

---

### Example 6: Never Functions

- Use `never` for functions that **never return at all** (e.g., crash or throw errors).  

*** Example.ts ***
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}
*** /Example.ts ***

- Difference between `void` and `never`:  
  - `void` → function executes but doesn’t return a value.  
  - `never` → function **stops execution entirely** (like a crash).

---

## 📌 Key Takeaways

1. Always add **return types** to functions for safety.  
2. Use **`void`** for no-return functions, and **`never`** for functions that crash/terminate.  
3. TypeScript can infer parameter/return types, but explicit annotations help teams.  
4. Map/array callbacks benefit from **explicit return type annotations**.  

---

## 🏋️ Practice Task

1. Write a function `divide` that:  
   - Takes two numbers  
   - Returns their quotient as a `number`  
   - Throws an error (`never`) if the divisor is zero  

2. Write an arrow function `welcomeUser` that:  
   - Takes a string name  
   - Returns `"Welcome, <name>"` as a string  

---

## 🔄 Latest TypeScript Updates (2023–2024)

- **Improved return type inference**:  
  - TypeScript 5.x is better at narrowing return types in `if/else` without needing unions.  
- **Async functions with `never`**:  
  - Async functions can now correctly infer `never` if they always throw.  
- **New utility `NoInfer<T>` (TS 5.0)**:  
  - Helps control inference in generic functions when you want stricter return typing.  
  *** Example.ts ***
  function choose<T>(x: T, y: NoInfer<T>): T {
    return Math.random() > 0.5 ? x : y;
  }
  *** /Example.ts ***
- **Better `void` handling** in callbacks:  
  - For example, when using `Array.forEach`, TypeScript enforces the return type as `void` and prevents accidental returns.  
