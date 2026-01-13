# Lecture 5: API Authentication

## Overview

This lesson covers:

- Why APIs require authentication
- Different authentication levels
- How to authenticate using:
  - Basic Authentication
  - API Keys
  - Token / Bearer Authentication (OAuth-style)
- Using Postman to authenticate
- Using Axios to authenticate server-side

---

# Why Authentication Matters

APIs often protect data that is:

- Valuable
- Sensitive
- Expensive to compute or serve

Analogy:

- The data = **money in a vault**
- API = **the bank’s front desk**
- Without auth: anyone could ask for “£100” and the API would hand it over.

Authentication answers:

> **Who are you?**

Authorization answers:

> **Are you allowed to access this?**

If not, the API returns:

```
401 Unauthorized
```

---

# 4 Levels of API Authentication

## 1. No Authentication (Open APIs)

- Anyone can access the endpoint
- Suitable when data is:
  - Non-sensitive
  - Low impact
  - Non-user-specific

**Risk:** Abuse (spam, bot attacks)

**Solution:** Rate limiting
Example:

- Bored API → 100 requests per 15 minutes

---

## 2. Basic Authentication

Basic Auth requires:

- **Username**
- **Password**

These are sent in the **Authorization Header**:

```
Authorization: Basic <Base64(username:password)>
```

### What is Base64 encoding?

- Converts text → binary → Base64 characters
- NOT encryption
- Easy to decode (demonstrated in class)
- Only safe when used with **HTTPS**

### How Postman handles Basic Auth

- You enter username/password in Auth tab
- Postman automatically generates:

```
Authorization: Basic <encoded-string>
```

### Example API: Secrets API

Endpoints:

- `POST /register` → Create user
- `GET /all?page=1` → Requires Basic Auth
- `GET /random` → No auth needed

Workflow:

1. Register user via `/register`
2. Use the same username & password in Basic Auth to access `/all`

---

## 3. API Key Authorization

API Keys:

- Are **generated per user or per project**
- Are passed either:
- In query parameters
- In headers
- Identify **who is using the API**, not who the user is
  (although they _can_ be tied to a user)

### Why API Keys?

- Allow API providers to:
- Track usage
- Bill customers
- Apply usage limits
- More secure than Basic Auth because:
- No username/password exposed
- Keys can be regenerated/revoked easily
- No personal info is leaked

### Example: Google Maps API

- Places API
- Distance Matrix API
- 200k requests/day example with cost tracking

### Secrets API Example

1. Generate API key using:

```

GET /generate-api-key

```

2. Use it with the filter route:

```

GET /filter?score=7&apiKey=<yourKey>

```

---

## 4. Token-Based Authentication (Bearer Tokens / OAuth 2.0)

Most secure and widely used today.

### Why Token-Based Auth?

- Username/password used **only once**
- Server returns a **token**
- All future requests use **token only**

Tokens:

- Can expire
- Can be revoked
- Avoid exposing sensitive info
- Used by major providers (Google, Facebook, GitHub, etc.)

### OAuth in the Real World

Example:

- A weather app wants to access your Google Calendar
- User signs in with Google on _Google’s website_
- Google sends your app a **token**
- App uses the token to call the Calendar API

The app **never** sees your username/password.

---

# Secrets API Token Authentication Example

### Step 1 — Get a Token

Use:

```
POST /get-auth-token
```

Send:

- username
- password

Response:

- A bearer token

### Step 2 — Use Token to Access Protected Route

Example route:

```
GET /secrets/:id
```

Add header:

```
Authorization: Bearer <yourToken>
```

Postman will display the auto-generated header in **Headers** tab.

---

# Authentication With Code (Axios)

You were asked to implement all four authentication types in code.

## 1. No Authentication

```js
await axios.get(apiURL + "/random");
```

---

## 2. Basic Authentication

Axios supports Basic Auth directly:

```js
await axios.get(url, {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
});
```

Axios will automatically:

- Base64 encode
- Add the Authorization header

---

## 3. API Key Auth

Two options:

### A. Pass as Query Params

```js
await axios.get(url, {
  params: {
    score: 7,
    apiKey: API_KEY,
  },
});
```

### B. Hardcode into URL

```js
await axios.get(`${url}?score=7&apiKey=${API_KEY}`);
```

---

## 4. Bearer Token Auth

Using Axios headers:

```js
await axios.get(url, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
```

---

# Key Concepts (Authentication vs Authorization)

| Term               | Meaning                           | Example                           |
| ------------------ | --------------------------------- | --------------------------------- |
| **Authentication** | Identifying who you are           | Logging in with username/password |
| **Authorization**  | Permission to access API/resource | Providing API key or Bearer token |

They often work together:

- Authenticate → obtain token → use token to authorize requests

---

# Summary

### Types of API Authentication

1. **No Auth**

   - Easy but limited
   - Rate-limited for protection

2. **Basic Auth**

   - Username + password
   - Sent as Base64 (not encryption)
   - Suitable for low-importance endpoints

3. **API Key Auth**

   - Key = unique identifier
   - Used for billing, rate limits, and usage analytics
   - Must be kept secret

4. **Token/Bearer Auth (OAuth)**

   - Most secure
   - Temporary tokens instead of passwords
   - Used by major platforms (Google, GitHub, etc.)

---

# What’s Next

Next lecture:

- More ways to interact with REST APIs
- More authentication flows
- Advanced endpoint structures
