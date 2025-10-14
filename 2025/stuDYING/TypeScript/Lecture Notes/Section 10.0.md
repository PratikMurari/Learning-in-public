# Section 10: Type Aliases

## 📝 Notes (in simple language)

- A **type alias** lets you create a custom name for a type.  
- It’s useful when the same structure is reused in multiple places.  
- Example: `User` type with `name`, `email`, and `isActive` can be reused across many functions.  
- Aliases work like blueprints for objects, not like variables that hold data.  
- You can also alias built-in types (like `string`, `boolean`), but that’s rarely practical in real projects.  

👉 Think of type aliases as giving a nickname to a data structure so you don’t have to rewrite it everywhere.  

---

## 💻 Examples

### Example 1: Creating a User Type

*** Example.ts ***
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  // must return a User object
  return {
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
}

// ✅ Correct usage
const newUser = createUser({
  name: "Alice",
  email: "alice@example.com",
  isActive: true,
});
*** /Example.ts ***

---

### Example 2: Aliasing Built-In Types (less useful, but allowed)

*** Example.ts ***
type MyString = string;

const greeting: MyString = "Hello!";
// This is the same as: const greeting: string = "Hello!";
*** /Example.ts ***

---

## ✅ Key Takeaways

- Type aliases **reduce repetition** by letting you define types once and reuse them.  
- They make code **easier to read** and maintain, especially in large projects.  
- Aliasing built-in types is technically allowed but usually unnecessary.  
- In real-world apps: keep aliases in a dedicated `types.ts` file and import them wherever needed.  

---

## 🏋️ Practice Task

1. Create a type alias called `Book` with properties:  
   - `title` (string)  
   - `author` (string)  
   - `publishedYear` (number)  
   - `isAvailable` (boolean)  

2. Write a function `printBook` that takes a `Book` and logs its details.  
3. Make sure the function only accepts objects of type `Book`.  

---

## 🔄 Latest TypeScript Updates (2023–2024)

- **Satisfies operator (`satisfies`)**  
  Lets you ensure a value matches a type without changing its inferred type.  
  Useful when working with config objects.  

  *** Example.ts ***
  type Config = { apiUrl: string; timeout: number };

  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    extra: true,
  } satisfies Config; // ✅ ensures config has required keys, ignores `extra`
  *** /Example.ts ***

- **Improved type narrowing**  
  TypeScript now does smarter checks with `in`, `instanceof`, and discriminated unions.  

- **Template literal types** improvements  
  Makes it easier to define reusable string patterns (like route paths, event names).  

- **Better VS Code integration**  
  TypeScript now powers most of the IntelliSense in VS Code by default.  

📌 Bottom line: Type aliases remain **essential** and are widely used, especially when combined with modern TS features like unions, intersections, and generics.
