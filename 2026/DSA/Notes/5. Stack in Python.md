# Stack in Python

## 🔹 1. What is a Stack?

A **Stack** is a data structure that follows:

👉 **LIFO (Last In, First Out)**

- The element added last is removed first.

---

### 📌 Real-Life Example

Think of a **stack of books**:

```
Top → [Book 4]
[Book 3]
[Book 2]
Bottom [Book 1]
```

- You can only remove the **top book**
- You cannot remove from the middle

---

## 🔹 2. Key Idea

- Insert → only at **top**
- Delete → only from **top**
- Access → only **top element**

---

## 🔹 3. Why Use Stack?

Stack is useful when:

- You want **controlled access**
- You don’t want users to access middle elements

---

### 📌 Real-Life Uses

- Undo / Redo operations
- Browser back button
- Function calls (call stack)
- Expression evaluation (like brackets checking)

---

## 🔹 4. Basic Operations in Stack

---

### ✅ 1. Push (Insert)

- Adds element to the top

```
Push(10)
Push(20)
Push(30)

Stack → [30, 20, 10]
```

---

### ✅ 2. Pop (Delete)

- Removes top element

```
Pop() → removes 30

Stack → [20, 10]
```

---

### ✅ 3. Peek (Top Element)

- Shows top element without removing it

```
Peek() → 20
```

---

### ✅ 4. isEmpty()

- Checks if stack is empty

---

### ✅ 5. Length

- Returns number of elements

---

## 🔹 5. Important Rule

❌ Cannot access middle elements
❌ Cannot delete random elements

✔ Only top element is accessible

---

## 🔹 6. Stack Implementation in Python

We use **Python List** to implement Stack.

---

### 📌 Step 1: Create Stack Class

```python
class Stack:
    def __init__(self):
        self.s = []
```

---

### 📌 Step 2: Length Function

```python
def length(self):
    return len(self.s)
```

---

### 📌 Step 3: Push (Insert at Top)

👉 Using index 0 as top

```python
def push(self, value):
    self.s.insert(0, value)
```

---

### 📌 Step 4: Peek

```python
def peek(self):
    if len(self.s) == 0:
        raise Exception("Stack is empty")
    return self.s[0]
```

---

### 📌 Step 5: Pop

```python
def pop(self):
    if len(self.s) == 0:
        raise Exception("Stack is empty")
    return self.s.pop(0)
```

---

## 🔹 7. Example Usage

```python
stk = Stack()

stk.push(10)
stk.push(20)
stk.push(30)

print(stk.peek())   # 30

print(stk.pop())    # 30
print(stk.pop())    # 20
print(stk.pop())    # 10
```

---

## 🔹 8. Important Concept

👉 We treated **index 0 as top**

Alternative approach:

- Use `append()` → insert at end
- Use `pop()` → remove from end

---

### 🔁 Alternative (Better Way)

```python
def push(self, value):
    self.s.append(value)

def pop(self):
    return self.s.pop()

def peek(self):
    return self.s[-1]
```

---

## 🔹 9. Why Python List is Helpful?

- No need to worry about size (dynamic)
- No overflow issue (unlike arrays in C/C++)

---

## 🔹 10. Common Mistakes

❌ Trying to access middle elements
❌ Forgetting empty check before pop/peek
❌ Mixing up FIFO and LIFO

---

## 🔹 11. Summary Table

| Operation | Meaning       |
| --------- | ------------- |
| Push      | Add element   |
| Pop       | Remove top    |
| Peek      | View top      |
| isEmpty   | Check empty   |
| Length    | Size of stack |

---

## 🎯 Final Tip

> Stack is simple — don’t spend too much time on it.
> Learn basics → solve few problems → move on 🚀