# Lecture 1: Building Your Own APIs

## Overview

This lecture introduces the concept of building APIs from scratch and explains:

- Why APIs are valuable
- How APIs can be monetized
- Different categories of APIs
- RESTful API principles
- What we will build in this module

---

## Why APIs Matter

APIs speed up development by allowing developers to:

- Reuse existing data, services, and algorithms
- Avoid building everything from scratch
- Go from idea to product quickly (minutes instead of years)

Instead of collecting, cleaning, and maintaining data yourself, you can leverage APIs created by others.

---

## Public APIs

- Public APIs are accessible to anyone with proper credentials
- Can be **free or paid**
- Cover a wide range of domains:
  - Health
  - Pets
  - Public infrastructure
  - Sports
  - Translation
  - And more

Used heavily in real-world projects and capstone applications.

---

## RapidAPI

- A marketplace for APIs (like “Amazon for APIs”)
- Hosts APIs built by developers
- Allows developers to:
  - Publish APIs
  - Monetize them
- Consumers pay based on usage (number of requests)
- Includes both free and paid APIs

---

## What Makes an API Monetizable?

APIs generally become valuable in **three main ways**:

### 1. Valuable Data Collection

If you own or collect unique data, it can be exposed via an API.

**Examples:**

- A large recipe database (e.g., 1000+ pasta recipes)
- Live weather data from a personal weather station

---

### 2. Proprietary Algorithms or Services

If you provide a useful computation or service that saves others time.

**Examples:**

- Distance calculation between two locations
- Route-based travel distance using multiple APIs
- Complex AI services (e.g., ChatGPT)

These often require:

- Significant computing power
- Time and expertise to build
- Ongoing maintenance

---

### 3. Simplified Interfaces

APIs that simplify access to:

- Real-world services
- Complex or bulky APIs

**Examples:**

- An API to order pizza using location and payment details
- A simplified wrapper around Google Maps or Google Sheets APIs

Value comes from:

- Saving developer time
- Reducing complexity
- Making services more accessible

---

## Real-World Example: Domino’s Pizza API

- Open-source Node.js API
- Available on GitHub
- Demonstrates how real APIs are built
- Free and public, but could have been monetized

Shows how APIs can:

- Wrap real-world services
- Be built and shared by developers

---

## Internal (Private) APIs

Not all APIs are public.

### Characteristics:

- Used within a company
- Often undocumented
- Not officially supported for external use

**Examples:**

- Inventory tracking systems
- Sales and logistics tracking
- Internal analytics systems

⚠️ Important note:

- Lack of documentation ≠ secure
- Without proper security, private APIs may still be accessible

---

## REST APIs

The module focuses on building a **RESTful API**  
REST = **Representational State Transfer**

REST is an architectural style defined by a set of rules.

---

## Rules of a RESTful API

### 1. Uses Standard HTTP Methods

- `GET` – retrieve data
- `POST` – create data
- `PUT` – replace data
- `PATCH` – update data
- `DELETE` – remove data

---

### 2. Uses Standard Data Formats

- Common formats:
  - JSON (most common)
  - XML

Resources are **represented** in these formats and sent to the client.

---

### 3. Client–Server Separation

- Client and server are independent
- Communicate over a network
- Can be developed and scaled separately

This improves:

- Scalability
- Maintainability
- Team collaboration

---

### 4. Statelessness

- Each request contains all required information
- Server does **not** store client state between requests

Benefits:

- Better scalability
- Simpler server logic
- Easier handling of many clients

---

### 5. Resource-Based Architecture

- API is centered around **resources**
- Each resource has a unique identifier (URI/URL)

Examples:

- `/jokes`
- `/jokes/123`

---

## REST and the Internet

The World Wide Web itself is a RESTful system:

- URLs identify resources
- HTTP is used for communication
- Standard response formats (HTML, JSON, XML)
- Clear client/server separation
- Stateless requests

This is why REST is foundational in web development.

---

## Project in This Module

We will build a **Joke API**:

- Fully RESTful
- Serves jokes via endpoints
- Jokes categorized by type
- Demonstrates REST principles in practice

Purpose:

- Learn how APIs work end-to-end
- Build a real API from scratch