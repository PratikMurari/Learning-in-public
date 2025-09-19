SECTION 2: TYPESCRIPT IS NOT WHAT YOU THINK
===========================================

0) TypeScript Playground
------------
https://www.typescriptlang.org/play

1) Core Idea
------------
- TypeScript is **not** a brand-new programming language on its own.
- It’s mainly a **development tool** built on top of JavaScript.
- Its main job: **static checking** (finding potential errors while you write code).

💡 Static checking = analyzing code as you type, instead of waiting for runtime errors.

2) Static Checking vs JavaScript
---------------------------------
- JavaScript accepts almost anything at write time; errors only show when you run it.
- TypeScript analyzes your code and warns you early (squiggly lines in your editor).
- Example:
    - If you access `user.email` but `email` doesn’t exist, TS warns you immediately.
    - You *can still* compile that code to JS — TS doesn’t block you, it just advises.

3) “Does TS Write JS For You?”
------------------------------
- Myth: “TypeScript writes JavaScript code for you.”  
  → Reality: You write **more** code in TS (types, interfaces, etc.) to make your JS safer.
- TS code is **transpiled** (converted) into clean JavaScript before it runs.

4) File Types
-------------
- `.ts` = normal TypeScript files.
- `.tsx` = TypeScript + JSX (for React components).
- After writing, TS compiler produces JavaScript for browsers/Node.

5) Key Truth
------------
- TypeScript is a **wrapper/tool** around JavaScript.
- Your production app is still 100% JavaScript.
- TS adds features like `interface`, `union`, `type`, but those exist only at development time (they disappear after compilation).

6) Example From the Transcript
------------------------------
- Declaring an object:
    ```ts
    const user = { name: "Hitesh", age: 10 };
    console.log(user.name);        // OK
    console.log(user.email);       // ❌ Squiggly line: "email" doesn't exist
    ```
- Even though TS warns you, it can still compile → JS might run and fail at runtime.

7) What’s Changed Since Video (3 yrs later)
-------------------------------------------
- The concept (“TS is a dev tool, not a runtime language”) is still true.
- TS 5.x has improved error messages, performance, and stricter options (like `noUncheckedIndexedAccess`).
- The Playground now has better autocomplete and type visualization.

8) Learning Tips
----------------
- Always remember: TS disappears after build. It’s there to make your **authoring** experience better.
- Use the **TS Playground** to see how code converts to JavaScript.
- Enable strict mode in `tsconfig.json` early — it teaches good habits.

KEY TAKEAWAY
------------
TypeScript doesn’t run in production; JavaScript does.
Think of TS as a **“guardian angel”** while you write code — spotting mistakes early and guiding you to cleaner, safer JavaScript.
