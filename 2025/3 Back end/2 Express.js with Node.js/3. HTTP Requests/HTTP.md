# Lecture 3: HTTP Requests

## Overview

This lecture introduces HTTP — the communication protocol between clients and servers — and explains the five main HTTP request methods. It also demonstrates how to handle GET requests using Express, how to view incoming requests, and how to use Nodemon for automatic server restarts.

## Key Concepts

- **HTTP (HyperText Transfer Protocol)**: The language computers use to communicate across the internet.
- **Five main HTTP methods**:

  - `GET` — Retrieve data or resources from the server.
  - `POST` — Send new data to the server.
  - `PUT` — Replace an existing resource entirely.
  - `PATCH` — Update part of an existing resource.
  - `DELETE` — Remove a resource.

- **Endpoints**: The specific paths on the server (like `/`, `/about`, `/contact`) where clients send requests.
- **Nodemon** automatically restarts the server when code changes are detected.

## Detailed Notes

### What Is HTTP?

- Stands for **HyperText Transfer Protocol** — a language that allows computers to talk to each other.
- Works like human language — it’s the “protocol” computers use to transfer “thoughts” (data).
- Enables client-server communication across the web.

### Common HTTP Methods

- **GET** — Request data (e.g., loading a webpage).
- **POST** — Send data (e.g., submitting a form).
- **PUT** — Replace an existing resource entirely.
- **PATCH** — Modify part of a resource.
- **DELETE** — Remove a resource.

#### PUT vs PATCH Analogy

- **PUT**: Replace the whole resource (like Amazon sending you a new bicycle).
- **PATCH**: Fix part of the resource (like Amazon sending just a new wheel).

### Handling GET Requests in Express

- When a browser visits `http://localhost:3000`, it automatically sends a **GET request** for the root path (`/`).
- If your Express server doesn’t define a route for `/`, you’ll see:

  ```
  Cannot GET /
  ```

- To fix this, use `app.get()` to tell Express how to respond to that request.

### Setting Up the Express Server

- Repeats the 6 setup steps:

  1. Create folder `3.2 HTTP Requests`
  2. Create `index.js`
  3. Run `npm init -y`
  4. Install Express: `npm i express`
  5. Add `"type": "module"` in `package.json`
  6. Write server code and run it with `node index.js`

### Viewing Request Data

- You can inspect the full request object using:

  ```javascript
  console.log(req);
  ```

- This contains too much info, so use:

  ```javascript
  console.log(req.rawHeaders);
  ```

- Shows details such as:

  - Browser type
  - Operating system
  - Origin domain
  - Request headers

### The Request-Response Cycle

- The **client** (browser) makes a request (like “GET /”).
- The **server** receives the request and sends back a **response** (like “Hello World”).
- Express makes this easy with `res.send()`.

### Using Nodemon

- Without Nodemon, you must stop and restart your server every time you edit code.
- Install globally:

  ```bash
  npm i -g nodemon
  ```

- Run your server with:

  ```bash
  nodemon index.js
  ```

- Nodemon automatically restarts the server when files change.

### Working with Endpoints

- Endpoints = specific “addresses” or “paths” clients can access.
- Root endpoint (`/`) → homepage
- Example endpoints:

  - `/about`
  - `/contact`

- Each endpoint can send a different response.

## Code Snippets

### Basic GET Request Handling

```javascript
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
```

**Explanation:** Handles GET requests at the root path `/` and sends back HTML text.

### Viewing Request Headers

```javascript
app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Hello World</h1>");
});
```

**Explanation:** Logs the raw headers of incoming requests before responding.

### Handling Multiple Endpoints

```javascript
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela.</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44 1234 56789</p>");
});
```

**Explanation:** Each `app.get()` defines a new route and response for different endpoints.

### Running with Nodemon

```bash
nodemon index.js
```

**Explanation:** Automatically restarts your server whenever code changes.

## Summary & Takeaways

The main thing to remember from this lecture is that **HTTP requests** are how clients and servers communicate, and **Express** makes handling these requests simple through methods like `app.get()`.

This connects to the previous lecture by extending the basic server setup to handle actual requests and responses.

This will be useful for creating interactive web servers that can respond dynamically to different routes and user actions.
