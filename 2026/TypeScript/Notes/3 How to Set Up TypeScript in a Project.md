# Lecture 3: How to Set Up TypeScript in a Project

> Source: https://youtu.be/4O4Y1TJz3F0?si=GV5oxM6zEuZiCx89

## 1. Goal of This Lecture

The purpose of this lecture is very simple:

> **Set up TypeScript in a project the traditional (core) way**

No React  
No Node framework  
No fancy tooling

Just **pure TypeScript**, so you clearly understand:

- What gets installed
- Why it gets installed
- How compilation actually works

Once this is clear, frameworks like React or Node become **easy extensions**, not confusion.

---

## 2. Two Ways to Install TypeScript

### Option 1: Global installation ❌ (not recommended)

```bash
npm install -g typescript
```

Problems:

- Version conflicts between projects
- Older projects may break
- Hard to manage in teams

---

### Option 2: Project-wise installation ✅ (recommended)

Why?

- Each project controls its own TypeScript version
- Safer for long-term projects
- Industry standard

We will use **project-wise installation**.

---

## 3. Initialize a Project

First, create a Node project (even if you’re not using Node yet).

```bash
npm init -y
```

This creates:

- `package.json`
- Project metadata
- Script support

---

## 4. Install TypeScript (Dev Dependency)

```bash
npm install -D typescript
```

Why `-D` / `--save-dev`?

- TypeScript is a **development tool**
- It does NOT go to production
- Production only needs JavaScript

After this:

- TypeScript compiler (`tsc`) is installed
- But only **inside this project**

---

## 5. Why We Don’t Get `tsc` Command Directly

Since TypeScript is **not installed globally**, this won’t work:

```bash
tsc
```

Instead, we use:

### `npx`

```bash
npx tsc
```

### What is `npx`?

- Executes packages from `node_modules`
- No global install needed
- Safer and cleaner

---

## 6. Initialize TypeScript Configuration

```bash
npx tsc --init
```

This creates:

```
tsconfig.json
```

This file is the **heart of TypeScript configuration**.

---

## 7. Understanding `tsconfig.json` (Very Important)

This file controls:

- Where TypeScript code lives
- Where compiled JavaScript goes
- How strict TypeScript is
- Which JS version to generate

You mostly:

- Comment / uncomment options
- Rarely write from scratch

---

### Important Options You MUST Understand

#### 1️⃣ `rootDir`

```json
"rootDir": "./src"
```

Meaning:

- All TypeScript files live inside `src`
- Compiler watches this folder

---

#### 2️⃣ `outDir`

```json
"outDir": "./dist"
```

Meaning:

- Compiled JavaScript goes to `dist`
- Clean separation of TS & JS

---

#### 3️⃣ `target`

```json
"target": "ES2017"
```

Meaning:

- Which JavaScript version to generate
- Depends on browser / runtime support

Defaults are usually safe.

---

#### 4️⃣ `strict`

```json
"strict": true
```

Meaning:

- Enables full type safety
- Recommended for real projects

---

## 8. Where Do These Options Come From?

All `tsconfig` options come from:

### TypeScript Playground

The Playground:

- Shows every config option
- Explains what each flag does
- Lets you experiment safely

Every checkbox = `true / false` flag in `tsconfig.json`.

---

## 9. Project Structure (Recommended)

```
project/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── package.json
├── tsconfig.json
```

---

## 10. Writing Your First TypeScript Code

### `src/index.ts`

```ts
function greet(person: string): string {
  return `Hello ${person}, welcome to Chai Code`;
}

let username: string = "Chai aur TypeScript";

console.log(greet(username));
```

### What’s happening here?

- Function input is typed
- Function return is typed
- Variable has a type
- IDE gives **autocomplete & suggestions**

This is **type safety + developer experience**.

---

## 11. Compile TypeScript to JavaScript

Run:

```bash
npx tsc
```

What happens?

- TypeScript reads `tsconfig.json`
- Looks inside `src`
- Emits JavaScript into `dist`

Generated files:

- `index.js`
- `index.d.ts`
- `index.js.map`

---

## 12. Understanding Generated Files

### `index.js`

- Actual runnable JavaScript
- Used in production

### `index.d.ts`

- Type declaration file
- Used by editors & other projects

### `index.js.map`

- Source map
- Helps debugging TS in browser / Node

---

## 13. Running the Compiled Code

```bash
node dist/index.js
```

⚠️ Remember:

> Node runs **JavaScript**, not TypeScript

---

## 14. Using npm Scripts (Best Practice)

Instead of long commands, define scripts.

### `package.json`

```json
"scripts": {
  "build": "npx tsc",
  "start": "node dist/index.js",
  "dev": "npx tsc"
}
```

Now you can run:

```bash
npm run build
npm run start
```

---

## 15. What About `ts-node`?

Optional tool:

```bash
npm install -D ts-node
```

Allows:

```bash
ts-node src/index.ts
```

⚠️ Important:

- Good for development
- NOT recommended for production
- Production should always use compiled JS

---

## 16. Key Takeaways

- TypeScript setup is **not complicated**
- It’s just:
  - Install
  - Configure
  - Compile

- JavaScript is the final output
- Config controls behavior & errors

> If you know JavaScript,
> TypeScript automatically becomes easy.

---

## 17. What’s Next?

Next lectures will focus on:

- Core TypeScript types
- `string`, `number`, `boolean`
- `union`, `array`, `object`
- Writing real-world examples fast
