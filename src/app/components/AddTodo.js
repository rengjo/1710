'use client'
import React, { useState } from 'react';
import Input from "./Input";

export default function AddTodo(props) {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    console.log('Button wurde geklickt');
    console.log('todo:', todo);

  };

  return (
    <div style={{
      backgroundColor: props.backgroundColor, // Hintergrundfarbe über Props anpassen
      color: props.textColor, // Textfarbe über Props anpassen
      border: "2px solid green",
      padding: "1rem"
    }}>
      <Input
        placeholder="Your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
