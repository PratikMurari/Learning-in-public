import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Cups orderded: {count} </p>
      <button onClick={() => setCount(count + 1)}>Order one More</button>
    </div>
  );
}
