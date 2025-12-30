# Lecture 1: What is EJS?

## What is EJS?

- **EJS** stands for **Embedded JavaScript**.
- It lets you **embed JavaScript directly inside HTML**.
- EJS files use the `.ejs` extension.
- It is the **most commonly used templating engine** with **Node.js + Express**.

---

## Why Do We Need EJS?

Previously:

- We used HTML forms to send data (like a name) to the server.
- The server received this data using `req.body`.
- But **plain HTML cannot change dynamically** based on server data.

Problem:

- We want to take data from the server (like a user’s name or the current day)
- And **display it inside HTML**

Bad solution ❌:

- Using `res.send()` with lots of HTML inside JavaScript
- This makes `index.js` messy and hard to maintain

Good solution ✅:

- Use **templating** to keep:
  - HTML & CSS → frontend
  - JavaScript logic → backend

This idea is called **Separation of Concerns**.

---

## What is a Templating Language?

- A templating language allows you to **inject dynamic data into HTML**.
- Popular templating engines:
  - EJS (JavaScript)
  - Handlebars
  - Pug
  - Jinja (Python)
  - Twig (PHP)

👉 For Express + Node.js, **EJS is the most common choice**.

---

## How EJS Works (Simple Explanation)

- An EJS file is **mostly HTML**
- But it allows **small pieces of JavaScript** inside special tags
- Example use cases:
  - Display variables
  - Run loops (`for`)
  - Make conditional logic (`if`)

This allows:

- Server → sends data
- EJS → inserts data into HTML
- Browser → shows final page

---

## Why `res.render()` is Important

- `res.sendFile()` → only works with **static files**
- EJS files are **dynamic**
- So we use:

```js
res.render("index.ejs", {
  name: "Angela",
});
```

What happens:

- Server sends an object (`{ name: "Angela" }`)
- EJS can access `name` and display it in HTML

---

## Passing Data from Server to EJS

1. Server receives or creates data
2. `res.render()` sends data as an object
3. Keys in the object become variables in EJS

Example:

```js
res.render("index.ejs", {
  dayType: "weekday",
  advice: "Time to work hard",
});
```

In EJS:

```ejs
<%= dayType %>
<%= advice %>
```

---

## EJS Syntax Basics

- Output value:

```ejs
<%= variableName %>
```

This prints the value directly into HTML.

---

## Required Folder Structure

EJS **must** follow this structure:

```
project-folder/
│── index.js
│── views/
│   └── index.ejs
```

---

## Installing EJS Support in VS Code

- Install **EJS Language Support** by **DigitalBrainStem**
- This gives:

  - Syntax highlighting
  - Auto-suggestions
  - Easier editing

---

## Mini Project: Weekday vs Weekend Website

### Goal

- Show a message depending on the day:

  - Weekday → “Time to work hard”
  - Weekend → “Time to have fun”

---

### Steps Overview

1. Create project folder
2. Initialize npm
3. Install Express & EJS
4. Set project type to ES module
5. Create:

   - `index.js`
   - `views/index.ejs`

6. Use `res.render()` to send data
7. Use EJS to display it

---

## Using JavaScript Date Logic

```js
const today = new Date();
const day = today.getDay();
```

- `getDay()` returns:

  - `0` → Sunday
  - `6` → Saturday

- Weekend logic:

```js
if (day === 0 || day === 6) {
  // weekend
}
```

---

## Dynamic Logic Example (Server Side)

```js
let type = "a weekday";
let adv = "It's time to work hard.";

if (day === 0 || day === 6) {
  type = "the weekend";
  adv = "It's time to have fun.";
}

res.render("index.ejs", {
  dayType: type,
  advice: adv,
});
```

---

## EJS Display Example

```ejs
<h1>
  Hey, it's <%= dayType %>, <%= advice %>!
</h1>
```

---

## Key Takeaways (Very Important)

- EJS lets you **send data from server → HTML**
- Use `res.render()` instead of `res.send()`
- EJS files go inside the **views** folder
- Data is passed as a **JavaScript object**
- EJS inserts values using `<%= %>`
- This keeps code **clean, organized, and scalable**

---

## What’s Next?

- Learn different **EJS tags**
- Learn how to **run full JavaScript logic inside HTML**

🎉 If this makes sense, great job!
If not, rewatch the lesson , EJS is simpler than it looks 🙂
