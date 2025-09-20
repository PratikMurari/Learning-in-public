SECTION 3: HOW TO INSTALL TYPESCRIPT
====================================

1) Teaching Style Note
----------------------
- The instructor prefers showing concepts directly in code (rather than long theory).
- We’ll start writing & running TS right away, which makes learning faster.

2) Two Ways to Install TS
-------------------------
- **Global install**: For practice, learning, or running simple `.ts` files anywhere.
- **Project install**: As a dev dependency inside real projects (React, Angular, Node, etc.).
    - Uses a `tsconfig.json` file to set rules (target JS version, strict mode, JSX, etc.).

💡 You often start global → then add project-level install when building apps.

3) Prerequisites
----------------
- **Node.js** must be installed.
    - Check version: `node -v`
- **npm** comes with Node.
    - Check version: `npm -v`
- On Windows, use **Git Bash** or PowerShell (Git Bash feels like Linux/macOS).

4) Global Installation Steps
----------------------------
1. Open terminal (Git Bash / PowerShell / macOS/Linux terminal).
2. Run:
    ```
    npm install -g typescript
    ```
    - `-g` = install globally.
    - On Linux/macOS, you may need `sudo` before the command.
3. Check it worked:
    ```
    tsc -v
    ```
    → Should display a version number (any version is fine for learning).

5) Testing the Compiler
-----------------------
- Make a folder (e.g., `TypeScriptYoutube/01-intro`).
- Create `intro.ts` in VS Code:
    ```ts
    console.log("Hello, TypeScript!");

    const user = { name: "Hitesh", age: 10 };
    console.log(user.name);
    ```
- Compile to JavaScript:
    ```
    tsc intro.ts
    ```
    → Generates `intro.js` (same code, just formatted).
- Run JS (optional):
    ```
    node intro.js
    ```

6) Errors & Hints
-----------------
- TS warns if you reference missing props (e.g., `user.email`).
- Warnings don’t stop compilation — JS is still produced.
- Later, `tsconfig.json` lets you make TS stricter (e.g., stop build on errors).

7) The Playground & tsconfig
----------------------------
- [TypeScript Playground](https://www.typescriptlang.org/play) shows:
    - Left = your TS.
    - Right = generated JS.
    - Settings for target JS version, JSX, strictness, etc.
- In real apps, you’ll configure these in `tsconfig.json`.

8) What’s New / Best Practice (3 yrs later)
-------------------------------------------
- `tsc` CLI still works the same.
- For projects, use:
    ```
    npm install --save-dev typescript
    npx tsc --init
    ```
    → Creates `tsconfig.json`.
- Consider `tsx` or `bun` for running TS directly without manual compilation (optional).
- Keep `typescript` version updated (currently ~5.x).

KEY TAKEAWAY
------------
TypeScript is installed via npm.  
- Use a **global install** to experiment.
- Use a **dev dependency + tsconfig** in real projects.  
TS compiles your `.ts` → `.js` so only JavaScript runs in production.
