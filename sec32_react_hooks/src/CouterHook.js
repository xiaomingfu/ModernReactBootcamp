import React, { useState } from "react";

function CouterHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
export default CouterHook;
