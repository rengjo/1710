'use client'
// src/Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Counter-Wert-Aktuell: {count}</p>
      <button onClick={incrementCount}>durch klick erhöhe um 5</button>
    </div>
  );
}

export default Counter;