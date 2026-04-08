# 📘 Lecture 3: Singly Linked List (Chai aur DSA)

## ☕ Introduction (Important Insight)

- **Singly Linked List = Interview Favorite 🔥**
- Interviewer checks:
  - ❌ Not syntax
  - ✅ Logic & thinking

👉 Mostly starts with:

- Drawing
- Explaining
- Reasoning

---

## 🌍 Real-Life Examples

- Spotify "Play Next" queue 🎵
- Browser Back/Forward navigation 🌐

👉 All are based on **Linked List concept**

---

## 🧠 Why Linked List?

### Problem with Arrays:

- Memory is **continuous**
- In some languages → **fixed size**
- Can cause:
  - ❌ Memory waste
  - ❌ No space for new elements

---

### 💡 Linked List Solution:

- Uses **non-continuous memory**
- Memory is allocated **at runtime**
- Can grow/shrink easily

---

## 🔗 What is a Singly Linked List?

A **Singly Linked List** is a collection of **nodes** connected using links.

---

## 📦 Structure of a Node

::contentReference[oaicite:0]{index=0}

Each node has 2 parts:

1. **Data (Info)** → actual value
2. **Next** → address of next node

---

## 🧩 Example

```

[10 | next] → [20 | next] → [30 | None]

```

- First node → called **Head**
- Last node → points to **None**

---

## 🧭 Key Concept: Pointer / Reference

- Each node stores **address of next node**
- No index like array ❌
- Access using **reference (pointer)**

---

## 🎯 Head Pointer

- Starting point of linked list
- Only way to access list

---

## 🚫 Limitation

- Can move only **forward →**
- Cannot go backward ❌

---

## 🔄 Traversal (VERY IMPORTANT 🔥)

Instead of writing `head.next.next...`, we use a **temporary variable**

```python
temp = head

while temp is not None:
    print(temp.data)
    temp = temp.next
```

👉 This is the **most important pattern**

---

## 🧱 Creating Node Class (Python)

```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
```

---

## 🏗️ Linked List Class

```python
class LinkedList:
    def __init__(self):
        self.head = None
```

---

## ➕ Insertion Operations

### 1. Insert at End

### Logic:

- Create new node
- Go to last node
- Link it

```python
def insert_end(self, value):
    new_node = Node(value)

    if self.head is None:
        self.head = new_node
        return

    temp = self.head
    while temp.next:
        temp = temp.next

    temp.next = new_node
```

---

### 2. Insert at Beginning

### Logic:

- New node → points to current head
- Head → moves to new node

```python
def insert_begin(self, value):
    new_node = Node(value)
    new_node.next = self.head
    self.head = new_node
```

---

### 3. Insert in Middle

### Example:

Insert 40 after 20

```
10 → 20 → 30
↓
10 → 20 → 40 → 30
```

### Logic:

- Find node with value (20)
- Adjust links carefully

```python
def insert_after(self, x, value):
    temp = self.head

    while temp:
        if temp.data == x:
            new_node = Node(value)
            new_node.next = temp.next
            temp.next = new_node
            return
        temp = temp.next
```

---

## ❌ Deletion Operation

---

### Logic:

- Find node
- Change previous node’s next pointer

```python
def delete(self, value):
    temp = self.head

    # Case 1: delete head
    if temp and temp.data == value:
        self.head = temp.next
        return

    prev = None

    while temp and temp.data != value:
        prev = temp
        temp = temp.next

    if temp is None:
        return

    prev.next = temp.next
```

---

## 🖨️ Print Linked List

```python
def print_list(self):
    temp = self.head
    while temp:
        print(temp.data, end=" -> ")
        temp = temp.next
```

---

## ⚠️ Important Concepts to Remember

- No index like array ❌
- Use **loop to traverse**
- Head should NEVER move
- Use **temporary pointer**

---

## 🔥 Common Interview Topics

- Reverse Linked List
- Detect Loop
- Middle of Linked List
- Merge Two Lists
- Remove Nth Node

---

## 🚀 Final Takeaways

- Linked List = **Dynamic + Flexible**
- Base for:
  - Graphs
  - Hashing (Chaining)
  - Advanced DS

👉 Master this → Half DSA becomes easier 💯
