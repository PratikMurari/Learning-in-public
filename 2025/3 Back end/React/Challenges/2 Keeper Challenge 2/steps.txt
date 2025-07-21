Steps for the Keeper App Challenge
==================================

1. Project Setup
----------------
- Start with the course’s Keeper app code template or your local copy.
- Install dependencies with: npm install
- Start the project with: npm start (or use CodeSandbox as shown in the course).

2. Understand the Goal
----------------------
- We want to display ALL notes from the notes.js file.
- Each note should appear as its own Note component in the app.
- The list should be dynamic: if you add a note to notes.js, it automatically appears in the app.

3. Pass Props to the Note Component
-----------------------------------
- In App.jsx, change <Note /> so it uses data from props, not static text.
- Pass a "title" and "content" prop to <Note />, like this:
  <Note title="Sample Title" content="Sample Content"/>
- In Note.jsx, update the component to use:
  - props.title for the note’s title
  - props.content for the note’s content

4. Import the Notes Array
-------------------------
- In App.jsx, import the notes array like this:
  import notes from "../notes";
- This gives you access to all the notes in App.jsx.

5. Render Multiple Notes Using map()
------------------------------------
- Instead of one Note, use the map() method to go through each note:
  notes.map(noteItem => (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  ))
- Replace your single <Note /> with the mapped version above.

6. Use the key Prop
-------------------
- Each Note component inside map() gets a unique "key":
  key={noteItem.key}
- This helps React track each note more efficiently.

7. Clean Up with Arrow Functions
--------------------------------
- Use an inline arrow function inside map. This makes your code much shorter and easier to read, like in step 5.

What We Are Doing:
------------------
- We’re converting the Keeper app from displaying one hardcoded note to dynamically showing ALL notes from the notes.js array.
- We use React "props" to pass each note’s content, allowing code reuse and flexibility.
- "Mapping" lets us display as many notes as we have in the notes.js file, automatically.
- Adding the "key" prop keeps React happy and your UI bug-free.

Why We Do Each Step:
--------------------
- To make our Keeper app flexible and scalable.
- To use React best practices (props, mapping arrays, unique keys).
- To automatically display, update, or add notes without extra coding each time.