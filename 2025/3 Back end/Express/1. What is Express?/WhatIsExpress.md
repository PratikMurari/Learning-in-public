# Lecture 1: What is Express?

## Overview

This lecture introduces the Express.js framework, what it is, how it relates to Node.js, and why developers prefer it for building web backends. It compares Node alone vs. Node with Express and explains the advantages of using Express.

## Key Concepts

- **Node.js** is a runtime environment for executing JavaScript outside the browser.
- **Express.js** is a web framework built on top of Node.js that simplifies backend development.
- **Why Express?**
  - Simplifies and organizes backend code.
  - Reduces boilerplate.
  - Enables modularity and readability.
  - Provides features like **middleware**.
- **Analogy:** Node is like a manual screwdriver; Express is the electric one — both work, but one makes the job much easier.

## Detailed Notes

### Node.js: The Foundation

- **Definition:** Node.js lets us run JavaScript on our computers (outside the browser).
- It’s **not a framework** but a **runtime environment**.
- Used for:
  - Web servers and backends.
  - IoT devices (e.g., smart toasters).
  - Desktop applications (e.g., Visual Studio Code is built with Node).

### The Limitation of Node.js Alone

- Node can do many things but isn’t specialized for one.
- When using Node for web servers, the code becomes **verbose** and **hard to maintain**.
- Developers must handle:
  - Routing.
  - Request and response parsing.
  - Headers, status codes, and MIME types manually.
- Example analogy: Node is like assembling furniture with a manual screwdriver — it works, but it’s inefficient.

### Enter Express.js

- Express.js is a **framework built on top of Node**.
- Purpose: Makes building web servers **faster, easier, and more structured**.
- Handles most of the lower-level setup for you.
- Features:
  - Cleaner, modular syntax.
  - Built-in routing.
  - Middleware support (think “Lego pieces” you can add to extend functionality).
- Real-world example: Almost every professional Node backend uses Express.

### Why Developers Love Express

- **Less code:** You can build the same app with a fraction of the lines.
- **Better readability:** Code structure is easy to follow.
- **Flexibility:** Add features using middleware.
- **Popularity:** Consistently ranks as the most used Node.js backend framework in developer surveys.

## Code Snippets

### Simple Website Using Only Node.js

```javascript
// Basic HTTP server with Node.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>About Us</h1>");
    res.end();
  } else {
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(3000);
```

**Explanation:** This code manually handles routing using Node’s `http` module. It’s functional but verbose and repetitive.

---

### The Same Website Using Express.js

```javascript
// Simple Express server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Explanation:** Express abstracts away most of the boilerplate, providing clean, readable, and modular routing.

## Summary & Takeaways

The main thing to remember from this lecture is that **Express.js simplifies backend development with Node.js** by handling the repetitive setup and providing an intuitive API for routing and middleware.

This connects to the previous modules on Node.js by showing how Express builds on top of Node to focus specifically on **web server development**.

This will be useful for **all upcoming lessons**, where we’ll start building actual backends using Express’s streamlined structure.
