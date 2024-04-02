import React from "react";
import "./App.css";
import { useState } from "react";

function CounterBox() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default CounterBox;
