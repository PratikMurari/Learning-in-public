import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//Create entry components
//Create props to replace hardcoded data
//Map through the emoji pedia array and render entry components

//we are creating a function called create entry which will be used to map
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
