# Lecture 2: Creating Our Server with Express

## Overview

This lecture walks through building your Express server from scratch. It explains what a backend server is, how client–server communication works, and demonstrates step-by-step how to set up a simple Express.js project and start a local server.

## Key Concepts

- The **server** is just a computer running 24/7 that listens for requests and sends responses.
- A **backend** typically includes:
  - A server computer.
  - A backend application (e.g., `index.js`).
  - (Optionally) a database.
- **Client-side** = what users interact with (frontend).
- **Server-side** = the backend logic and server operations.
- **Localhost** simulates a live server on your computer.
- **Ports** are “doors” your computer uses to listen for different connections.
- The **six steps** to create an Express server:
  1. Create a project directory.
  2. Create an `index.js` file.
  3. Initialize NPM.
  4. Install Express.
  5. Configure ES6 modules.
  6. Write and run your Express app.

## Detailed Notes

### Understanding the Backend

- A **backend** is the behind-the-scenes part of a website that handles requests from clients.
- When a user visits a site (like `google.com`), their browser (the client) sends a **request** to a **server**.
- The server **processes the request** and **sends back** the appropriate data (HTML, CSS, JS, etc.).

### Client-Side vs Server-Side

- **Client-side (frontend):** What users see and interact with.
- **Server-side (backend):** Handles logic, data, and serving resources.
- Together, they form a **full web application**.

### Using Express Locally

- Normally servers are hosted online 24/7.
- For learning and testing, we can use **our own computer** as the server.
- This is called **localhost** — it means your local machine is acting as the web server.

### Steps to Create an Express Server

1. **Create a project directory**

   ```bash
   mkdir "3.1 Express Server"
   cd "3.1 Express Server"
   ```

2. **Create an entry file**

   ```bash
   touch index.js
   ```

3. **Initialize NPM**

   ```bash
   npm init -y
   ```

   - This creates a `package.json` file.
   - Make sure the `main` property points to `"index.js"`.

4. **Install Express**

   ```bash
   npm i express
   ```

   - This installs Express and adds it as a dependency in `package.json`.

5. **Enable ES6 modules**

   - Add the following line to your `package.json`:
     ```json
     "type": "module"
     ```
   - This allows using `import` instead of `require`.

6. **Write the Express Server**
   - See the code below.

## Code Snippets

### Basic Express Server Setup

```javascript
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

**Explanation:**

- `import express` — loads the Express library.
- `const app = express()` — creates an Express application instance.
- `app.listen(port, callback)` — starts the server and listens on port 3000.
- The callback function runs once the server starts successfully.

### Starting the Server

```bash
node index.js
```

- Runs your Express app using Node.
- You should see:
  ```
  Server running on port 3000
  ```

### Accessing the Server

- Open a browser and go to:
  ```
  http://localhost:3000
  ```
- “localhost” means your local computer.
- “:3000” refers to the port number your server listens on.

### Understanding Ports

- Think of ports as **doors** on your computer.
- Each port is assigned a unique number (e.g., 3000, 8080).
- Multiple applications can listen on different ports simultaneously.
- You can check which ports are active:
  - **Mac/Linux:**
    ```bash
    sudo lsof -i -P -n | grep LISTEN
    ```
  - **Windows:**
    ```bash
    netstat -ano | findstr "LISTENING"
    ```

### Stopping the Server

- Use `Ctrl + C` in the terminal to stop the running server process.

## Common Error: “Cannot GET /”

- When you visit `http://localhost:3000` and see this error:
  ```
  Cannot GET /
  ```
- It means the server is running but has no defined route for the home page (`/`).
- The next lesson will explain **routes** and how to handle GET requests properly.

## Summary & Takeaways

The main thing to remember from this lecture is that an Express server is simply a JavaScript application that **listens for incoming requests** and **sends back responses**.

This connects to the previous lecture by putting Express into action — moving from theory to a working server setup.

This will be useful for building actual routes and APIs in upcoming lessons, where you’ll learn how to respond to specific requests like `/`, `/about`, etc.
