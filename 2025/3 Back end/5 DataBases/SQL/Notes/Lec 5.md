# Lecture 5: Understanding SQL Relationships, Foreign Keys, and INNER JOINs

## Overview

Now that we’ve implemented **CRUD** operations in SQL, this lecture introduces one of the most powerful
features of relational databases: **relationships between tables**.

You will learn:

- What SQL relationships are
- The difference between **Primary Keys** and **Foreign Keys**
- How to link tables together
- How to retrieve combined data using **INNER JOIN**

---

## Step 1: Restoring Deleted Data

If the `Pencil` record was deleted earlier, we first add it back.

### Insert Pencil Record

```sql
INSERT INTO products VALUES (2, "Pencil", 0.8, 12);
```

After running this:

- The `products` table contains **Pen** and **Pencil**
- The table is complete again

---

## Why We Need Relationships

So far:

- `customers` table stores customer data
- `products` table stores product data

But:

- Customers place **orders**
- Orders involve **customers** and **products**

Instead of duplicating data, SQL uses **relationships** to link tables together.

---

## Creating the `orders` Table

The `orders` table will store:

- Order information
- References to customers and products

---

## Orders Table Fields

| Column       | Purpose                  |
| ------------ | ------------------------ |
| id           | Primary Key for orders   |
| order_number | Unique order identifier  |
| customer_id  | Links to customers table |
| product_id   | Links to products table  |

---

## Foreign Keys Explained

### Primary Key

- Uniquely identifies a record in its table
- Example: `customers.id`, `products.id`

### Foreign Key

- A field that references a Primary Key in another table
- Creates a relationship between tables

---

## Creating the Orders Table with Foreign Keys

```sql
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

After running this:

- The `orders` table is created
- Relationships are established with `customers` and `products`

---

## Viewing the Orders Schema

The schema shows:

- `id` as the Primary Key
- `customer_id` and `product_id` as Foreign Keys
- Links between all three tables

---

## Creating an Order Record

### Order Details

- Order ID: `1`
- Order number: `4362`
- Customer ID: `2` (Angela Yu)
- Product ID: `1` (Pen)

```sql
INSERT INTO orders VALUES (1, 4362, 2, 1);
```

This means:

- Customer with ID `2` bought product with ID `1`

---

## Why This Is Powerful

Using Foreign Keys:

- No data duplication
- Tables remain small and organized
- Data can be combined later when needed

---

## Introducing JOINs

A **JOIN** allows you to:

- Combine data from multiple tables
- Use relationships defined by Foreign Keys

There are multiple types of JOINs:

- LEFT JOIN
- RIGHT JOIN
- FULL JOIN
- **INNER JOIN** (most common)

This lecture focuses on **INNER JOIN**.

---

## INNER JOIN Explained

An `INNER JOIN`:

- Combines rows from two tables
- Only includes rows where the matching condition is met

---

## Joining Orders with Customers

### Goal

Retrieve:

- Order number
- Customer name
- Customer address

---

### INNER JOIN Syntax

```sql
SELECT columns
FROM table1
INNER JOIN table2
ON matching_condition;
```

---

### Example: Orders + Customers

```sql
SELECT
  orders.order_number,
  customers.first_name,
  customers.last_name,
  customers.address
FROM orders
INNER JOIN customers
ON orders.customer_id = customers.id;
```

Result:

- A new result table
- Data combined from both tables
- Useful for shipping and order processing

---

## Joining Orders with Products (Challenge Solution)

### Goal

Retrieve:

- Order number
- Product name
- Price
- Stock

---

### INNER JOIN Example

```sql
SELECT
  orders.order_number,
  products.name,
  products.price,
  products.stock
FROM orders
INNER JOIN products
ON orders.product_id = products.id;
```

Result:

- Order details combined with product information
- Data pulled from multiple tables seamlessly

---

## Why SQL Relationships Matter

Relationships allow you to:

- Scale databases efficiently
- Avoid duplicated data
- Query complex data easily
- Build real-world applications

This is the **real power of SQL**.

---

## Key Takeaways

- Primary Keys uniquely identify records
- Foreign Keys link tables together
- Relationships keep databases organized
- INNER JOIN combines related data
- SQL can assemble data dynamically from multiple tables

---

## What’s Next?

You can now:

- Experiment with different JOINs
- Write more complex queries
- Build fully relational databases
- Practice combining data across tables
