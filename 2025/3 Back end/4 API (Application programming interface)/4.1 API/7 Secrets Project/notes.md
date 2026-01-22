# Lecture 7: Secrets Project (Final Project)

## Overview

In this final project, you will build a small web app—**Lisper**—inspired by the Whisper app.  
The app displays anonymous secrets using the **Secrets API** and showcases skills learned throughout the module:

- Express server setup
- Using EJS templates
- API calls using Axios
- Working with external APIs
- Passing data from backend → frontend
- Serving static files

No authentication is required for this project because it only uses the **random secret** endpoint.

---

# Goal of the Project

Create a client-side interface that:

- Displays the **username** of the person who submitted the secret
- Reveals their **secret** on hover
- Loads a new random secret each time the page is refreshed

### Preview (via solution.js)

Running the provided solution shows:

- A styled card with:
  - Username shown normally
  - Secret revealed on hover
- Dynamic content (changes on each refresh)

---

# Files in the Project

### 1. `index.js`

Your Node/Express backend:

- Sets up server
- Fetches a random secret using Axios
- Passes data to EJS template

### 2. `index.ejs`

Your frontend template:

- Displays username & secret
- Uses EJS variables:
  - `<%= user %>`
  - `<%= secret %>`

### 3. `public/`

Contains:

- `main.css` (styling for the card)
- Images used in the card background

---

# Step-by-Step Instructions (What You Need to Build)

## Step 1 — Setup

1. Download the project `.zip`
2. Extract and open in VS Code
3. Install dependencies:

```
npm i
```

4. Preview the final version (solution.js) using:

```
nodemon solution.js
```

---

# Step 2 — Create Your Own Express Server

### Import Dependencies

```js
import express from "express";
import axios from "axios";
```

### Create the App

```js
const app = express();
const port = 3000;
```

---

# Step 3 — Serve Static Files

This allows access to CSS and images inside `/public`:

```js
app.use(express.static("public"));
```

This lets EJS reference files like:

```
/styles/main.css
```

---

# Step 4 — Handle the Home Route

When a user loads `/`, we want to:

1. Fetch a random secret using Axios
2. Extract:
   - secret text
   - username

3. Pass the values to the template

### Axios request (random endpoint)

Endpoint:

```
https://secrets-api.appbrewery.com/random
```

### Example Code

```js
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).send("Something went wrong. Please try again later.");
  }
});
```

---

# Step 5 — Start the Server

```js
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

---

# Data Returned From the API

When calling `/random`, the Secrets API returns:

```json
{
  "id": 23,
  "secret": "I dance in the shower.",
  "emScore": 4,
  "username": "dancingpanda"
}
```

We specifically use:

- `result.data.secret`
- `result.data.username`

---

# Step 6 — Understanding `index.ejs`

The two important EJS placeholders:

```html
<p class="username"><%= user %></p>

<p class="secret"><%= secret %></p>
```

**Important:** The hover behavior is controlled entirely by `main.css`.

---

# Notes About the Secrets API

- This API is meant for **learning**, not for production use.
- All data (users, secrets, tokens) resets every **24–48 hours**.
- The project intentionally avoids:
  - Registration
  - Authentication
  - Tokens
  - CRUD operations

- Focus is on consuming an **external API** using **Axios + Express**.

---

# What You Should Have Practiced

### Backend Skills

- Making GET requests using `axios.get()`
- Using async/await
- Error handling with try/catch
- Passing data into EJS templates
- Serving static assets with Express

### Frontend Skills

- Displaying dynamic content using EJS
- Using hover effects via CSS

### API Skills

- Reading API docs
- Extracting correct fields from JSON responses

---

# Stretch Ideas (Optional Improvements)

If you want to expand the project:

- Add a "New Secret" button → refresh without page reload (AJAX)
- Add filtering by embarrassment score
- Add transition animations when hovering
- Allow the user to submit a secret (POST request)
- Add a “Next Secret” button (no refresh)

---

# Summary

In this project, you successfully:

- Built a full-stack mini app
- Integrated Axios with Express
- Consumed a real API
- Displayed API data dynamically in a styled UI

This marks the completion of the API module.
