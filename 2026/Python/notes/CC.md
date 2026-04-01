# 🐍 Python Quick Notes

> Source: https://www.youtube.com/watch?v=fWjsdhR3z3c

## 📌 1. What is Python?

- Python is a **simple, readable, high-level programming language**
- Used in:
  - Web development 🌐
  - Data science 📊
  - AI / ML 🤖
  - Automation ⚙️

👉 Key feature: _Looks like English → easy to learn_

---

## 📌 2. Variables (Storing Data)

```python
item = "banana"
age = 22
```

- Variable = container to store data
- No need to define type (Python is **dynamically typed**)

### ⚠️ Important:

- Case-sensitive:

  ```python
  item ≠ Item
  ```

- Naming style:

  ```python
  item_name = "apple"   # recommended
  ```

---

## 📌 3. Data Types

| Type    | Example      | Meaning         |
| ------- | ------------ | --------------- |
| int     | 10           | Numbers         |
| float   | 10.5         | Decimal numbers |
| str     | "hello"      | Text            |
| bool    | True / False | Logic           |
| list    | [1, 2, 3]    | Collection      |
| dict ⭐ | {"a": 1}     | Key-value pair  |

👉 Interview Tip:
**List vs Tuple**

- List = mutable (can change)
- Tuple = immutable (cannot change)

---

## 📌 4. Type Conversion

```python
age = 22
print("Age is " + str(age))
```

- Convert types using:
  - `str()`
  - `int()`
  - `float()`

👉 Common Interview Question:

> Why error?

```python
"hello" + 10   ❌
```

Because Python can't mix string + int directly.

---

## 📌 5. Operators (Math)

```python
a = 10
b = 5

print(a + b)   # 15
print(a - b)
print(a * b)
print(a / b)
print(a ** b)  # power
```

---

## 📌 6. Conditions (if-else)

```python
age = 25

if age > 21:
    print("Adult")
elif age == 18:
    print("Just adult")
else:
    print("Young")
```

👉 Used for decision-making

---

## 📌 7. Loops

### 🔁 For Loop

```python
for i in range(3):
    print(i)
```

Output:

```
0 1 2
```

👉 Index starts from **0**

### 🔁 Loop through list

```python
names = ["Mario", "Luigi"]

for name in names:
    print(name)
```

---

### 🔁 While Loop

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

---

### 🔁 Infinite Loop + Break

```python
while True:
    user = input("Enter: ")
    if user == "0":
        break
```

---

## 📌 8. Functions (VERY IMPORTANT ⭐)

```python
def say_hello(name):
    print("Hello", name)

say_hello("Mario")
```

👉 Why use functions?

- Reuse code
- Cleaner programs

---

### 🔹 Return Keyword

```python
def add(a, b):
    return a + b
```

👉 Interview Tip:

- `print()` → shows output
- `return` → gives value back

---

### 🔹 pass keyword

```python
def my_function():
    pass
```

- Used as placeholder (no error)

---

## 📌 9. Exception Handling (try-except)

```python
try:
    num = int(input("Enter number: "))
    print(num + 10)
except:
    print("Invalid input")
```

👉 Prevents program crash

---

## 📌 10. Input from User

```python
name = input("Enter your name: ")
```

👉 Always returns **string**

---

# ⭐ IMPORTANT ADDITIONS (Interview Must-Know)

---

## 📌 11. Lists vs Dictionaries

### List

```python
fruits = ["apple", "banana"]
```

### Dictionary

```python
person = {
    "name": "Mario",
    "age": 22
}
```

👉 Interview Question:

- Dictionary = **key-value**
- Faster lookup than list

---

## 📌 12. String Operations

```python
name = "python"

print(name.upper())
print(name.lower())
print(len(name))
print(name[0])
```

---

## 📌 13. Slicing

```python
text = "Python"

print(text[0:3])  # Pyt
```

---

## 📌 14. List Operations

```python
nums = [1, 2, 3]

nums.append(4)
nums.remove(2)
nums.pop()
```

---

## 📌 15. OOP Basics (Very Common)

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello", self.name)
```

👉 Concepts:

- Class = blueprint
- Object = instance

---

## 📌 16. Common Interview Questions

### ❓ Why Python is popular?

- Easy syntax
- Huge libraries
- Versatile

---

### ❓ What is indentation?

- Python uses spaces instead of `{}`

```python
if True:
    print("Hello")
```

---

### ❓ Mutable vs Immutable

- Mutable → list, dict
- Immutable → string, tuple

---

### ❓ Difference: List vs Tuple

| List       | Tuple |
| ---------- | ----- |
| Changeable | Fixed |
| []         | ()    |

---

## 📌 17. Python Libraries (Mention in Interview)

- NumPy → math
- Pandas → data
- Matplotlib → graphs
- Requests → API

---

## 📌 18. Best Practices

- Use meaningful variable names
- Keep functions small
- Avoid repetition
- Use comments

---

# 🚀 Quick Summary (Revise Before Interview)

- Python = easy + powerful
- Variables store data
- Data types → int, str, list, dict
- Use `if-else` for decisions
- Loops → repeat tasks
- Functions → reuse code
- Try-except → handle errors
- OOP basics → class & object
