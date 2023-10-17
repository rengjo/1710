'use client'
// src/Clock.js
import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h2>Uhrzeit</h2>
      <p>Aktuelle Uhrzeit: {formattedTime}</p>
    </div>
  );
}

export default Clock;