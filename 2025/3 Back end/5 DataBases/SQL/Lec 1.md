# Lecture 1: SQL Commands – CREATE TABLE and INSERT Data

## Source

**Documentation:**
https://www.w3schools.com/sql/

**Play Ground:**
https://sqliteonline.com/#fiddle-5bbdbaef7288bo2ajn2wly03

## Overview

In this lecture, we get hands-on experience with **SQL (Structured Query Language)** by:

- Creating a database table using SQL
- Understanding table structure (schema)
- Inserting data into a table
- Learning how SQL enforces rules like **Primary Keys** and **NOT NULL constraints**

This is your first practical step into working with SQL databases.

---

## What is SQL?

SQL (Structured Query Language) is used to:

- Create database structures
- Store data
- Retrieve data
- Update data
- Delete data

SQL keywords are usually written in **UPPERCASE** for readability, such as:

- `CREATE`
- `TABLE`
- `INSERT`
- `SELECT`
- `FROM`

---

## CRUD Operations

Almost everything you do with a database falls into **CRUD**:

| Operation | Meaning                |
| --------- | ---------------------- |
| Create    | Add new data or tables |
| Read      | Retrieve data          |
| Update    | Modify existing data   |
| Delete    | Remove data            |

In this lecture, we focus on **Create**.

---

## Learning Resources

- **W3Schools SQL Documentation**  
  A beginner-friendly reference for SQL syntax and concepts.
- **SQLite Online Playground**  
  A browser-based environment to practice SQL without installing anything.

---

## Understanding Tables

A **table** is made up of:

- **Rows (Records)** → individual entries
- **Columns (Fields)** → attributes of the data

Example columns:

- `id`
- `name`
- `price`

---

## Creating a Table with SQL

### Basic Syntax

```sql
CREATE TABLE table_name (
  column_name data_type,
  column_name data_type,
  ...
);
```

---

## Creating the `products` Table

We want a table that stores product information.

### Columns Needed

| Column | Purpose           | Data Type |
| ------ | ----------------- | --------- |
| id     | Unique identifier | INT       |
| name   | Product name      | STRING    |
| price  | Product price     | MONEY     |

---

### Primary Key

A **Primary Key**:

- Uniquely identifies each row
- Cannot be duplicated
- Cannot be NULL

---

### NOT NULL Constraint

The `NOT NULL` constraint ensures:

- A value **must** be provided
- Commonly used with Primary Keys

---

### SQL Code: Create Table

```sql
CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
);
```

✅ If successful, a new empty table called `products` is created.

---

## Viewing the Table

After creation:

- The table exists
- It contains **no data yet**

---

## Inserting Data into a Table

### INSERT Syntax (All Columns)

```sql
INSERT INTO table_name VALUES (value1, value2, value3);
```

Use this when you are providing **all column values**.

---

### Insert First Product

Product details:

- id: 1
- name: "Pen"
- price: 1.20

```sql
INSERT INTO products VALUES (1, "Pen", 1.20);
```

✅ This adds one row to the table.

---

## Viewing Inserted Data

After running the command:

- The table now contains **one record**
- Each column is populated correctly

---

## Inserting Data into Specific Columns

Sometimes you don’t have values for all columns.

### INSERT Syntax (Specific Columns)

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

---

### Insert Product Without Price

Product details:

- id: 2
- name: "Pencil"
- price: not available yet

```sql
INSERT INTO products (id, name)
VALUES (2, "Pencil");
```

Result:

- `price` becomes `NULL`

---

## Understanding NULL Values

- `NULL` means **no value**
- Allowed only if the column is not restricted

---

## NOT NULL Constraint in Action

If you try to insert a record **without an id**:

```sql
INSERT INTO products (name, price)
VALUES ("Rubber", 1.30);
```

❌ Error occurs:

```
NOT NULL constraint failed: products.id
```

Reason:

- `id` is marked as `NOT NULL`
- SQL prevents invalid data from entering the table

---

## Why Constraints Matter

Constraints help:

- Keep data consistent
- Prevent missing or incorrect values
- Enforce the structure you designed

---

## Key Takeaways

- SQL uses structured commands to manage databases
- `CREATE TABLE` defines structure
- `PRIMARY KEY` uniquely identifies rows
- `NOT NULL` enforces required fields
- `INSERT INTO` adds data to tables
- SQL validates data automatically based on rules

---

## What’s Next?

In the next lecture, you will learn how to:

- **Read data**
- **Search tables**
- Use SQL queries to retrieve specific information
