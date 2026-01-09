# Lecture 2: EJS Tags

## Overview

In this lesson, we go deeper into **EJS syntax** and learn about the **different EJS tags**.
Each tag has a different purpose, depending on whether we want to:

- Output something
- Run JavaScript logic
- Render HTML
- Write comments
- Reuse files (partials)

---

## Basic Structure of an EJS Tag

All EJS tags follow this structure:

```
<% %>
```

What changes is **what comes after `<%`**.

---

## 1. Output Tag — `<%= %>`

**Purpose:**

- Runs JavaScript **and displays the result in HTML**

**Use when:**

- You want to show a value on the page

**Example:**

```ejs
<h1>Hello <%= name %></h1>
```

If `name = "Angela"`, the page shows:

```
Hello Angela
```

✔ JavaScript is evaluated
✔ Output is shown on the page

---

## 2. Logic / No-Output Tag — `<% %>`

**Purpose:**

- Runs JavaScript code
- **Does NOT display anything**

**Use when:**

- Writing logic like `if`, `for`, `forEach`, etc.

**Example:**

```ejs
<% if (isLoggedIn) { %>
  <p>Welcome back!</p>
<% } %>
```

✔ JavaScript runs
❌ No direct output unless paired with `<%= %>`

---

## 3. Render HTML Tag — `<%- %>`

**Purpose:**

- Outputs content **as real HTML**
- Does NOT escape HTML tags

**Use when:**

- Server sends HTML code as a string

**Example:**

```ejs
<%- htmlContent %>
```

If `htmlContent = "<strong>Hello</strong>"`, it renders as:
**Hello** (bold)

⚠ If you use `<%= %>` instead, it will show the tags as text

---

## 4. Escape Tag — `<%% %>` or `<% %%>`

**Purpose:**

- Displays EJS syntax **as plain text**
- Prevents EJS from executing

**Use when:**

- Teaching or showing EJS examples on a website

**Example:**

```ejs
<%%= name %%>
```

Output:

```
<%= name %>
```

🚫 Rarely used

---

## 5. EJS Comments — `<%# %>`

**Purpose:**

- Adds comments inside EJS files
- Not rendered or executed

**Example:**

```ejs
<%# This is a comment %>
```

✔ Safe
✔ Invisible in final HTML

---

## 6. Include Tag — `<%- include(file) %>`

**Purpose:**

- Inserts another EJS file into the current one
- Used for **headers, footers, layouts**

**Example:**

```ejs
<%- include("footer.ejs") %>
```

📁 Included files must be inside the `views` folder

---

## Example: Looping Through Data

Server sends:

```js
res.render("index.ejs", {
  fruits: ["Apple", "Banana", "Cherry"],
});
```

EJS:

```ejs
<ul>
  <% fruits.forEach(function(fruit) { %>
    <li><%= fruit %></li>
  <% }); %>
</ul>
```

✔ `<% %>` → runs loop
✔ `<%= %>` → outputs each fruit

---

## Exercise Summary

Data sent from server:

- `title`
- `seconds`
- `items` (array)
- `htmlContent`
- Footer file

### Requirements:

1. Show title in `<h1>`
2. Show seconds in `<p>`
3. If seconds are even → show list
4. If seconds are odd → show "No items to display"
5. Render HTML content correctly
6. Include footer using `include`

---

## Key Rules to Remember

- Every **JavaScript line** needs its own EJS tag
- HTML stays outside EJS tags
- Logic → `<% %>`
- Output → `<%= %>`
- HTML output → `<%- %>`
- Reusable files → `include`

---

## Key Takeaways

- EJS allows **logic + HTML together**
- Different tags serve different purposes
- Choosing the correct tag is crucial
- EJS makes templates **dynamic and reusable**

---

## What’s Next?

- Passing data **both ways**
- Client-side vs Server-side data with EJS

👏 If this lesson makes sense, you’re officially comfortable with EJS syntax!
