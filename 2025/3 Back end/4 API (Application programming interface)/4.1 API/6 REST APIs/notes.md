# Lecture 6: REST APIs

## Overview

In this lesson:

- You will learn how to fully interact with a REST API
- You’ll use **Axios** to make:
  - GET
  - POST
  - PUT
  - PATCH
  - DELETE
- You’ll practice with the **Secrets API**
- You’ll see how async/await compares to .then()
- You’ll build a CRUD interface using Bearer Token Authentication

---

# GET Requests with Axios

### Basic Structure

```js
try {
  const response = await axios.get(url, config);
  console.log(response.data);
} catch (error) {
  console.log(error);
}
```

### Promise Style (Alternative)

```js
axios.get(url)
  .then(res => { ... })
  .catch(err => { ... })
  .finally(() => { ... });
```

### Async/Await vs .then()

| Async/Await                       | .then()                       |
| --------------------------------- | ----------------------------- |
| Cleaner, synchronous-looking code | Nested, can get messy         |
| Introduced in ES8 (2017)          | Older syntax                  |
| Easier debugging                  | Harder to follow when chained |

**Recommended:** Use async/await syntax.

---

# RESTful APIs & HTTP Methods

A fully RESTful API supports:

| Method     | Purpose                   |
| ---------- | ------------------------- |
| **GET**    | Retrieve data             |
| **POST**   | Create new resource       |
| **PUT**    | Replace entire resource   |
| **PATCH**  | Update part of a resource |
| **DELETE** | Remove resource           |

You will implement all five using Axios.

---

# Axios Syntax for All Methods

## 1. GET

```js
axios.get(url, config);
```

Two parameters:

1. URL
2. Optional config (headers, params, auth, etc.)

---

## 2. POST

```js
axios.post(url, body, config);
```

Three parameters:

1. URL
2. **Body** (data being sent)
3. Optional config

Example:

```js
await axios.post(
  apiURL + "/secrets",
  {
    secret: "My secret",
    score: 4,
  },
  config
);
```

---

## 3. PUT (Replace Resource)

```js
axios.put(url, body, config);
```

PUT requires:

- The **ID** in the URL
- The **full resource** in the body (all fields)

Example:

```js
await axios.put(
  apiURL + "/secrets/51",
  {
    secret: "New content",
    score: 7,
  },
  config
);
```

---

## 4. PATCH (Update Part of Resource)

```js
axios.patch(url, partialBody, config);
```

Only the fields you want to update.

Example:

```js
await axios.patch(
  apiURL + "/secrets/51",
  {
    score: 2,
  },
  config
);
```

---

## 5. DELETE

```js
axios.delete(url, config);
```

Only URL + config (no body).

Example:

```js
await axios.delete(apiURL + "/secrets/51", config);
```

---

# Axios Config Options (Important!)

The Axios config object can include:

- `headers`
- `auth`
- `params`
- `timeout`
- `baseURL`

Example:

```js
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
```

---

# The Secrets API (CRUD Example)

You will build a web interface allowing:

- **GET** a secret by ID
- **POST** a new secret
- **PUT** update an entire secret
- **PATCH** update one part
- **DELETE** delete a secret

The Secrets API requires **Bearer Token Authentication**, so this must be included in all requests.

### Required Header:

```
Authorization: Bearer <yourToken>
```

---

# Practical Workflow (Your Project)

## 1. Setup

- Download project folder **5.5 REST APIs**
- Run:

  ```
  npm install
  ```

- Insert your Bearer Token into both `solution.js` and `index.js`

---

# GET Route (Already Completed For You)

```js
const result = await axios.get(apiURL + "/secrets/" + searchId, config);
res.render("index.ejs", { content: JSON.stringify(result.data) });
```

If error:

```js
error.response.data;
```

is displayed.

---

# POST Route – Creating a Secret

### Endpoint

```
POST /secrets
```

### Body Needed

```json
{
  "secret": "Some secret text",
  "score": 5
}
```

### Implementation

```js
const result = await axios.post(apiURL + "/secrets", req.body, config);

res.render("index.ejs", {
  content: JSON.stringify(result.data),
});
```

---

# PUT Route – Replacing a Secret

### Endpoint

```
PUT /secrets/:id
```

### Must include:

- secret
- score
- (ID is in the URL)

Example:

```js
const result = await axios.put(
  apiURL + "/secrets/" + req.body.id,
  req.body,
  config
);
```

---

# PATCH Route – Partially Updating a Secret

### Endpoint

```
PATCH /secrets/:id
```

### Body can include only changed fields:

- secret?
- score?

Example:

```js
const result = await axios.patch(
  apiURL + "/secrets/" + req.body.id,
  req.body,
  config
);
```

---

# DELETE Route – Remove a Secret

### Endpoint

```
DELETE /secrets/:id
```

### No body needed:

```js
const result = await axios.delete(apiURL + "/secrets/" + req.body.id, config);
```

---

# Useful Notes About the HTML Form

The EJS file uses:

- One form
- With multiple buttons
- Each button uses its own `formaction=""`

Example:

```html
<button formaction="/put-secret">PUT</button>
```

This lets:

- The same form inputs be used for all operations
- Each button send the form to a different route

---

# Tips for Working with REST APIs

1. **Always read the API documentation**

   - Endpoints
   - Required parameters
   - Response formats
   - Auth requirements

2. **Check what the API returns**

   - Use `console.log(response.data)`
   - Helps figure out how to pass it to your frontend

3. **Expect errors**

   - Use `try/catch`
   - Show error messages to the user

4. **Add your token BEFORE debugging**

   - Missing token = everything fails

---

# Summary

In this lecture, you learned:

- How to use all HTTP methods with Axios:

  - GET
  - POST
  - PUT
  - PATCH
  - DELETE

- How to authenticate using Bearer Tokens
- How to structure Axios request parameters
- How to build a complete CRUD interface for a REST API
- Why async/await makes code cleaner than .then()
- Importance of reading API documentation carefully

This completes your foundational skills for building and consuming REST APIs.

---

# Next Lesson

You’ll build a **full mini-app**, similar to the Whisper app, using:

- Node
- Express
- Axios
- The Secrets API
- Authentication