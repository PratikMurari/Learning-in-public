# Lecture 6: Custom Middleware

## Overview

In this lesson, we learn how to:

- Use a new built-in middleware called **Morgan** (for logging).
- Understand how middleware functions work inside Express.
- Write our **own custom middleware** from scratch.
- Combine everything (including `body-parser`) to build the **Band Name Generator** project.

---

## Key Concepts

- **Middleware:** A function that sits _between_ the request coming in and the route handlers (`app.get()`, `app.post()`, etc.).
- **`app.use()`:** The method that loads and applies middleware to every request.
- **Types of Middleware:**
  - _Pre-processing_ (e.g., `body-parser`)
  - _Logging_ (e.g., `morgan`)
  - _Authentication_
  - _Error-handling_
- **The `next()` function:** Tells Express to move on to the next middleware or route handler.

---

## Detailed Notes

### 1. Introducing Morgan — A Logging Middleware

- **What is Morgan?**

  - It’s a popular middleware for logging HTTP requests.
  - It records useful info like:
    - Time of request
    - HTTP method (GET, POST, etc.)
    - Requested URL
    - Status code (200, 404, etc.)
    - Response time

- **Why use it?**

  - Logging helps track how your server is being used.
  - It’s essential for debugging and understanding server performance.

- **Installation & Setup:**

  1. Install it:
     ```bash
     npm install morgan
     ```
  2. Import it into your file:
     ```javascript
     import morgan from "morgan";
     ```
  3. Use it as middleware:
     ```javascript
     app.use(morgan("tiny"));
     ```
     - `"tiny"` is one of Morgan’s _predefined formats_.  
       Other options: `"combined"`, `"common"`, `"dev"`, `"short"`.
     - `"tiny"` gives minimal output (good for development).

- **How it Works:**
  - When you send a request (like `GET /`), Morgan runs _before_ your route handler.
  - It prints a line in your console like:
    ```
    GET / 200 5ms
    ```
    That means:  
    → A GET request to `/` returned status 200 in 5 milliseconds.

**Key Takeaway:** Morgan gives you a live, automatic log of all requests passing through your Express app — before any handlers run.

---

### 2. Writing Your Own Middleware

Now that you’ve used pre-built middlewares like `body-parser` and `morgan`,  
you’ll learn how they actually work internally by writing your own.

#### How Middleware Works

- Every middleware function in Express takes **three parameters**:

  ```javascript
  req, res, next;
  ```

- `req`: the incoming request object

- `res`: the outgoing response object

- `next`: a function that passes control to the _next middleware or route_

- Middleware runs **in the order** you register it using `app.use()`.

---

### 3. Creating a Custom Logger Middleware

We’ll create a logger that prints the **request method** and **request URL** for every incoming request.

#### Step 1: Define the middleware function

```javascript
function logger(req, res, next) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next();
}
```

- `req.method` → tells you if it’s a GET, POST, etc.
- `req.url` → tells you the path (like `/`, `/submit`, etc.)
- `next()` → _must_ be called, otherwise the request will never move forward.

#### Step 2: Register it with Express

```javascript
app.use(logger);
```

- This tells Express: “Before handling any routes, run `logger` first.”

#### Step 3: Test It

- Start your server with `nodemon index3.js`
- Try sending:

  - A **GET** request to `/`
  - A **POST** request to `/submit`

- You should see in the console:

  ```
  Request Method: GET
  Request URL: /
  Request Method: POST
  Request URL: /submit
  ```

#### Step 4: Don’t Forget `next()`

If you forget to include `next()`, the request will **hang forever** —
the server will never reach your route handlers because it’s “stuck” in the middleware.

Example of what _not_ to do:

```javascript
function logger(req, res) {
  console.log("Request Method:", req.method);
  // Forgot next() ❌
}
```

Your app will freeze if you do this.

---

### 4. Combining Everything — The Band Name Generator

Let’s put all this middleware knowledge into practice!

#### What the App Does:

- Serves an HTML form with two text fields:

  - Street Name
  - Pet Name

- When the form is submitted, a POST request is made to `/submit`.
- The server takes both fields, combines them, and sends back a “band name.”

#### Steps Overview:

1. **Serve the index.html page**

   ```javascript
   import path from "path";
   import { fileURLToPath } from "url";

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   app.get("/", (req, res) => {
     res.sendFile(__dirname + "/public/index.html");
   });
   ```

   Explanation:

   - `__dirname` helps us find the correct path, even when deployed to the cloud.
   - `res.sendFile()` sends the HTML file back to the client.

2. **Use `body-parser` to handle form data**

   ```javascript
   import bodyParser from "body-parser";
   app.use(bodyParser.urlencoded({ extended: true }));
   ```

   - Parses incoming form data and makes it available as `req.body`.

3. **Create a middleware to generate the band name**

   ```javascript
   function bandNameGenerator(req, res, next) {
     req.bandName = req.body.street + req.body.pet;
     next();
   }

   app.use(bandNameGenerator);
   ```

4. **Handle the POST request**

   ```javascript
   app.post("/submit", (req, res) => {
     res.send(`<h1>Your Band Name:</h1><h2>🎸 ${req.bandName}</h2>`);
   });
   ```

5. **Important: Order Matters!**

   - `body-parser` must come **before** `bandNameGenerator`, because:

     - `bandNameGenerator` uses `req.body`
     - If you try to access it before parsing, you’ll get `undefined`

   - Correct order:

     ```javascript
     app.use(bodyParser.urlencoded({ extended: true }));
     app.use(bandNameGenerator);
     ```

---

## Code Snippets

### ✅ Using Morgan

```javascript
import morgan from "morgan";
app.use(morgan("tiny"));
```

**Explanation:** Automatically logs every incoming request in a clean, readable format.

---

### ✅ Custom Logger Middleware

```javascript
function logger(req, res, next) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next();
}

app.use(logger);
```

**Explanation:** Logs the method and URL of every request before passing control to the next handler.

---

### ✅ Band Name Generator Example

```javascript
app.post("/submit", (req, res) => {
  const street = req.body.street;
  const pet = req.body.pet;
  res.send(`<h1>Your Band Name:</h1><h2>🎸 ${street}${pet}</h2>`);
});
```

**Explanation:** Uses form data from the client to generate and send a fun response.

---

## Summary & Takeaways

- Middleware are **functions that run between the request and response**.
- The **order** of middleware matters — Express runs them top to bottom.
- Always call `next()` to continue the request flow.
- `morgan` is great for logging.
- `body-parser` helps extract form data.
- You can (and should) write your **own middleware** to handle custom logic.
- The Band Name Generator exercise ties everything together — serving static files, parsing form data, and chaining middleware.

---

✅ **Connects to Previous Lecture:**
This builds directly on the “Introduction to Middleware” lesson where you first used `body-parser`.
Now, you see how to use multiple middlewares — and even write your own.

💡 **Why It’s Useful:**
Understanding middleware is the key to mastering Express.
Every real-world Express app uses it — for authentication, logging, validation, or error handling.
