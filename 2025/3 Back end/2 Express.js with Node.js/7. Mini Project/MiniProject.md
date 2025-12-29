# Lecture 7: Secrets Access Project

## Overview

In this final Express project of the module, you’ll combine everything you’ve learned so far —  
**Express, middleware, routing, and body parsing** — to build a small, interactive website called **“Secrets.”**

The goal:

- A user visits a homepage with a password form.
- If they type the correct password → they gain access to the secret page.
- If they type the wrong password → they’re redirected back to the homepage.

This project reinforces **request handling, middleware flow, and authentication logic** using everything from Lectures 2–6.

---

## 1. Project Setup

When you download the project folder (`Secrets Project`), you’ll see:

Secrets Project/
│
├── public/
│ ├── index.html # Homepage with password form
│ └── secrets.html # Page with the secrets
│
└── index.js # Your main server file

### Files Description

- **index.js** → Empty file where you’ll write all your Express code.
- **public/index.html** → The homepage containing the form where users enter the password.
- **public/secrets.html** → The secret page shown only if the password is correct.

Before you begin coding:

```bash
npm install
```

This installs `express` and `body-parser` (as listed in `package.json`).

---

## 2. Understanding the Goal

When the user visits:

```
http://localhost:3000/
```

they’ll see a simple homepage with:

```html
<h1>Enter the Secret Password</h1>
<form action="/check" method="POST">
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>
```

Here’s what should happen:

1. When the user types the password `"ILoveProgramming"` and clicks submit:

   - A POST request goes to the `/check` route.
   - The server checks if the password is correct.
   - If yes → serve `secrets.html`.

2. If the password is wrong:

   - Redirect the user back to the homepage (`index.html`).

---

## 3. Step-by-Step Solution Explanation

Let’s go through the final code **line by line** and explain how each part works.

### Step 1: Import Required Modules

```javascript
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
```

- `express`: the framework we use to build the backend.
- `body-parser`: middleware to read form data.
- `path` + `fileURLToPath`: used to generate file paths dynamically (important when hosting online).

---

### Step 2: Configure Directory and App

```javascript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
```

- `__dirname` helps Express find where files (like `index.html`) are located.
- We set `port` to 3000 — your local development port.

---

### Step 3: Create a Variable to Track Authentication

```javascript
let userIsAuthorized = false;
```

- By default, users are _not authorized_.
- We’ll change this value once they type the correct password.

---

### Step 4: Use Middleware to Parse Form Data

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```

- This middleware parses incoming form data (`application/x-www-form-urlencoded`) into a usable object in `req.body`.

**Example:**
If the user submits the form with:

```
password=ILoveProgramming
```

Then `req.body` will look like:

```javascript
{
  password: "ILoveProgramming";
}
```

---

### Step 5: Create the Password Check Middleware

```javascript
function passwordCheck(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    userIsAuthorized = true;
  } else {
    userIsAuthorized = false;
  }
  next(); // move to next step
}

app.use(passwordCheck);
```

#### 💡 How This Works:

- This middleware runs before the route handlers.
- It checks if the password from the form matches the correct one.
- Sets `userIsAuthorized` accordingly.
- Calls `next()` to continue the flow.

If you forget `next()`, your request will never reach your routes (the page will just hang).

---

### Step 6: Handle the Routes

#### **GET Route → Homepage**

```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```

- When users visit the root URL, serve the homepage (the password form).

#### **POST Route → Handle Password Check**

```javascript
app.post("/check", (req, res) => {
  if (userIsAuthorized) {
    res.sendFile(__dirname + "/public/secrets.html");
  } else {
    res.redirect("/"); // send them back to the homepage
  }
});
```

**Explanation:**

- When the form is submitted, Express receives a POST request to `/check`.
- If the password is correct (`userIsAuthorized === true`):

  - The server sends back the secret page.

- If not:

  - The server uses `res.redirect("/")` to send the user back to the homepage.

> 🧭 Note: `res.redirect()` is a convenient shortcut.
> It tells the browser to visit another route without sending a new HTML file manually.

---

### Step 7: Start the Server

```javascript
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

- Launches your Express app at `localhost:3000`.

---

## 4. Full Code (Clean Version)

Here’s how the final code looks in one piece:

```javascript
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

let userIsAuthorized = false;

// Middleware: Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware: Check password
function passwordCheck(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    userIsAuthorized = true;
  } else {
    userIsAuthorized = false;
  }
  next();
}

app.use(passwordCheck);

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorized) {
    res.sendFile(__dirname + "/public/secrets.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

---

## 5. Extra Notes and Tips

### 💡 Alternative: Using Express’s Built-in Parser

Since Express 4.16+, you don’t need to install `body-parser` separately —
it’s already included:

```javascript
app.use(express.urlencoded({ extended: true }));
```

This does the same thing as:

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```

You can choose either approach.
Many developers still prefer importing `body-parser` explicitly for clarity.

---

### 🧩 Why This Project Matters

This “Secrets Access” mini-project ties everything together:

- **Middleware Flow:** You wrote and used your own `passwordCheck()` middleware.
- **Routing:** You handled GET and POST routes.
- **Authorization Logic:** You checked form data to control access.
- **HTML Serving:** You used `res.sendFile()` and `res.redirect()` effectively.
- **Modular Thinking:** You reused techniques from previous lectures (Body Parser, Path setup, etc.).

---

## 6. Common Mistakes to Avoid

1. **Forgetting `next()`** inside middleware → server hangs.
2. **Wrong input name** in HTML form → `req.body.password` undefined.
3. **Middleware order issue** → make sure `body-parser` comes _before_ your password middleware.
4. **Incorrect file paths** → use `__dirname` + relative path for `res.sendFile()`.

---

## ✅ Summary

| Concept          | What You Learned                        |
| ---------------- | --------------------------------------- |
| Express Routing  | Handling GET and POST requests          |
| Middleware       | Creating and chaining custom middleware |
| Body Parsing     | Reading form data from `req.body`       |
| Redirection      | Using `res.redirect()` for navigation   |
| File Paths       | Serving HTML using dynamic paths        |
| Logical Thinking | Using conditions to authorize users     |

---

### 🧠 Key Takeaway:

This project is simple, but it models **real-world backend logic**:

- Authentication (password check)
- Authorization flow (access control)
- Middleware usage
- Route redirection

Once you understand how this works, you’ll be ready for more advanced topics like **EJS templating**, **sessions**, and **databases** — all of which build directly on this foundation.

---

✨ **Next Up:**
In the next module, you’ll learn **EJS (Embedded JavaScript Templates)** —
the tool that lets you dynamically generate HTML using backend data.
It’s the next step toward building _fully interactive web apps_.
