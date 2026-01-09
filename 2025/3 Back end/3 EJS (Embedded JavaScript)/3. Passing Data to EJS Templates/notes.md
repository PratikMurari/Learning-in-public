# Lecture 3: Passing Data to EJS Templates

## Overview

In this lesson, we learn how to **pass data back and forth** using EJS:

- **Server → Client (EJS template)**
- **Client → Server (via forms)**

We also learn about a **common EJS error** and how to fix it using `locals`.

---

## Passing Data: Server → EJS (Client)

### Basic Idea

- Use `res.render()` to send data from the server to an EJS file
- Data is sent as a **JavaScript object**
- EJS can access the data using its keys

### Example (Server Side)

```js
res.render("index.ejs", {
  name: "Angela",
});
```

### Example (EJS Side)

```ejs
<h1>Hello <%= name %></h1>
```

📌 Result in browser:

```
Hello Angela
```

---

## Passing Complex Data (Arrays)

You can also send arrays, objects, etc.

### Server

```js
res.render("index.ejs", {
  fruits: ["Apple", "Banana", "Cherry"],
});
```

### EJS

```ejs
<ul>
  <% fruits.forEach(function(fruit) { %>
    <li><%= fruit %></li>
  <% }); %>
</ul>
```

✔ Loops work normally
✔ Output uses `<%= %>`

---

## Common EJS Problem: Missing Data

### The Problem

If EJS expects data but the server **does not send it**, your app will crash.

Example:

```ejs
<% fruits.forEach(fruit => { %>
  <li><%= fruit %></li>
<% }) %>
```

But server forgets to send `fruits`.

❌ Result: **ReferenceError – variable not defined**

---

## Why This Happens

- EJS does **not safely check** if a variable exists
- It tries to use it immediately
- If missing → crash

---

## The Solution: `locals`

### What is `locals`?

- `locals` contains **all variables passed via `res.render()`**
- `locals` **always exists**
- You can safely check if something exists using it

### Safe Check Example

```ejs
<% if (locals.fruits) { %>
  <% fruits.forEach(fruit => { %>
    <li><%= fruit %></li>
  <% }) %>
<% } %>
```

✔ Prevents crashes
✔ Recommended for optional data

---

## Passing Data: Client → Server

### How It Works

- Use an HTML form in EJS
- Use a **POST request**
- Use `body-parser` middleware
- Access data via `req.body`

---

### Example Form (EJS)

```ejs
<form action="/" method="POST">
  <input name="fName" placeholder="First name" />
  <input name="lName" placeholder="Last name" />
  <button type="submit">OK</button>
</form>
```

---

### Example POST Route (Server)

```js
app.post("/", function (req, res) {
  const numLetters = req.body.fName.length + req.body.lName.length;

  res.render("index.ejs", {
    numberOfLetters: numLetters,
  });
});
```

✔ Data flows from form → server
✔ Server processes data
✔ Result sent back to EJS

---

## Mini Project: Name Length Counter

### Goal

- Ask user to enter their name
- Count total number of letters
- Display result dynamically

---

## Logic Breakdown

1. **First visit**

   - No data exists
   - Show instruction message

2. **After form submission**

   - Server calculates letter count
   - Passes number back to EJS
   - EJS shows result

---

## Conditional Rendering in EJS

```ejs
<% if (locals.numberOfLetters) { %>
  <h1>There are <%= numberOfLetters %> letters in your name</h1>
<% } else { %>
  <h1>Write your name below 👇</h1>
<% } %>
```

✔ Uses `locals` to avoid crashes
✔ Shows different content based on state

---

## Important Debug Tip

If things don’t work:

- Refresh browser
- Restart server
- Console log `req.body`
- Check variable names carefully

---

## Key Takeaways

- `res.render()` sends data **server → EJS**
- Forms + POST send data **client → server**
- EJS crashes if variables don’t exist
- Use `locals.variableName` for safe checks
- EJS is powerful but needs careful handling

---

## What’s Next?

- Using **Layouts and Partials**
- Avoid repeating headers, footers, and common UI

🎉 Great job! You now understand two-way data flow with EJS.
