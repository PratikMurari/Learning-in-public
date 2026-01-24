# APIs & REST – Full Module Notes (Lectures 1–7)

> Beginner‑friendly explanations with intermediate & advanced concepts layered in.
> Projects are intentionally excluded. This document focuses on **concepts, patterns, and best practices**.

---

## Table of Contents

1. What Is an API?
2. How APIs Work on the Web
3. Structuring API Requests
4. JSON: The Language of APIs
5. Making Server‑Side Requests with Axios
6. API Authentication & Authorization
7. REST APIs (CRUD & Design Principles)
8. Axios Cheatsheet
9. Common API Patterns & Best Practices
10. Beginner → Advanced Learning Path

---

# 1. What Is an API?

**API** stands for **Application Programming Interface**.

In simple terms:

> An API is a **messenger** that lets two pieces of software talk to each other.

### Layman’s Analogy

- You (client) order food at a restaurant
- The waiter (API) takes your order
- The kitchen (server/database) prepares the food
- The waiter brings the food back

You never go into the kitchen. You only interact through the waiter.

That’s exactly how APIs work.

---

## Why APIs Exist

- Software is everywhere (apps, websites, devices)
- Different systems are built with **different languages and technologies**
- APIs provide a **standard way** to communicate

Without APIs:

- Every app would need direct access to every other system (chaos)

With APIs:

- Clean, predictable communication

---

# 2. How APIs Work on the Web

Most web APIs work using **HTTP**.

### The Request–Response Cycle

```
Client → API Request → Server → API Response → Client
```

### Requests Contain:

- URL (where)
- Method (what you want to do)
- Optional data (filters, body, auth)

### Responses Contain:

- Status code (success or error)
- Data (usually JSON)

---

## HTTP Status Codes (Mental Model)

| Code | Meaning      | Plain English                 |
| ---- | ------------ | ----------------------------- |
| 200  | OK           | Everything worked             |
| 201  | Created      | New data was created          |
| 400  | Bad Request  | You sent something wrong      |
| 401  | Unauthorized | Not logged in / not allowed   |
| 403  | Forbidden    | You are logged in but blocked |
| 404  | Not Found    | Resource doesn’t exist        |
| 500  | Server Error | API broke internally          |

---

# 3. Structuring API Requests

Every API request is built from **three core parts**:

## 1️⃣ Endpoint

A specific route on the API server.

```
/base-url/endpoint
```

Examples:

- `/random`
- `/users`
- `/posts/42`

---

## 2️⃣ Query Parameters (Filtering & Searching)

Used to **refine results**.

```
?key=value&key2=value2
```

Example:

```
/search?type=education&participants=1
```

**Use when:**

- Filtering
- Sorting
- Searching
- Pagination

---

## 3️⃣ Path Parameters (Identifying One Thing)

Used to **identify a specific resource**.

```
/users/123
```

**Use when:**

- Fetching one item
- Updating one item
- Deleting one item

---

### Query vs Path Parameters

| Query Params     | Path Params    |
| ---------------- | -------------- |
| Optional         | Required       |
| Filtering        | Identification |
| Multiple allowed | Usually one    |

---

# 4. JSON: The Language of APIs

**JSON** = **JavaScript Object Notation**

JSON is the universal data language of APIs.

---

## Why JSON Is Used

- Human‑readable
- Lightweight
- Language‑agnostic
- Perfect for the web

---

## JSON Rules (Important)

- Keys **must be strings**
- Uses double quotes
- No functions allowed

Example:

```json
{
  "name": "Alex",
  "skills": ["JS", "APIs"],
  "active": true
}
```

---

## Serialization & Parsing

### Serialization (Send data)

```js
JSON.stringify(jsObject);
```

Turns JS → JSON string

### Parsing (Receive data)

```js
JSON.parse(jsonString);
```

Turns JSON → JS object

Most libraries (like Axios) do this automatically.

---

# 5. Making Server‑Side Requests with Axios

## Why Server‑Side Requests Matter

Instead of:

```
Browser → External API
```

