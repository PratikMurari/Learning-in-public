# Lecture 4: Doubly Linked List & Circular Linked List

## 🔹 1. Introduction

- Linked List is a data structure where elements (nodes) are connected using pointers.
- In **Singly Linked List**, we can move only forward.
- In **Doubly Linked List**, we can move both forward and backward.

---

## 🔹 2. Doubly Linked List (DLL)

### 📌 Structure of a Node

Each node has **3 parts**:

1. `prev` → points to previous node
2. `data` → stores value
3. `next` → points to next node

### 📌 Example Representation

```

NULL ← [10] ⇄ [20] ⇄ [30] → NULL

```

### 📌 Key Points

- First node → `prev = NULL`
- Last node → `next = NULL`
- Middle nodes → both `prev` and `next` exist
- You can traverse:
  - Forward (using `next`)
  - Backward (using `prev`)

### 📌 Real-Life Examples

- Undo/Redo in text editors
- Browser back & forward buttons

---

## 🔹 3. Why Doubly Linked List?

**Problem in Singly Linked List**:

- Cannot move backward

**Solution**:

- Store both `next` and `previous` pointers

---

## 🔹 4. Operations in Doubly Linked List

### ✅ 1. Insertion at Beginning

Steps:

1. Create new node
2. Point new node's `next` to head
3. Update old head's `prev`
4. Move head to new node

---

### ✅ 2. Insertion at End

Steps:

1. Traverse to last node
2. Create new node
3. Last node's `next` → new node
4. New node's `prev` → last node

---

### ✅ 3. Insertion in Middle (After a Value)

Steps:

1. Search for the node
2. Create new node
3. Update 4 pointers:
   - new.next = current.next
   - new.prev = current
   - current.next.prev = new
   - current.next = new

### ⚠️ Important Tip

> Always update pointers in correct order, otherwise links will break!

---

### ✅ 4. Deletion

#### 🟢 Case 1: Delete First Node

1. Move head to next node
2. Set new head's `prev = NULL`

#### 🟢 Case 2: Delete Middle Node

1. Find node
2. Connect:
   - prev.next → next
   - next.prev → prev

#### 🟢 Case 3: Delete Last Node

1. Go to last node
2. Set previous node's `next = NULL`

---

## 🔹 5. Important Concept

- In DLL, you **don’t need extra variable for previous node**
- Because `prev` pointer already exists

---

## 🔹 6. Circular Linked List (CLL)

### 📌 What is Circular Linked List?

- Last node does NOT point to NULL
- It points back to the **first node (head)**

### 📌 Example

```

[10] → [20] → [30] → [40]
↑ ↓
← ← ← ← ← ← ← ← ← ← ← ← ←

```

---

### 📌 Key Idea

- No NULL at the end
- Traversal becomes circular

---

## 🔹 7. Changes from Normal Linked List

### 🛠️ Change 1:

Instead of:

```

last.next = NULL

```

Use:

```

last.next = head

```

### 🛠️ Change 2 (Traversal)

Instead of:

```

while(temp != NULL)

```

Use:

```

while(temp.next != head)

```

---

## 🔹 8. Circular Doubly Linked List

### 📌 Extra Changes:

1. Last node's `next = head`
2. Head's `prev = last`

### 📌 Example

```

    ⇄ [10] ⇄ [20] ⇄ [30] ⇄ [40]
    ↑                         ↓
    ← ← ← ← ← ← ← ← ← ← ← ← ←

```

---

## 🔹 9. Where is Circular Linked List Used?

- Round Robin Scheduling (CPU scheduling)
- Multiplayer games (turn rotation)
- Circular queues
- Dining Philosopher Problem

---

## 🔹 10. Key Learning Advice 💡

- Focus on **thinking**, not just coding
- Practice by:
  - Drawing diagrams
  - Handling edge cases
- Try imagining:
  - Nodes with more than 2 pointers (advanced thinking)

---

## 🔹 11. Summary

| Feature       | Singly LL | Doubly LL | Circular LL    |
| ------------- | --------- | --------- | -------------- |
| Direction     | One-way   | Two-way   | Circular       |
| Extra Pointer | ❌        | ✅ (prev) | Depends        |
| End Node      | NULL      | NULL      | Points to head |
| Traversal     | Forward   | Both      | Loop           |

---

## 🎯 Final Tip

> If you understand pointer connections clearly, coding becomes easy automatically.
