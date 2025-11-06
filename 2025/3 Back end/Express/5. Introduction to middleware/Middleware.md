# ⚙️ Lecture: Introduction to Middleware

## 🧠 Concept Overview

In this lecture, we learn about **Express Middleware** — the “man in the middle” that sits between an **incoming HTTP request** and the **final route handler** (like GET or POST). Middleware functions can modify requests, add data, perform checks, or handle errors before passing control to the next part of the app.

---

## 🔄 What Is Middleware?

Middleware functions in Express run **after** a request arrives but **before** it reaches the final route logic.

### 🧩 Middleware Can:

- **Pre-process requests:** Modify or enrich incoming request data before handling.
- **Log activity:** Track request time, method (GET, POST, etc.), and status.
- **Authenticate:** Verify that the request comes from an authorized user before allowing access.
- **Handle errors:** Catch and respond to problems before they reach route handlers.

---

## 🧰 Common Middleware Example – `body-parser`

One of the most frequently used middleware packages in Express is **Body Parser**, which extracts and formats data from the **body** of an incoming request (especially for HTML forms).

### 🧩 What Body Parser Does:

- Parses the **body** of an HTTP request (like form data).
- Adds a new property, `req.body`, which holds the parsed data.
- Allows easy access to submitted form data in POST requests.

---

## 🧾 Example: HTML Form

An HTML form might look like this:

```html
<form action="/submit" method="POST">
  <label>Street Name:</label>
  <input type="text" name="street" required />

  <label>Pet Name:</label>
  <input type="text" name="pet" required />

  <input type="submit" value="Submit" />
</form>
```

When a user fills out this form and presses **Submit**, it sends a **POST request** to the `/submit` route.

---

## 🗂️ Express Project Structure

This project introduces a **`public` folder**, used for serving **static files** (HTML, CSS, images).
We’ll use `res.sendFile()` to send a full HTML page instead of plain text.

### Example:

```js
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```

> 🧭 The combination of `dirname` and `fileURLToPath` dynamically determines the correct path to your files — important when hosting online.

---

## 🧩 Installing and Using Body Parser

### Step 1 – Install:

```bash
npm install body-parser
```

### Step 2 – Import and Use:

```js
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
```

- The `use()` method applies middleware globally to all routes.
- `{ extended: true }` tells Express to use the **qs** library for parsing nested objects.

### Step 3 – Access Parsed Data:

```js
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received successfully!");
});
```

---

## 🧠 Understanding the Flow

1. **User submits** form (e.g., street and pet name).
2. Form sends a **POST request** to `/submit`.
3. **Body Parser middleware** intercepts the request and parses the data.
4. Middleware adds the parsed data to `req.body`.
5. The `/submit` route handler logs or processes that data.

Without Body Parser → `req.body` is `undefined`
With Body Parser → `req.body` becomes:

```js
{
  street: "Aberdeen",
  pet: "Rabbit"
}
```

---

## 🧪 Testing with Postman

To simulate form submissions without using a browser:

1. Set method → **POST**
2. URL → `http://localhost:3000/submit`
3. Under the **Body** tab → choose **x-www-form-urlencoded**
4. Add key-value pairs (e.g., `street=Aberdeen`, `pet=Rabbit`)
5. Click **Send**, and check your server console to see the logged object.

---

## 🧱 Code Summary

```js
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Use middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Handle POST requests
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 🧭 Summary

✅ **Middleware** sits between request and response — used for pre-processing, logging, auth, or error handling.
✅ **Body Parser** is a middleware that makes form data accessible through `req.body`.
✅ Use `app.use()` to register middleware before route handlers.
✅ You can serve HTML files dynamically with `res.sendFile()`.
✅ Test your POST routes easily using **Postman** or your form.