We often do:

```
Browser → Our Server → External API → Our Server → Browser
```

Reasons:

- Hide API keys
- Add business logic
- Secure data
- Combine multiple APIs

---

## What Is Axios?

Axios is a **promise‑based HTTP client**.

Why developers love it:

- Minimal code
- Automatic JSON parsing
- Great error handling
- Works with async/await

---

# 6. API Authentication & Authorization

## Authentication vs Authorization

| Term           | Meaning                     |
| -------------- | --------------------------- |
| Authentication | Who are you?                |
| Authorization  | What are you allowed to do? |

---

## 4 Levels of API Security

### 1️⃣ No Authentication

- Public access
- Often rate‑limited

### 2️⃣ Basic Authentication

- Username + password
- Sent as Base64 (not encrypted)
- Must use HTTPS

### 3️⃣ API Key Authorization

- Key identifies the client
- Used for tracking & billing
- Safer than Basic Auth

### 4️⃣ Token / Bearer Authentication (OAuth)

- Login once → receive token
- Token used for all requests
- Industry standard
- Most secure

---

## Where Auth Data Goes

| Method       | Location        |
| ------------ | --------------- |
| Basic Auth   | Header          |
| API Key      | Header or Query |
| Bearer Token | Header          |

---

# 7. REST APIs (Design & CRUD)

## What Is REST?

REST is an **architectural style** for APIs.

Core idea:

> Use HTTP methods to act on resources.

---

## CRUD Mapping

| Action           | HTTP Method |
| ---------------- | ----------- |
| Create           | POST        |
| Read             | GET         |
| Update (full)    | PUT         |
| Update (partial) | PATCH       |
| Delete           | DELETE      |

---

## PUT vs PATCH (Very Important)

| PUT                     | PATCH                   |
| ----------------------- | ----------------------- |
| Replace entire resource | Update part of resource |
| Requires all fields     | Only changed fields     |

---

## REST Design Best Practices

Good:

```
GET /users/42
```

Bad:

```
GET /getUserById?id=42
```

Rules:

- Use nouns, not verbs
- Use plural resources
- Let HTTP methods do the work

---

# 8. Axios Cheatsheet

## GET

```js
axios.get(url, config);
```

## POST

```js
axios.post(url, data, config);
```

## PUT

```js
axios.put(url, data, config);
```

## PATCH

```js
axios.patch(url, data, config);
```

## DELETE

```js
axios.delete(url, config);
```

---

## Axios Config Object

```js
{
  headers: {},
  params: {},
  auth: {},
  timeout: 5000
}
```

---

## Authentication with Axios

### Basic Auth

```js
auth: {
  (username, password);
}
```

### API Key

```js
params: {
  apiKey;
}
```

### Bearer Token

```js
headers: {
  Authorization: `Bearer ${token}`;
}
```

---

## Error Handling Pattern

```js
try {
  await axios.get(url);
} catch (error) {
  error.response?.status;
  error.response?.data;
}
```

---

# 9. Common API Patterns & Best Practices

## Pagination

```
?page=2&limit=10
```

## Filtering

```
?status=active&type=admin
```

## Sorting

```
?sort=createdAt&order=desc
```

## Versioning

```
/api/v1/users
```

## Rate Limiting

- Prevents abuse
- Often tied to API keys

---

# 10. Beginner → Advanced Learning Path

### Beginner

- Understand requests & responses
- Read API documentation
- Use GET requests
- Work with JSON

### Intermediate

- Use Axios server‑side
- Handle errors properly
- Use query & path parameters
- Understand REST design

### Advanced

- OAuth flows
- Token refresh strategies
- API versioning
- Rate‑limit handling
- Caching responses
- Building your own APIs

---

## Final Advice

- Always read API docs first
- Log responses early
- Handle errors gracefully
- Secure keys & tokens
- Keep APIs simple

APIs are the backbone of modern software. Mastering them unlocks **full‑stack development**, **mobile apps**, and **real‑world systems**.

🚀 You now have a complete mental model of APIs—from beginner to advanced.
