# Lecture 5: Build Your Own API for a Blog

## Overview

This final project applies everything learned in the module by building a **Blog API**.

Key points:

- We build the **API only**, not the front-end
- The API supports full CRUD functionality
- HTTP methods used:
  - `GET`
  - `POST`
  - `PATCH`
  - `DELETE`
- `PUT` is intentionally omitted (PATCH is preferred for updates)

A simple front-end is provided to demonstrate how an external client consumes the API.

---

## Architecture: Two-Server Setup

### 1. Front-End Server (`server.js`)

- Runs on `localhost:3000`
- Acts as a **client** consuming the Blog API
- Displays blog posts
- Sends API requests (via Axios) to the back-end

### 2. Blog API Server (`index.js`)

- Runs on `localhost:4000`
- Handles all API requests
- Stores posts in memory (array)

⚠️ You **cannot run two servers on the same port**  
If you see `EADDRINUSE`, it means the port is already occupied.

---

## Project Setup

### Installation

```bash
npm i
```

### Running the Project

- Terminal 1:

  ```bash
  nodemon server.js
  ```

- Terminal 2:

  ```bash
  nodemon index.js
  ```

To preview working functionality:

```bash
nodemon solution.js
```

(Also runs on port `4000` — stop it before running `index.js`.)

---

## Blog Post Data Model

Each post contains:

- `id`
- `title`
- `content`
- `author`
- `date`

Posts are stored in an **in-memory array**, used as a temporary data store.

---

## API Endpoints Implemented

### GET All Posts

```
GET /posts
```

- Returns all blog posts
- Response format: JSON array

```js
res.json(posts);
```

---

### GET Specific Post by ID

```
GET /posts/:id
```

- Uses a path parameter
- Finds a post by ID
- If found:
  - Returns the post as JSON

- If not found:
  - Returns `404` with `"Post not found"`

---

### POST Create New Post

```
POST /posts
```

#### Request Body

- `title`
- `content`
- `author`

#### Server Responsibilities

- Generate a unique `id`
- Create a timestamp using:

  ```js
  new Date();
  ```

- Push new post into the posts array
- Return the newly created post

Form field names **must match** those in `modify.ejs`.

---

### PATCH Update Existing Post

```
PATCH /posts/:id
```

#### Purpose

- Partially update a blog post
- Only provided fields are changed

#### Logic

1. Find post by ID
2. If not found → return `404`
3. Update fields **only if they exist** in request body
4. Return updated post as JSON

PATCH is preferred because:

- It avoids overwriting unchanged fields
- It matches real-world API behavior

---

### DELETE Post

```
DELETE /posts/:id
```

#### Purpose

- Remove a blog post

#### Logic

1. Get `id` from path parameter
2. Find index of post
3. If found:
   - Remove using `splice()`
   - Return success

4. If not found:
   - Return `404`

---

## Front-End Integration

- Front-end uses Axios to call the API
- Example:
  - `localhost:3000` → makes request to → `localhost:4000`

- Delete links dynamically embed the post ID:

  ```
  /api/post/delete/:id
  ```

This simulates how **external developers** would use your API.

---

## Key Concepts Reinforced

- RESTful API design
- CRUD operations
- Path parameters vs body data
- PATCH vs PUT
- In-memory data storage
- Client–server separation
- Realistic API consumption patterns

---

## Learning Notes & Encouragement

- Reading code often takes longer than writing code
- Confusion is normal when multiple systems interact
- Everything used here has been introduced earlier
- Reviewing solution code is encouraged

This project closely mirrors **real-world API usage** and serves as a strong foundation for:

- Databases
- Authentication
- Full-stack applications

---

## Module Completion 🎉

You now know how to:

- Design a RESTful API
- Implement all major HTTP methods
- Connect an API to a front-end client
- Build scalable, reusable backend services

Next steps:

- Databases
- Authentication
- Production-ready APIs
