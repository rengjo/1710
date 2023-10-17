import React, { useState } from 'react';

export default function Todo(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleCheckboxChange = () => {
    // Wenn geändert wird, aktualisiere isChecked-Status.
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <span>{props.todoName} | </span>
      <span>{props.dueDate} | </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange} // Füge onChange-Handler hinzu
      />
    </li>
  );
}
