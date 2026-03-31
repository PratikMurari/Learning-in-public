# TypeScript with React – Crash Course

> Source: https://youtu.be/-AXlZw6Gatw?si=WGUPY3X4ztjd7AYb

# 1. Big Idea of This Lecture

👉 **React + TypeScript is NOT complicated**

- React (JS) → works same in TypeScript
- TypeScript only adds:
  - type safety
  - better suggestions
  - fewer bugs

💡 Important:

> “Your JavaScript React code is already almost TypeScript.”

---

# 2. Creating React + TypeScript App

Using Vite:

```bash
npm create vite@latest
```

Choose:

- Framework → React
- Variant → TypeScript

---

# 3. Where is TypeScript in React?

At first glance:

- Looks like normal React
- Only difference:

```tsx
.tsx files
```

That’s it 😄

---

# 4. Creating a Component

Example:

```tsx
export function ChaiCard() {
  return <h2>Hello</h2>;
}
```

👉 Nothing TypeScript here yet.

---

# 5. Adding Props (Where TypeScript Starts)

Without types:

```tsx
export function ChaiCard({ name, price }) {
  return <h2>{name}</h2>;
}
```

⚠️ Problem:

- TypeScript shows warning:

  ```
  implicit any
  ```

---

# 6. Fix Using Interface

```ts
interface ChaiCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}
```

Use it:

```tsx
export function ChaiCard({ name, price, isSpecial }: ChaiCardProps) {
  return (
    <>
      <h2>
        {name} {isSpecial && "⭐"}
      </h2>
      <p>{price}</p>
    </>
  );
}
```

---

# 7. Using Component

```tsx
<ChaiCard name="Masala" price={30} />
```

💡 Notice:

- `price` must be number → `{30}` not `"30"`

---

# 8. useState with TypeScript

Basic:

```tsx
const [count, setCount] = useState(0);
```

TypeScript auto-detects:

```ts
count → number
```

---

### Explicit typing

```tsx
const [count, setCount] = useState<number>(0);
```

---

### Union example

```tsx
const [value, setValue] = useState<number | null>(null);
```

---

# 9. Example: Counter Component

```tsx
const [count, setCount] = useState<number>(0)

<button onClick={() => setCount(c => c + 1)}>
  Add
</button>
```

---

# 10. Creating Reusable Types

Create a separate file:

```ts
// types.ts
export interface Chai {
  id: number;
  name: string;
  price: number;
}
```

Import:

```ts
import type { Chai } from "./types";
```

💡 `import type` = only for types (no runtime)

---

# 11. List Component with Types

```ts
interface ChaiListProps {
  items: Chai[];
}
```

Usage:

```tsx
items.map((chai) => (
  <ChaiCard
    key={chai.id}
    name={chai.name}
    price={chai.price}
    isSpecial={chai.price > 30}
  />
));
```

---

# 12. Forms in TypeScript

## Define Props

```ts
interface OrderFormProps {
  onSubmit: (order: { name: string; cups: number }) => void;
}
```

---

## State

```tsx
const [name, setName] = useState<string>("");
const [cups, setCups] = useState<number>(1);
```

---

## Input Handling

```tsx
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setName(e.target.value)
}
```

---

## Important Concept ⚠️

👉 Input values are ALWAYS strings

So convert:

```tsx
setCups(Number(e.target.value));
```

---

## Submit Handler

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  onSubmit({ name, cups });
};
```

---

# 13. Children Prop (Very Important)

React special prop:

```ts
children;
```

---

## Using PropsWithChildren

```ts
import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}
```

---

## Component

```tsx
export function Card({ title, children, footer }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {footer && <div>{footer}</div>}
    </section>
  );
}
```

---

## Usage

```tsx
<Card title="Chai">
  <p>Inside content</p>
</Card>
```

---

# 14. Custom Hook with TypeScript

## Step 1: Define State

```ts
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
```

---

## Step 2: Hook

```ts
export function useFetch<T>(url: string): FetchState<T> {
```

---

## Step 3: State

```tsx
const [state, setState] = useState<FetchState<T>>({
  data: null,
  loading: true,
  error: null,
});
```

---

## Step 4: Return

```tsx
return state;
```

---

💡 Key idea:

- Generics (`<T>`) allow flexible data types

---

# 15. Key Patterns in React + TypeScript

You will repeatedly do:

### 1. Props typing

```ts
interface Props {}
```

---

### 2. useState typing

```ts
useState<Type>();
```

---

### 3. Event typing

```ts
React.ChangeEvent<HTMLInputElement>;
React.FormEvent<HTMLFormElement>;
```

---

### 4. Reusable types

```ts
types.ts file
```

---

### 5. Generics

```ts
useFetch<T>();
```

---

# 16. Common Confusions Cleared

❌ “React course JS or TS?”

✔️ Answer:

> Same thing. TypeScript just adds types.

---

❌ “Do I need separate TS learning?”

✔️ No. Just basics + practice.

---

❌ “Why so many types?”

✔️ For:

- safety
- clarity
- better DX

---

# 17. Final Takeaways

- React + TypeScript = React + types
- No big complexity
- Mostly:
  - interfaces
  - props typing
  - useState typing
  - events typing

---

# 18. Golden Line

> “Confidence is more important than syntax.”

Once you understand:

- props
- state
- events

👉 You can work in:

- React
- Next.js
- Express
- Full stack apps

---

# Done 🎉

You now understand:

✔ React + TypeScript basics
✔ Props, State, Forms
✔ Children & Generics
✔ Custom Hooks
