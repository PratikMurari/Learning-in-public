# 📬 Lecture: Postman

## 🧠 Concept Overview

In this lecture, we explore how to make and test **HTTP requests** using **Postman**, a professional tool for backend API development and testing.

### 🌐 Client–Server Communication Recap

- **Client-side:** The user’s device (browser, mobile, desktop).
- **Server-side:** The machine and application handling requests (e.g., your `index.js` running on Node + Express).
- Communication happens through **HTTP requests** and **responses**.

---

## 🧾 HTTP Status Codes

HTTP responses come with **status codes** to describe the result of a request.

| Category | Range   | Meaning                             | Example                   |
| -------- | ------- | ----------------------------------- | ------------------------- |
| **1xx**  | 100–199 | Informational – “Hold on.”          | 101 Switching Protocols   |
| **2xx**  | 200–299 | Success – “Here you go.”            | 200 OK, 201 Created       |
| **3xx**  | 300–399 | Redirection – “Go away (redirect).” | 301 Moved Permanently     |
| **4xx**  | 400–499 | Client error – “You messed up.”     | 404 Not Found             |
| **5xx**  | 500–599 | Server error – “I messed up.”       | 500 Internal Server Error |

> 💡 Mnemonic by Sander Hoogendoorn:
>
> - 1xx: _Hold on_
> - 2xx: _Here you go_
> - 3xx: _Go away_
> - 4xx: _You screwed up_
> - 5xx: _I screwed up_

📚 **Reference:** [MDN HTTP Status Codes](https://developer.mozilla.org/docs/Web/HTTP/Status)

---

## ⚙️ HTTP Request Methods

We use different methods to perform different operations on a resource:

| Method     | Purpose                 | Typical Use                          |
| ---------- | ----------------------- | ------------------------------------ |
| **GET**    | Retrieve data           | Fetch a web page or API data         |
| **POST**   | Create new resource     | Submit form data                     |
| **PUT**    | Replace resource        | Update entire user record            |
| **PATCH**  | Modify part of resource | Update one field (e.g., user’s name) |
| **DELETE** | Remove resource         | Delete a user                        |

---

## 🧰 Introducing Postman

**Postman** is a GUI tool for creating, sending, and testing HTTP requests — great for backend developers who want to test routes without building a frontend.

🔗 Download here: [postman.com/downloads](https://www.postman.com/downloads)

### Postman Features

- Choose request type (GET, POST, PUT, PATCH, DELETE).
- Enter the target **URL / endpoint**.
- Add **body data** (e.g., `x-www-form-urlencoded` form fields).
- View **response status code** and **response body**.

Example body for a POST request:

```
Key: name    | Value: Angela
Key: email   | Value: angela@example.com
```

If the backend isn’t running (`localhost:3000`), you’ll see:

> ❌ Connection refused

---

## 🧑‍💻 Express.js Example

Each HTTP method in Express has its own function:

```js
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201); // Created
});

app.put("/user/:username", (req, res) => {
  res.sendStatus(200); // OK
});

app.patch("/user/:username", (req, res) => {
  res.sendStatus(200); // OK
});

app.delete("/user/:username", (req, res) => {
  res.sendStatus(200); // OK
});
```

🧩 **res.sendStatus(code)**
Sends only an HTTP status code response (no HTML/text body).

---

## 🧪 Practical Challenge

1. **Download and unzip** the `3.3 Postman` project.
2. In your terminal:
   ```bash
   cd 3.3-Postman
   npm install
   nodemon index.js
   ```
3. Open **Postman**, create 5 tabs for the following requests:

| Method | Endpoint                     | Expected Status |
| ------ | ---------------------------- | --------------- |
| GET    | `localhost:3000/`            | 200             |
| POST   | `localhost:3000/register`    | 201             |
| PUT    | `localhost:3000/user/angela` | 200             |
| PATCH  | `localhost:3000/user/angela` | 200             |
| DELETE | `localhost:3000/user/angela` | 200             |

Each should return a corresponding success message or code.

---

## 🧩 Real-World Insight

- Use Postman before building the frontend to ensure your **backend routes** work correctly.
- 404 errors often mean **wrong endpoint or missing route**.
- 500 errors typically indicate **a bug in the server code**.
- 201 “Created” is ideal for POST routes that successfully add data to the database.

---

## 🧭 Summary

✅ HTTP status codes tell the client what happened to their request.
✅ Express simplifies defining routes for all HTTP methods.
✅ Postman is an essential tool to **test APIs quickly** before frontend integration.
✅ You can send data, inspect responses, and debug your backend easily.

---

### 🔗 Next Lecture Preview

➡️ **Express Middleware** – how to access and handle request data sent from Postman or the client-side.
