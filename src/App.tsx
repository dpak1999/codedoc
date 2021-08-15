/** @format */

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const handleClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        name="text"
        id="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
