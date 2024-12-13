import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>MinimalCodeMind</h1>
      <h2>Simple Counter</h2>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
