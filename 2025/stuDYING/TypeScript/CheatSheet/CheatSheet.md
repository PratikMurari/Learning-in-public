# 🧠 React + TypeScript Complete Cheatsheet

> A simple, step-by-step guide to understanding how React and TypeScript work together.
> Ideal if you're new to coding, React, or TypeScript — everything is explained from scratch.

## Sources

### youtube Source

https://youtu.be/joTOrCiAPB4?si=SBuOiH-Wi60ySiRU

### Documentation

https://react-typescript-cheatsheet.netlify.app/

---

## 🌍 1. What Are React, TypeScript, npm, and npx?

### ⚛️ React

React is a **JavaScript library** for building user interfaces — especially single-page apps (SPAs).
It helps you make web pages that **update instantly** when something changes (like a counter or form).

### 💙 TypeScript

TypeScript is **JavaScript + types**.
It checks your code for errors _before_ running it. Example:

```ts
let name: string = "Alex"; // ✅ OK
name = 42; // ❌ Error: number is not a string
```

This prevents many common bugs in React apps.

### 📦 npm (Node Package Manager)

- Comes with Node.js.
- Used to **install packages (libraries)** like React, TypeScript, etc.
- Example:

  ```bash
  npm install react
  ```

### ⚡ npx

- Also comes with Node.js.
- Runs **one-time commands** without installing them globally.
- Example:

  ```bash
  npx create-react-app my-app
  ```

  This runs a script that creates a new React project.

---

## 🚀 2. Creating a React + TypeScript App

### 🧰 Option 1: Using Create React App (older)

```bash
npx create-react-app my-app --template typescript
```

**Explanation:**

- `my-app` → name of your project folder.
- `--template typescript` → tells the setup to include TypeScript files and settings automatically.

### ⚡ Option 2: Using Vite (modern & faster)

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

**Explanation:**

- `vite` is a lightweight tool to build React apps faster.
- `react-ts` means “React + TypeScript” template.
- `npm run dev` starts your development server (usually at [http://localhost:5173](http://localhost:5173)).

---

## 📁 3. Understanding Project Structure

After setup, you’ll see files like:

```
my-app/
│
├── src/                 # Where your code lives
│   ├── App.tsx          # Main component
│   ├── main.tsx         # Entry file (loads App)
│   └── components/      # You can store reusable parts here
│
├── tsconfig.json        # TypeScript settings
└── package.json         # Project dependencies & scripts
```

---

## 🧱 4. Creating Your First Component

Components are **reusable building blocks** — like buttons, headers, or forms.

### 🧩 Example

```tsx
// src/components/MyButton.tsx
import React from "react";

function MyButton() {
  return <button>Click me</button>;
}

export default MyButton;
```

> `.tsx` = TypeScript + JSX (HTML-in-JS syntax).
> `.ts` = TypeScript only (no JSX).

---

## 🧩 5. Adding Props (Inputs to Components)

### 📦 Example

```tsx
interface ButtonProps {
  text: string; // must be a string
  onClick?: () => void; // optional function
}

function MyButton({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}
```

### 🪄 How It Works

- `interface` describes what data your component accepts.
- `text` → required prop (you must pass it).
- `onClick?` → optional prop (`?` makes it optional).

### 🧠 Usage

```tsx
<MyButton text="Click me" onClick={() => alert("Clicked!")} />
<MyButton text="Just text" />  {/* Works without onClick */}
```

---

## ⚙️ 6. useState Hook (Component Memory)

The `useState` hook lets your component **remember values** (like a counter).

### 🧮 Example

```tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### 🧠 Explanation

- `count` = current value
- `setCount` = function to change it
- `useState<number>` → ensures `count` is always a number
- TypeScript stops you from setting it to the wrong type.

---

## 🧱 7. useState with Objects

### 🧾 Example

```tsx
interface Book {
  title: string;
  price: number;
}

const [book, setBook] = useState<Book>({
  title: "React Guide",
  price: 25,
});
```

Now TypeScript knows:

- `book.title` → string
- `book.price` → number
  So if you accidentally do `setBook({ title: 10 })`, it warns you.

---

## 🧩 8. Handling Events (Click, Change, Submit)

### 🖱 Click Event

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked!");
};
```

### ✍️ Input Change

```tsx
const [name, setName] = useState<string>("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};
```

### 📝 Form Submit

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted!");
};
```

> ⚡ Tip: Always use specific event types (`React.ChangeEvent`, `React.FormEvent`, etc.)
> It gives you autocomplete + error checking.

---

## 🌐 9. Using Context (for Global State)

**Context** lets you share data (like theme, user info, or counters) between components _without_ passing props manually.

### 🧱 Create Context

```tsx
import React, { createContext, useState, useContext } from "react";

interface CounterContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext)!;
```

### 🧩 Use It

```tsx
function CounterDisplay() {
  const { count, setCount } = useCounter();
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

> Wrap your `<App />` with `<CounterProvider>` in `main.tsx`.

---

## ⚡ 10. Helpful TypeScript Features in React

| Feature          | Example                | Meaning                     |                    |
| ---------------- | ---------------------- | --------------------------- | ------------------ |
| Optional prop    | `prop?: string`        | You can skip it             |                    |
| Union type       | `string                | number`                     | Can be either type |
| Default value    | `useState<string>("")` | Avoids undefined errors     |                    |
| Type inference   | `useState(0)`          | TS auto-detects number type |                    |
| Explicit generic | `useState<number>()`   | You set the type manually   |                    |

---

## 🧩 11. Recommended Tools (2025)

| Tool                      | Purpose                   | Why Use It                         |
| ------------------------- | ------------------------- | ---------------------------------- |
| **Vite**                  | React project setup       | Faster & modern alternative to CRA |
| **ESLint + Prettier**     | Code linting & formatting | Keeps code clean & consistent      |
| **Zod**                   | Type-safe form validation | Runtime + TypeScript type checks   |
| **React Developer Tools** | Browser extension         | Inspect React components easily    |

---

## 🧭 12. Common Errors & Fixes

| Error                                   | Cause                                    | Fix                                                       |
| --------------------------------------- | ---------------------------------------- | --------------------------------------------------------- |
| “Type ‘undefined’ is not assignable…”   | You forgot a default value in `useState` | Give it a default: `useState<string>("")`                 |
| “Property does not exist on type …”     | You didn’t define it in the interface    | Add it to the interface                                   |
| “Cannot find name React”                | Missing import                           | Add `import React from "react"` or enable JSX auto-import |
| “JSX element implicitly has type ‘any’” | TypeScript version/config issue          | Ensure `jsx: "react-jsx"` in `tsconfig.json`              |

---

## 🧾 Summary Checklist

✅ Understand npm & npx
✅ Create project with TypeScript template
✅ Know `.ts` vs `.tsx`
✅ Define prop types with `interface`
✅ Use `useState` & `useEffect` with types
✅ Handle events safely
✅ Share state with Context API
✅ Fix common errors confidently

---

## 💡 Final Tip

> TypeScript may look strict at first, but it **saves you from countless bugs** later.
> Think of it as “auto-correct for code” — helping you write cleaner, safer React apps.
