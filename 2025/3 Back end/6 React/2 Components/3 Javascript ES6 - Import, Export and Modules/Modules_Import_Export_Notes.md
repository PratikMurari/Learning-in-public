
📦 Modules, Import & Export in JavaScript (ES6)

✅ What is a Module?
- A module is just a separate file with its own code.
- You can export stuff from a module and import it into another file.
- Helps organize code and keep files small and readable.

📥 Import & Export Basics
- You use `export` to send data out of a file.
- You use `import` to bring that data into another file.

📌 Example: math.js
// math.js
const pi = 3.1415962;
export default pi;

- This exports the `pi` value as the default export from `math.js`.

🧾 Using It in Another File
// index.js
import pi from './math.js';

- You can now use `pi` in your code.
- The name `pi` can be anything – it's up to you!

🔄 Adding More Exports
// math.js
const pi = 3.1415962;
function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}

export default pi;
export { doublePi, triplePi };

- Now you are exporting:
  - `pi` as the default
  - `doublePi` and `triplePi` as named exports

🛬 Importing Named Exports
import pi, { doublePi, triplePi } from './math.js';

- `pi` is the default export
- `doublePi` and `triplePi` must match their original names exactly

💡 Important Rules
- Only one default export per file
- Named exports must be imported using their exact names
- You can combine default and named exports in one line

✨ Wildcard Import
import * as piModule from './math.js';

- Brings in everything as an object called `piModule`
- You can then access:
  - piModule.default
  - piModule.doublePi()
  - piModule.triplePi()

⚠️ Not recommended in most cases—brings in everything even if not needed.

🧠 Why Use Modules?
- Keeps code organized
- Makes debugging easier
- Allows reuse of code across files
- Essential for React apps and large JavaScript projects

✅ Conclusion
- Use `export default` for the main value from a file
- Use `export { ... }` for additional functions or constants
- Import them using `import ... from`
- Keep files clean and modular
