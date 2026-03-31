# Type Declarations and Axios in TypeScript

> Source: https://www.youtube.com/watch?v=GTyKTyw2GhI

# 1. What are Type Declarations?

TypeScript provides:

- **Hints (auto-suggestions)**
- **Errors (type checking)**

These come from **Type Declaration Files**.

Without these files:

- No IntelliSense
- No auto suggestions
- No type safety

---

# 2. Declaration Files (.d.ts)

Declaration files usually look like:

```
something.d.ts
```

Example:

```
index.d.ts
dom.d.ts
array.d.ts
string.d.ts
```

These files **do not contain actual code implementation**.

Instead they only contain **type definitions**.

Example concept:

```ts
interface Array<T> {
  length: number;
  push(...items: T[]): number;
}
```

It tells TypeScript:

> “This method exists and works like this.”

But the real implementation exists in **JavaScript runtime**.

---

# 3. Where Declaration Files Exist

Most declaration files exist inside:

```
node_modules/typescript/lib
```

Examples:

```
lib.es2015.d.ts
lib.es2017.d.ts
lib.dom.d.ts
```

Example:

**DOM declaration file**

```
dom.d.ts
```

Contains definitions for:

- addEventListener
- document
- window
- HTML elements

Example declaration:

```ts
addEventListener(type: string, listener: EventListener): void
```

These help TypeScript understand **browser APIs**.

---

# 4. Why Declaration Files Exist

They help TypeScript know:

- What functions exist
- What parameters they take
- What they return

Example:

If TypeScript sees:

```ts
document.addEventListener();
```

It checks the **.d.ts file** to understand how this function works.

---

# 5. Libraries and Type Declarations

Some libraries **ship with built-in types**.

Example:

- Axios
- React
- Prisma

Others **do not include types**.

For those we install types separately.

---

# 6. Installing Types for Libraries

Standard pattern:

```bash
npm install -D @types/library-name
```

Example:

```bash
npm install -D @types/express
```

This installs declaration files for Express.

TypeScript then understands the library.

---

# 7. Example: Installing Axios

Install Axios:

```bash
npm install axios
```

Import Axios:

```ts
import axios from "axios";
```

Axios already ships with **TypeScript types**, so we usually don't need to install extra types.

---

# 8. Basic Axios Request

Example GET request:

```ts
axios.get("https://example.com/data").then((response) => {
  console.log(response.data);
});
```

The response object contains properties like:

- data
- status
- headers
- config
- request

TypeScript knows these because of **type declarations**.

---

# 9. API Example (JSON Placeholder)

Example API:

```
https://jsonplaceholder.typicode.com/todos/1
```

Response:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

To properly type this response, we define an **interface**.

---

# 10. Creating an Interface for API Data

Example:

```ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

Now TypeScript knows the **structure of API data**.

---

# 11. Axios Request with TypeScript

First import Axios types:

```ts
import axios from "axios";
import type { AxiosResponse } from "axios";
```

---

### Async request function

```ts
async function fetchData() {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
```

Now TypeScript knows:

```
response.data → Todo
```

This gives strong type safety.

---

# 12. Using Generics with Axios

Axios supports generics.

Example:

```ts
const response = await axios.get<Todo>(
  "https://jsonplaceholder.typicode.com/todos/1",
);
```

Now:

```
response.data → Todo
```

Generics help **define API response types**.

---

# 13. Error Handling with Axios

Example:

```ts
catch (error: any) {
  console.log(error.message)
}
```

But `any` is not ideal.

Better approach:

```ts
if (axios.isAxiosError(error)) {
  console.log(error.message);
}
```

Axios provides:

```
isAxiosError()
```

This checks if error belongs to Axios.

---

# 14. Accessing Axios Error Data

Example:

```ts
if (axios.isAxiosError(error)) {
  console.log(error.message);

  if (error.response) {
    console.log(error.response.status);
  }
}
```

Axios errors may contain:

- message
- response
- status
- config
- code

---

# 15. Fetch API Example (Without Axios)

You can also use native `fetch`.

Example:

```ts
async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  const data: Todo = await response.json();

  console.log(data);
}
```

Here we manually define:

```
data: Todo
```

---

# 16. Axios vs Fetch

| Feature               | Axios  | Fetch   |
| --------------------- | ------ | ------- |
| Built-in JSON parsing | Yes    | No      |
| Error handling        | Easier | Manual  |
| Type support          | Better | Limited |
| Request interceptors  | Yes    | No      |

Axios is often preferred in **TypeScript projects**.

---

# 17. Importing Types Only

Sometimes TypeScript shows warning:

```
'AxiosResponse' is a type and must be imported using type-only import
```

Solution:

```ts
import type { AxiosResponse } from "axios";
```

This tells TypeScript:

> “This import is only for type checking.”

It will **not be included in compiled JavaScript**.

---

# 18. Why Type-Only Imports Exist

Two kinds of imports exist:

### Runtime imports

Used in JavaScript execution.

Example:

```ts
import axios from "axios";
```

---

### Type imports

Used only by TypeScript.

Example:

```ts
import type { AxiosResponse } from "axios";
```

This improves **performance and clarity**.

---

# 19. Real Purpose of TypeScript Here

TypeScript helps:

- understand API responses
- avoid runtime mistakes
- give auto suggestions
- improve developer experience

Example suggestions appear like:

```
response.data
response.status
response.headers
```

This reduces bugs.

---

# 20. Key Takeaways

Type Declaration Files:

- `.d.ts`
- define types for libraries
- provide IntelliSense and error checking

Axios with TypeScript:

- define API interfaces
- use generics for responses
- use `AxiosResponse<T>`
- handle errors safely

Fetch vs Axios:

- Fetch = built-in but manual typing
- Axios = easier TypeScript integration

---

# Final Advice

In real TypeScript projects:

You will constantly do three things:

1️⃣ Define **interfaces for API responses**
2️⃣ Use **generics for type safety**
3️⃣ Import **types from libraries**

Mastering these makes TypeScript **much easier to work with in real applications**.
