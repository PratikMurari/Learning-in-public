# Lecture 2: SQL Commands – READ, SELECT, and WHERE

## Overview

In this lecture, we move on to the **R in CRUD: Read**.

You will learn:

- How to read data from a SQL database
- How to use the `SELECT` statement
- How to filter data using the `WHERE` clause
- How to retrieve specific columns or specific rows

---

## CRUD Recap

CRUD represents the four main database operations:

| Letter | Meaning |
| ------ | ------- |
| C      | Create  |
| R      | Read    |
| U      | Update  |
| D      | Delete  |

In **Lecture 1**, we focused on **Create**.  
In this lecture, we focus on **Read**.

---

## Reading Data with SELECT

### The SELECT Keyword

The `SELECT` keyword is used to **read data** from a database table.

Basic syntax:

```sql
SELECT columns
FROM table_name;
```

---

## Selecting All Data from a Table

### Wildcard (`*`)

The asterisk `*` is a **wildcard**, meaning _“everything”_.

```sql
SELECT * FROM products;
```

This command:

- Reads **all columns**
- Reads **all rows**
- Displays the entire `products` table

This is the same query that runs automatically when you click **Show table**.

---

## Selecting Specific Columns

If you don’t need all columns, you can choose only the ones you want.

### Example

```sql
SELECT name, price
FROM products;
```

Result:

- The `id` column is excluded
- Only `name` and `price` are shown

This helps:

- Reduce unnecessary data
- Improve readability
- Improve performance in large databases

---

## Reading Specific Rows with WHERE

### Why Use WHERE?

Sometimes you only want **specific records**, not the entire table.

This is where the `WHERE` keyword comes in.

---

## WHERE Clause Syntax

```sql
SELECT columns
FROM table_name
WHERE condition;
```

The `WHERE` clause:

- Filters rows
- Returns only records that meet a condition

---

## Example: Selecting One Product by ID

If you only want the product with `id = 1`:

```sql
SELECT * FROM products
WHERE id = 1;
```

Result:

- Only **one row** is returned
- SQL searches the table and isolates matching data

---

## How WHERE Works

The database:

1. Looks at each row
2. Checks the condition (`id = 1`)
3. Returns only rows that match

---

## Common WHERE Conditions

The `WHERE` clause can use many operators, such as:

| Operator  | Meaning                  |
| --------- | ------------------------ |
| `=`       | Equal to                 |
| `>`       | Greater than             |
| `<`       | Less than                |
| `>=`      | Greater than or equal to |
| `<=`      | Less than or equal to    |
| `BETWEEN` | Value within a range     |

### Example Conditions

```sql
WHERE id = 1
WHERE price > 1.00
WHERE price BETWEEN 1.00 AND 2.00
```

---

## Why SELECT + WHERE Is Important

This combination is:

- One of the **most commonly used SQL queries**
- Essential for searching and filtering data
- Used constantly in real-world applications

You’ll see it everywhere when working with SQL databases.

---

## Key Takeaways

- `SELECT` is used to **read data**
- `*` selects all columns
- You can select specific columns by name
- `WHERE` filters rows based on conditions
- SQL allows powerful searching with simple syntax

---

## What’s Next?

In the next lecture, you’ll continue building on this by:

- Refining searches
- Exploring more complex queries
- Working further with SQL conditions
