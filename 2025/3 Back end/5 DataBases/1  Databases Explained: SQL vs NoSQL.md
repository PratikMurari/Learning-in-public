# Lecture 1: Databases Explained — SQL vs NoSQL

## 🔹 What is Data Persistence?

- **Problem:** Data stored in variables is **temporary**.
- When a server restarts, all data in memory (variables) is **lost**.
- **Solution:** Store data in **databases**, which save data **permanently**.

👉 Databases allow data to survive server restarts.

---

## 🔹 How Computers Store Data (Big Picture)

- Data is stored as **bits (0s and 1s)**.
- On storage devices, bits are represented by **magnetic polarity**.
- Different magnetic directions = different data.
- Modern storage is faster and smaller, but the **core idea is the same**.

---

## 🔹 What is a Database?

- A **database** is permanent storage for application data.
- Used to store things like:
  - Users
  - Blog posts
  - Orders
  - Messages

---

## 🔹 Main Types of Databases

There are **two major categories**:

1. **SQL Databases**
2. **NoSQL Databases**

---

## 🟦 SQL Databases (Relational Databases)

- **SQL** stands for **Structured Query Language**

### ✅ Key Idea

- Data is stored in **tables** (rows & columns).
- Structure must be **defined in advance**.

### 📊 Example

**Users Table**
| id | name | email | password |
|----|------|-------|----------|

**Posts Table**
| id | title | date | author_id |
|----|------|-------|----------|

- Each row = one record
- Columns = predefined fields

---

### 🔗 Relationships (Big Strength of SQL)

- Tables can be **linked together**.
- Example:
  - One user → many blog posts
- You can easily query:
  - “Give me all posts written by this user”

---

### 🧠 Why SQL is Powerful

- Strong **relationships**
- **Consistent data structure**
- Very **fast queries** when joining tables
- Great for **large, complex systems**

---

### 🛠 Popular SQL Databases

- Oracle (Expensive)
- Microsoft SQL Server (Expensive)
- MySQL
- PostgreSQL (Open Source)
- SQLite (Open Source)

🔹 Some are **open-source (free)**  
🔹 Some are **paid (enterprise-level)**

---

## 🟩 NoSQL Databases

### ✅ Key Idea

- Data is **flexible** and **schema-less**
- Often stored like **JSON documents**

### 📄 Example

```json
{
  "name": "Angela",
  "email": "angela@email.com",
  "password": "12345",
  "favoriteFood": "noodles"
}
```

- Other users **don’t need** `favoriteFood`
- Fields can be added **anytime**

---

### 💡 Why NoSQL Exists

- SQL schemas are strict and hard to change
- NoSQL allows:
  - Flexible structure
  - Faster development
  - Easy changes as the app grows

---

### 📈 Scalability

- **Vertical scaling:** more records
- **Horizontal scaling:** more fields
- NoSQL handles both easily

---

### 🛠 Popular NoSQL Databases

- MongoDB
- Redis
- DynamoDB

---

## ⚔️ SQL vs NoSQL (Quick Comparison)

| Feature          | SQL                   | NoSQL                |
| ---------------- | --------------------- | -------------------- |
| Structure        | Fixed schema          | Flexible             |
| Relationships    | Strong                | Weak                 |
| Data Consistency | High                  | Can vary             |
| Query Language   | SQL                   | JSON / key-value     |
| Scalability      | Vertical + Horizontal | Very easy horizontal |

---

## 🔄 Industry Reality (Important!)

- NoSQL was once seen as **modern & superior**
- Over time, problems appeared:
  - Data inconsistency
  - Hard-to-maintain systems

- SQL proved to be:
  - Reliable
  - Predictable
  - Easier to maintain long-term

---

## 📊 What Professionals Use Today

- Surveys (StackOverflow):
  - **PostgreSQL is the #1 database**
  - Especially popular with **professional developers**

- MongoDB still popular but **less dominant**

---

## ⭐ Why This Course Uses PostgreSQL

- Free & open source
- Used in real-world production systems
- Highly scalable
- Reliable & consistent
- Excellent for web developers

---

## 🔜 What’s Next

In the next lessons, you’ll learn:

- SQL basics
- CRUD operations:
  - Create
  - Read
  - Update
  - Delete

- Table relationships

🚀 Get ready to write real SQL!
