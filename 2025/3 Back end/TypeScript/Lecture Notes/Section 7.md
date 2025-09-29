# Section 7: Do you really know functions?

## 📝 Notes (in simple language)

- You already know functions from JavaScript, but in **TypeScript**, we need to think about them differently.  
- **Big rule:** When working with functions in TypeScript, **always type your parameters**.  
  - In variables, TypeScript’s type inference is usually enough.  
  - In functions, inference is **not enough** — parameters often default to `any`, which is bad.  

---

### Example 1: Add Two Numbers  

❌ Problem: If no type is given, parameters become `any`.

*** Example.ts ***
function addTwo(num) {
  return num + 2;
}

console.log(addTwo("5")); // ❌ Allowed but wrong
*** /Example.ts ***

✅ Fix it by typing the parameter:

*** Example.ts ***
function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(5));   // ✅ Works fine
console.log(addTwo("5")); // ❌ Error: Argument must be a number
*** /Example.ts ***

---

### Example 2: Converting Strings to Uppercase  

❌ Without typing, `val` is inferred as `any`.

*** Example.ts ***
function getUpper(val) {
  return val.toUpperCase();
}

console.log(getUpper(5)); // ❌ Allowed at runtime but wrong
*** /Example.ts ***

✅ With explicit type:

*** Example.ts ***
function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("hello")); // ✅ "HELLO"
console.log(getUpper(5));       // ❌ Error
*** /Example.ts ***

---

### Example 3: Sign Up Function  

❌ Without types, everything is `any`.

*** Example.ts ***
function signUpUser(name, email, isPaid) {
  // function body
}

signUpUser(1, true, "nope"); // ❌ Wrong but still allowed
*** /Example.ts ***

✅ With types:

*** Example.ts ***
function signUpUser(name: string, email: string, isPaid: boolean) {
  // function body
}

signUpUser("Alice", "alice@mail.com", true); // ✅ Correct
*** /Example.ts ***

---

### Example 4: Arrow Function with Default Value  

✅ Arrow functions also use parameter types, and you can add defaults:

*** Example.ts ***
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return `User: ${name}, Email: ${email}, Paid: ${isPaid}`;
};

console.log(loginUser("Hitesh", "hitesh@mail.com")); 
// ✅ Paid defaults to false
*** /Example.ts ***

---

### ⚠️ Problem with Return Types  

- Even if parameters are typed, TypeScript may still allow wrong return values.  
- Example: Returning a string when a number was expected.  

👉 This will be fixed in the **next section** with **return type annotations**.

---

## 📌 Key Takeaways

1. Always **type your function parameters** — unlike variables, inference is not reliable here.  
2. Use **default values** to avoid passing all arguments every time.  
3. Explicit typing makes your code more predictable and prevents errors for both you and teammates.  
4. We still need to learn how to type **return values** (coming in the next section).  

---

## 🧑‍💻 Practice Task

1. Write a function `multiplyByTen` that takes a **number** and returns the number × 10.  
2. Write a function `greetUser` that takes a **string name** and returns `"Hello, {name}!"`.  
3. Write a function `createAccount` that takes parameters:  
   - `username: string`  
   - `password: string`  
   - `isAdmin: boolean` (default `false`)  
   and returns a message confirming account creation.  

---

## 🔄 Latest TypeScript Updates (2023–2024)

1. **Satisfies Operator (`satisfies`)**  
   - Lets you check that a function parameter or return value matches a type without losing inference.  
   ```ts
   type User = { name: string; email: string };
   const makeUser = (u: User) => u;

   const user = makeUser({ name: "Alice", email: "a@mail.com" });
   With satisfies, you ensure an object matches the shape, but you still keep inferred literal types.

2. Improved Inference for Functions
    -Newer TS versions are better at inferring types for callbacks and higher-order functions.
    -Example: No need to manually type parameters inside map, filter, etc. anymore.

3. Const Type Parameters (TS 5.0)
    -You can mark generic type parameters as const so literal values don’t widen.

function makeArray<const T extends string>(value: T): T[] {
  return [value];
}
const result = makeArray("hello"); 
// inferred as ["hello"], not string[]

4. Better Return Type Checks
    -TypeScript now catches more cases where a function’s return type doesn’t match what’s expected.
    -This helps avoid the “returning wrong thing” issue discussed in the video.