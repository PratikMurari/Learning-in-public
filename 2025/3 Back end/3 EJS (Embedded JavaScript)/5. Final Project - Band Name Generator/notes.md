# Lecture 5: Band Name Generator Project

## Overview

This final project wraps up everything learned in the EJS module:

- EJS templating
- Conditional rendering
- Partials (`header`, `footer`)
- Static files (CSS)
- GET & POST routes
- Passing data between server ↔ client

You build a **fully styled dynamic Band Name Generator**.

---

# 🧱 Project Features

- Random adjective + random noun → generates a band name
- Dynamic copyright year
- Styled UI using CSS in `/public/styles/`
- Reusable header/footer partials
- Fully functional EJS-powered website

---

# 🛠️ Step-by-Step Implementation

## **Step 1: Render the Homepage**

Create the GET route that loads `index.ejs`:

```js
app.get("/", (req, res) => {
  res.render("index.ejs");
});
```

Check in browser → homepage should show:

- Title: “Welcome to the Band Generator”
- A button to generate a name

✔ Functionally ready
❌ No dynamic band name yet

---

## **Step 2: Generate a Random Band Name**

When the button is clicked, it triggers a POST route.

### **Server logic**

Use arrays of adjectives and nouns:

```js
const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
```

Render the same page but pass the generated words:

```js
res.render("index.ejs", {
  adjective: randomAdj,
  noun: randomNoun,
});
```

---

### **EJS logic**

Display the generated words only **if they exist**:

```ejs
<% if (locals.adjective && locals.noun) { %>
  <h1><%= adjective %> <%= noun %></h1>
<% } else { %>
  <h1>Welcome to the Band Generator</h1>
<% } %>
```

⭐ Uses `locals` to prevent crashes when the page loads without data

Click “Generate Name” → output changes each time
Examples:

- boiling hearing
- moral hamburger
- silky oak

---

## **Step 3: Add Styling (Static CSS)**

### 1. Configure static folder:

```js
app.use(express.static("public"));
```

### 2. Link CSS inside `header.ejs`:

```html
<link rel="stylesheet" href="/styles/main.css" />
```

### 3. Include partials in `index.ejs`:

```ejs
<%- include("partials/header.ejs") %>

<!-- Page content here -->

<%- include("partials/footer.ejs") %>
```

✔ Styling applied
✔ Reusable layout
✔ Clean EJS code

---

## **Step 4: Dynamic Footer Year**

Inside `footer.ejs`:

```ejs
<p>© <%= new Date().getFullYear() %> Band Generator</p>
```

Uses:

- `new Date()`
- `.getFullYear()` → current year automatically updates

Example:

```
© 2024 Band Generator
```

---

# 🎉 Final Result

You now have:

- A working, styled band name generator
- Uses:

  - EJS templates
  - Partials
  - Static files
  - Dynamic rendering
  - Random logic
  - Clean file structure

This project reinforces the full EJS workflow end-to-end.

---

# 📁 Final Project Folder Structure (Important)

```
project/
│── index.js
│── public/
│   └── styles/
│       └── main.css
│
│── views/
│   ├── index.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
│── package.json
```

Everything is organized, clean, and scalable.

---

# 🧠 Key Takeaways

- EJS lets you combine HTML + JavaScript cleanly
- Use **partials** to avoid repeated markup
- Use **express.static** to serve CSS & images
- Use `locals` to avoid crashes on missing data
- Use GET routes for pages, POST routes for actions
- Always test incrementally (like Angela demonstrates!)

---

# 🚀 You’ve Completed the EJS Module!

You now know how to build dynamic Node.js websites using EJS.

Time to level up and build even more powerful full-stack apps!
If you invent a cool band name like **“easy-going gerbil”**, don’t forget to share it 😉🎵
