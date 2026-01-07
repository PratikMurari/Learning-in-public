# Lecture 4: EJS Partials and Layouts

## Overview

In this lesson, we learn:

- What **partials** and **layouts** are
- How to **reuse code** in EJS
- How to add **CSS, images, and other static files**
- How to build a **multi-page website** using Express + EJS

---

## The Problem: Repeated Code

When building real websites:

- Every page needs:
  - `<head>` section
  - Stylesheets
  - Navbar
  - Footer
- Copy-pasting this into every `.ejs` file is:
  - Messy ❌
  - Hard to maintain ❌
  - Error-prone ❌

👉 Solution: **Partials**

---

## What Are EJS Partials?

- **Partials** are reusable pieces of EJS files
- Common examples:
  - Header
  - Footer
  - Navbar

They allow you to:

- Write code **once**
- Reuse it across **many pages**

---

## How Partials Work

EJS provides the `include` tag:

```ejs
<%- include("partials/header.ejs") %>
```

This:

- Injects the content of `header.ejs`
- Exactly where the tag appears

---

## Typical Folder Structure

```
project/
│── index.js
│── public/
│   ├── styles/
│   │   └── layout.css
│   └── images/
│
│── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
```

📌 Paths in `include` are **relative to the `views` folder**

---

## Using Partials in Pages

### Example: `index.ejs`

```ejs
<%- include("partials/header.ejs") %>

<h1>Home Page</h1>

<%- include("partials/footer.ejs") %>
```

✔ Header and footer are reused
✔ Only content changes per page

---

## Static Files (CSS, Images, JS)

### What Are Static Files?

- Files that **do not change**
- Examples:

  - CSS
  - Images
  - Fonts
  - Favicons

---

## The `public` Folder

- All static files go inside `public`
- Express must be told where this folder is

### Server Setup

```js
app.use(express.static("public"));
```

This tells Express:

> “Everything inside `public` is static.”

---

## Linking Static Files in EJS

### Example: CSS Link

```html
<link rel="stylesheet" href="/styles/layout.css" />
```

Why this works:

- `layout.css` is inside `public/styles/`
- Path starts **from `public`**

---

## Why This Is Important

Dynamic pages:

- Generated via routes (`/`, `/about`, `/contact`)

Static files:

- Do NOT use routes
- Served directly from `public`

---

## Creating a Multi-Page Website

### Navigation Links

```html
<a href="/about">About</a> <a href="/contact">Contact</a>
```

Each link:

- Triggers a **GET request**

---

## Handling Routes (Server Side)

```js
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
```

✔ Each page = one route
✔ Simple and clean

---

## Adding Partials to All Pages

### `about.ejs`

```ejs
<%- include("partials/header.ejs") %>

<h1>About Us</h1>

<%- include("partials/footer.ejs") %>
```

### `contact.ejs`

```ejs
<%- include("partials/header.ejs") %>

<h1>Contact Us</h1>

<%- include("partials/footer.ejs") %>
```

✔ Same styling
✔ Same navbar
✔ Same footer
✔ Zero duplication

---

## Key Differences: Terms Explained

### Templating

- Injecting dynamic data using EJS tags

### Partials

- Reusable chunks of UI (header, footer)

### Layouts (Conceptually)

- Overall page structure
- Built using partials in EJS

---

## Key Takeaways

- Use **partials** to avoid repeated code
- Static files live in the **public** folder
- Use `express.static()` to serve them
- Navigation = multiple GET routes
- `include` paths are relative to `views`
- Clean, scalable, professional setup 🚀

---

## What’s Next?

- Final project: **Band Name Generator**
- Putting everything together 🎸

👏 You now know how real-world EJS apps are structured!