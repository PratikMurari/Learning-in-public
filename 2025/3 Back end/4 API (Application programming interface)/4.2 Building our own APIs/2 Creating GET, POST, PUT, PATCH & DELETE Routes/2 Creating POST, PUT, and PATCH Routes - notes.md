# Lecture 3: Creating POST, PUT, and PATCH Routes

## Overview

This lecture covers **creating and updating data** in a RESTful API using:

- `POST` – create new jokes
- `PUT` – completely replace a joke
- `PATCH` – partially update a joke

All routes are implemented using **Express** and tested using **Postman**.

---

## POST Requests – Creating New Jokes

### Endpoint

```
POST /jokes
```

### Purpose

- Adds a new joke to the jokes array

### Request Format

- Content type: `www-form-urlencoded`
- Body parameters:
  - `text` – the joke text
  - `type` – the joke category

---

### Joke Object Structure

Each joke consists of:

- `id` – auto-generated
- `jokeText` – provided by user
- `jokeType` – provided by user

---

### ID Generation

- The `id` is created automatically
- Uses:

  ```js
  jokes.length + 1;
  ```

- Prevents the user from manually setting IDs

---

### Middleware: body-parser

- Required to access `req.body`
- Configured with:

  ```js
  bodyParser.urlencoded({ extended: true });
  ```

- Allows form data to be read from POST requests

---

### Implementation Logic

1. Create a `newJoke` object
2. Read text and type from `req.body`
3. Push the new joke into the `jokes` array
4. Optionally log the last joke using:

   ```js
   jokes.slice(-1);
   ```

5. Return the newly created joke as JSON

---

### Notes

- `slice(-1)` retrieves the last element in an array
- Basic validation can be added later (length checks, allowed types, etc.)
- The focus here is understanding how POST routes work

---

## PUT Requests – Replacing a Joke

### Endpoint

```
PUT /jokes/:id
```

### Purpose

- Completely replaces an existing joke
- All fields must be provided

---

### Key Characteristics of PUT

- Full replacement of the resource
- Missing fields will be overwritten with empty values
- ID remains constant

---

### Request Data

- Path parameter:
  - `id`

- Body parameters:
  - `text`
  - `type`

---

### Implementation Logic

1. Retrieve `id` from `req.params.id`
2. Convert ID to an integer (recommended)
3. Use `findIndex()` to locate the joke
4. Create a `replacementJoke` object
5. Replace the existing joke:

   ```js
   jokes[searchIndex] = replacementJoke;
   ```

6. Send the updated joke back as the response

---

### JavaScript Methods Used

- `findIndex()` – returns the index of the matching item

---

### Notes

- PUT is less commonly used than PATCH in real-world APIs
- Included here to demonstrate REST principles clearly

---

## PATCH Requests – Updating Part of a Joke

### Endpoint

```
PATCH /jokes/:id
```

### Purpose

- Updates **only specific fields** of a joke
- Most commonly used update method in real-world APIs

---

### Key Characteristics of PATCH

- Partial updates
- Only provided fields are changed
- Missing fields remain unchanged

---

### Request Data

- Path parameter:
  - `id`

- Optional body parameters:
  - `text`
  - `type`

---

### Implementation Logic

1. Parse `id` from `req.params`
2. Find the existing joke using `find()`
3. Build a new object using:
   - New values if provided
   - Existing values otherwise

4. Use logical OR (`||`) to handle fallbacks:

   ```js
   req.body.text || existingJoke.jokeText;
   ```

5. Find the joke index with `findIndex()`
6. Replace the joke in the array
7. Send the updated joke as JSON

---

### OR Operator Pattern

- Common JavaScript pattern for PATCH logic
- Means:
  - “Use new value if it exists, otherwise keep the old one”

Alternative approach:

- Use `if` statements for clarity

---

## JavaScript Methods Used

- `find()` – retrieves the matching object
- `findIndex()` – retrieves the index
- Logical OR (`||`) – fallback values

---

## Testing

- Run server with Nodemon
- Test POST, PUT, and PATCH routes in Postman
- Verify:
  - Correct responses
  - Correct data updates
  - No unexpected errors

---

## Best Practices Emphasized

- Copying code is fine — **understanding is mandatory**
- Always read documentation (MDN, Express docs)
- Practice implementing solutions yourself

---

## What’s Next

Next lecture:

- **DELETE requests**
- Removing individual jokes
- Deleting all jokes from the API


