// alert("hello");


// You're seeing:

// ```
// ReferenceError: alert is not defined
// ```

// ### ✅ Why this error happens:

// `alert()` is a **browser-specific** function — it’s part of the **Web API** provided by browsers like Chrome or Firefox. But when you run JavaScript using **Node.js**, you're in a **server-side environment**, and `alert` doesn't exist there.

// ---

// ### ✅ How to fix it:

// #### Option 1: **If you're just learning JavaScript and trying out browser code (like `alert()`)**

// 👉 You should run your code **in a browser**, not Node.js.

// Steps:
// 1. Create an HTML file like this:

// ```html
// <!-- alerts.html -->
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Alert Test</title>
// </head>
// <body>
//   <script src="alerts.js"></script>
// </body>
// </html>
// ```

// 2. Make sure `alerts.js` has the line:

// ```js
// alert("hello");
// ```

// 3. Open the `alerts.html` file in your browser — **double click** or right-click → **Open with browser**.

// ✅ You will see the alert box.

// ---

// #### Option 2: **If you're using Node.js, avoid using `alert()`**

// If you're trying to show output in Node.js, use `console.log()` instead:

// ```js
// console.log("hello");
// ```

// Then run:

// ```bash
// node alerts.js
// ```

// ✅ You’ll see: `hello` printed in the terminal.

// ---

// Let me know if you're trying to work in **browser** or in **Node.js**, and I’ll tailor the solution!
