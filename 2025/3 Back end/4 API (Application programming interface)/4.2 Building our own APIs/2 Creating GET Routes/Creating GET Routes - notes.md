# Lecture 2: Creating GET Routes

## Overview

This lecture focuses on implementing **GET routes** for a RESTful API using:

- Express
- Node.js
- Postman for testing
- JavaScript array methods

We build multiple GET endpoints for a Joke API step by step.

---

## RESTful GET Requests

- GET requests are used to **retrieve data**
- They should not modify server data
- Each endpoint returns data in **JSON format**

---

## Tools Used

### Postman

- Used to test API endpoints
- A provided `postman_collection.json` file includes all required requests
- Automatically generates API documentation
- Supports:
  - Path variables
  - Query parameters
  - Example requests and responses

### Project Setup

- Download and extract the **6.0 DIY API** starter files
- Open the project in VS Code
- Install dependencies:

  ```bash
  npm i
  ```

- Run the server using Nodemon:

  ```bash
  nodemon index.js
  ```

---

## Joke API Endpoints (GET)

The Joke API includes three GET routes:

1. **Get a random joke**
2. **Get a specific joke by ID**
3. **Get jokes filtered by type**

All jokes are stored in an array called `jokes` (100 joke objects).

---

## GET Random Joke

### Endpoint

```
GET /random
```

### Purpose

- Returns a single random joke from the jokes array

### Key Concepts

- `app.get()` to define the route
- `Math.random()` to generate a random index
- `Math.floor()` to ensure a valid array index
- `res.json()` to send a JSON response

### Logic Summary

1. Generate a random number
2. Use it as an index in the jokes array
3. Send the selected joke as JSON

---

## GET Specific Joke by ID

### Endpoint

```
GET /jokes/:id
```

### Purpose

- Retrieves a single joke matching a specific ID

### Path Parameters

- `:id` is a **path variable**
- Accessed using:

  ```js
  req.params.id;
  ```

Example request:

```
http://localhost:3000/jokes/2
```

---

### Data Type Handling

- Path parameters arrive as **strings**
- Joke IDs are **numbers**
- Convert using:

  ```js
  parseInt(req.params.id);
  ```

### Comparison Options

- `===` (strict equality): preferred for clarity
- `==` (loose equality): allows type coercion

---

### Finding the Joke

- Uses the JavaScript `find()` method
- Loops through the array
- Returns the first joke with a matching ID

### Response

- If found, return the joke as JSON

---

## GET Filtered Jokes by Type

### Endpoint

```
GET /filter
```

### Query Parameters

- Uses query string:

```
/filter?type=pun
```

- Accessed via:

  ```js
  req.query.type;
  ```

---

### Purpose

- Returns **all jokes** matching a given `jokeType`

### Joke Types

Examples:

- pun
- science
- wordplay
- etc.

---

### Filtering Logic

- Uses the JavaScript `filter()` method
- Loops through the jokes array
- Returns an array of jokes where:

  ```js
  joke.jokeType === requestedType;
  ```

### Response

- An array of matching jokes in JSON format

---

## JavaScript Array Methods Used

- `find()` – returns a single matching element
- `filter()` – returns an array of all matching elements
- Alternative methods:
  - `for` loops
  - `forEach()`

The method choice is flexible as long as the logic is understood.

---

## Best Practices Emphasized

- Always understand code you copy
- Googling and StackOverflow are encouraged
- Focus on **reading, understanding, and implementing**
- Avoid blind copy-pasting

---

## Testing

- Run the server with Nodemon
- Test all GET requests in Postman
- Ensure:
  - Status code `200`
  - Correct JSON responses

---

## What’s Next

Next lecture:

- **POST requests**
- Adding new jokes to the API
- Creating new data via HTTP methods
