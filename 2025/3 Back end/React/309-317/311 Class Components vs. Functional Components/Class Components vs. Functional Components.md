State and Lifecycle
https://legacy.reactjs.org/docs/state-and-lifecycle.html

Introducing Hooks
https://legacy.reactjs.org/docs/hooks-intro.html

Hooks FAQ
https://legacy.reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both

React: Class Components vs Functional Components (with Hooks)

1. Two Ways to Create Components in React
-----------------------------------------
- Functional Components
  - Written as simple functions.
  - Used mostly for displaying UI (stateless) in the past.

- Class Components
  - Written using the `class` keyword.
  - Must extend `React.Component`.
  - Must have a `render()` method to return JSX.

2. Why Were Class Components Used?
-----------------------------------
- In the past:
  - You could only use state (data that changes in the component) inside class components.
  - If you needed state, you had to convert your function component to a class.

3. Example: Counter App Using Class Component
---------------------------------------------
- Uses `this.state` to store data.
- Uses `this.setState()` to update the state.
- Needs more code (boilerplate).
- Requires binding of `this`.

4. Problem with Class Components
---------------------------------
- More code and harder to read.
- Reusing state logic between components is complicated.

5. Introduction of Hooks (2018)
--------------------------------
- Hooks allow functional components to use state and other features.
- Most common hook: `useState`.
- No need for classes just to use state anymore.

6. Example: Counter App Using Hooks
------------------------------------
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
- Fewer lines of code.
- No `this` keyword.
- Easier to understand and maintain.

7. Should We Still Use Classes?
--------------------------------
- New projects: Use Hooks (recommended by React team).
- Existing code: You might still see classes (`this.state`, `this.setState`).
- Both work, but Hooks are future-friendly.

Key Takeaways
--------------
- Before Hooks:
  - Class components were required for state and lifecycle methods.
- Now (with Hooks):
  - Functional components can handle state and side effects.
  - Code is shorter, cleaner, and easier to reuse.
- React’s direction: Prefer functional components + Hooks for new code.

