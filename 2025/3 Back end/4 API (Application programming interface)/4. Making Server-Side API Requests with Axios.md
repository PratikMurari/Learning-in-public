# Lecture 4: Making Server-Side API Requests with Axios

## Lesson Overview

In this lecture, we learn how to:

- Make **API requests from a server** (Node + Express)
- Understand why server-side API requests are important
- Compare **native Node (HTTPS module)** vs **Axios**
- Use Axios to fetch data from a public API
- Handle API responses and errors
- Pass API data to the frontend using EJS

---

## Why Server-Side API Requests?

So far, API requests were made:

- From the **browser**
- From **Postman**

However, in real-world applications:

- The **server** often needs to fetch data from other servers
- Example:

```
Client → Your Server → External API → Your Server → Client
```

This is extremely common in **Node + Express backends**.

---

## Making Requests with Native Node (HTTPS Module)

### How It Works (High-Level)

Using Node’s built-in `https` module:

1. Define request options:

- Base URL
- Endpoint (path)
- HTTP method

2. Make the request
3. Receive response data in **chunks**
4. Concatenate chunks into a string
5. Wait for the `end` event
6. Parse JSON using `JSON.parse`
7. Handle errors with:
   - Try/catch
   - Error callbacks
8. End the request

### Downsides

- Verbose
- Hard to read
- Lots of boilerplate
- Manual JSON parsing
- Complex error handling

➡️ Works, but not ideal for productivity.

---

## Axios: A Better Solution

### What Is Axios?

- A popular **HTTP client library**
- Installed via NPM
- Simplifies making HTTP requests
- Widely used by professional developers

### Why Use Axios?

- Much **less code**
- Automatic JSON parsing
- Better error handling
- Promise-based
- Supports async/await
- Cleaner and more readable

---

## Axios vs Native HTTPS

### Native HTTPS

- Many lines of code
- Manual chunk handling
- Manual `JSON.parse`
- Complex error handling

### Axios

```js
const response = await axios.get(url);
```

➡️ Same result, drastically simpler.

---

## Installing Axios

Axios is installed via NPM:

```bash
npm install axios
```

It is one of the most popular Node packages with **tens of millions of weekly downloads**.

---

## Axios Request Methods

Axios provides aliases for common HTTP methods:

- `axios.get()`
- `axios.post()`
- `axios.put()`
- `axios.patch()`
- `axios.delete()`

These match RESTful API conventions.

---

## Example Project: “I’m Bored” App

### Project Goal

- Build a Node + Express app that:

  - Fetches activities from the **Bored API**
  - Displays activities on a webpage
  - Allows filtering by:

    - Activity type
    - Number of participants

  - Handles errors gracefully

---

## Project Setup

### Dependencies

- Axios
- Express
- EJS
- body-parser

### Steps

1. Download `5.3 Axios.zip`
2. Extract and open in VS Code
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run solution file:

   ```bash
   nodemon solution.js
   ```

5. Visit:

   ```
   http://localhost:3000
   ```

---

## GET Request: Random Activity

### Route Purpose

- When the user visits the homepage
- Fetch a **random activity** from:

  ```
  /random
  ```

### Axios Example

```js
const response = await axios.get("https://bored-api.appbrewery.com/random");
```

### Notes

- `response.data` is already a JavaScript object
- No need for `JSON.parse`
- Data is passed to EJS for rendering

---

## Rendering Data in EJS

### Data Displayed

- Activity name
- Activity type
- Number of participants

### Conditional Rendering

- If data exists → show activity card
- If error exists → show error message

---

## POST Request: Filtering Activities

### Trigger

- Form submission on homepage
- Sends a POST request to `/`

### Form Data Sent

```js
req.body.type;
req.body.participants;
```

---

## Structuring the API Request

### Endpoint

```
/filter
```

### Query Parameters

```text
?type=<value>&participants=<value>
```

### Axios Example

```js
const response = await axios.get(
  `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
);
```

### Important Notes

- Query parameters are **optional**
- Empty strings mean “no filter”
- API returns an **array of activities**

---

## Selecting a Random Activity

The `/filter` endpoint returns an array.

To display only one activity:

1. Get array from `response.data`
2. Select a random item
3. Pass it to EJS

---

## Error Handling

### Common Error

- **404 Not Found**
- Occurs when no activities match criteria

Example:

- Type: `education`
- Participants: `2`
- No matching activity → API returns 404

### Handling Errors

- Catch Axios errors
- Display user-friendly messages:

  - “No activities match your criteria”
  - Network or server errors (optional)

---

## Key Concepts Reinforced

- Server-side API requests are essential
- Axios simplifies HTTP requests
- Axios automatically parses JSON
- Async/await improves readability
- Query parameters control filtering
- APIs may return arrays or errors
- Proper error handling improves UX

---

## Key Takeaways

- Use Axios instead of native HTTPS for API requests
- Servers often act as intermediaries between APIs and clients
- Axios reduces boilerplate and improves clarity
- Understanding API structure is critical
- Error handling is a core backend responsibility

---

## What’s Next

- Making more advanced API requests
- Authentication and API keys
- Real-world third-party API integrations
