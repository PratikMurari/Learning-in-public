# Lecture 4: SQL Commands – DELETE

## Overview

In this lecture, we complete the **CRUD cycle** by learning how to **delete data** from a SQL database.

You will learn:

- What the `DELETE` statement does
- How to safely remove specific records
- Why the `WHERE` clause is critical when deleting data
- Common mistakes to avoid when using `DELETE`

---

## CRUD Recap

| Letter | Meaning |
| ------ | ------- |
| C      | Create  |
| R      | Read    |
| U      | Update  |
| D      | Delete  |

This lesson focuses on the **D: Delete** operation.

---

## Deleting Data in SQL

### The DELETE Statement

The `DELETE` statement is used to **remove rows** from a table.

Basic syntax:

```sql
DELETE FROM table_name
WHERE condition;
```

- `DELETE FROM` → specifies the table
- `WHERE` → determines which rows are removed

---

## Deleting a Single Record

### Example Scenario

Suppose:

- You no longer sell pencils
- The pencil record has `id = 2`

---

### Using ID (Best Practice)

```sql
DELETE FROM products
WHERE id = 2;
```

✅ Deletes only the pencil record
✅ Uses a unique identifier
✅ Safe and precise

---

### Using Another Column (Less Ideal)

```sql
DELETE FROM products
WHERE name = "Pencil";
```

⚠️ This works, but:

- Names may not be unique
- Could accidentally delete multiple records

👉 Using the **Primary Key (`id`)** is always safer.

---

## Why WHERE Is Essential

### Dangerous Query

```sql
DELETE FROM products;
```

❌ This will:

- Delete **every record**
- Leave the table empty
- Permanently remove all data

Once deleted, data **cannot be recovered** unless you have backups.

---

## Safety Tips When Using DELETE

- Always double-check your `WHERE` condition
- Prefer Primary Keys (`id`) over names
- Run a `SELECT` query first to verify affected rows
- Never rush when executing delete commands

---

## Result After Deletion

After deleting the pencil:

- The `products` table contains only **one record**
- The pen remains intact

---

## Full CRUD Cycle Complete 🎉

Through these lectures, you’ve learned how to:

| Operation | SQL Command                    |
| --------- | ------------------------------ |
| Create    | `CREATE TABLE`, `INSERT INTO`  |
| Read      | `SELECT`, `WHERE`              |
| Update    | `UPDATE`, `SET`, `ALTER TABLE` |
| Delete    | `DELETE FROM`                  |

---

## Key Takeaways

- `DELETE` removes records from a table
- `WHERE` prevents accidental data loss
- SQL gives full control over your data
- Mistakes can be costly—precision matters

---

## What’s Next?

From here, you can:

- Practice combining CRUD commands
- Work with larger datasets
- Learn advanced queries and database design
