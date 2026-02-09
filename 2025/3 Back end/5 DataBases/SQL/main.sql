-- We did CREATE Table and INSERT Data in this sql file

-- step by step instructions:
-- create a table called customers with id, first_name, last_name and address columns
-- insert some values into the customers table and then fetch the values where first_name is 'John'
-- create a table called products with id, name and price columns
-- insert a product into the products table and then select the product with id = 1
-- insert a product with no price into the products table and then select the product with id = 2

-- create customers table
CREATE TABLE customers (
  id INT,
  first_name STRING,
  last_name STRING,
  address STRING,
  PRIMARY KEY (id)
);
-- insert some values
INSERT INTO customers VALUES (1, 'John', 'Doe', '32 Cherry Blvd');
INSERT INTO customers VALUES (2, 'Angela', 'Yu', '12 Sunset Drive');
-- fetch some values
SELECT * FROM customers WHERE first_name = 'John';


-- create the products table
CREATE TABLE products (
    id INT NOT NULL,
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
);

--insert a product into products table
INSERT INTO products VALUES (1, 'Pen', 1.20);

-- select a product with id = 1
SELECT * FROM products WHERE id = 1;

--insert a product with no price into products table
INSERT INTO products (id, name) VALUES (2, 'Pencil');

--select a product with id = 2
SELECT * FROM products WHERE id = 2;

