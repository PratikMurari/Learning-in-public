# Lecture 3: Updating Single Values and Adding Columns in SQL

## Overview

In this lecture, we cover the **U in CRUD: Update**.

You will learn how to:

- Update existing records in a table
- Safely modify specific rows using `WHERE`
- Add new columns to an existing table
- Understand why planning your table schema is important

---

## CRUD Recap

| Letter | Meaning |
| ------ | ------- |
| C      | Create  |
| R      | Read    |
| U      | Update  |
| D      | Delete  |

In this lesson, we focus on **updating data and table structure**.

---

## Updating Existing Data with UPDATE

### The Problem

Our `products` table currently looks like this:

- `Pen` has a price
- `Pencil` has a `NULL` price

We now want to **update the pencil’s price**.

---

## UPDATE Statement Syntax

```sql
UPDATE table_name
SET column_name = value
WHERE condition;
```

- `UPDATE` → selects the table
- `SET` → changes column values
- `WHERE` → limits which rows are updated

---

## Updating a Single Record

### Example: Update Pencil Price

The pencil has:

- `id = 2`
- `price = NULL`

We want to set the price to `0.8`.

```sql
UPDATE products
SET price = 0.8
WHERE id = 2;
```

✅ Only the pencil record is updated
❗ Without `WHERE`, **every row** would be updated

---

## Why WHERE Is Critical

This query is **dangerous**:

```sql
UPDATE products
SET price = 0.8;
```

It would:

- Update **all products**
- Overwrite existing prices

👉 Always use `WHERE` unless you intentionally want to update every record.

---

## Result After Update

After running the correct query:

- Pencil now has a valid price
- No `NULL` values remain in the `price` column

---

## Changing the Table Structure with ALTER TABLE

### New Requirement

We now want to track:

- How many items are in stock for each product

This requires:

- Adding a **new column** to the table

---

## ALTER TABLE Statement

`ALTER TABLE` is used to:

- Add columns
- Delete columns
- Modify columns

---

## ALTER TABLE Syntax (Add Column)

```sql
ALTER TABLE table_name
ADD column_name data_type;
```

---

## Adding a Stock Column

We want to:

- Add a column named `stock`
- Store whole numbers

```sql
ALTER TABLE products
ADD stock INT;
```

✅ A new column appears
❗ Existing rows have `NULL` values by default

---

## Updating the New Column Values

### Stock Data

| Product | ID  | Stock |
| ------- | --- | ----- |
| Pen     | 1   | 32    |
| Pencil  | 2   | 12    |

---

### Update Stock for Pen

```sql
UPDATE products
SET stock = 32
WHERE id = 1;
```

---

### Update Stock for Pencil

```sql
UPDATE products
SET stock = 12
WHERE id = 2;
```

---

## Final Table State

After updates:

- All products have prices
- All products have stock values
- No `NULL` values remain

---

## Important Lessons

- `UPDATE` modifies existing data
- `WHERE` prevents accidental mass updates
- `ALTER TABLE` changes the structure of a table
- Adding columns later can be painful
- Planning your schema early saves work later

---

## Key Takeaways

- Always use `WHERE` with `UPDATE`
- SQL allows safe, precise data modification
- Schema changes affect all existing records
- Database design matters from the start

---

## What’s Next?

Next, you’ll continue exploring CRUD by learning how to:

- Delete records
- Refine database management skills
