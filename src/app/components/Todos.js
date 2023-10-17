'use client';
import Todo from "./Todo"

export default function Todos(props) { // Vergiss nicht, die Props als Parameter hinzuzufügen
    return (
        <div style={{
            backgroundColor: props.backgroundColor, // Hintergrundfarbe über Props anpassen
            color: props.textColor, // Textfarbe über Props anpassen
            border: "2px solid blue"
        }}>
            <h1>Todo's</h1>
            <ul>
                <Todo 
                    todoName="Lernen" 
                    dueDate="17.10.2023"
                    checked={true}
                />
                <Todo 
                    todoName="mehr Lernen" 
                    dueDate="18.10.2023"
                    checked={true}
                />
                <Todo 
                    todoName="mehr dazu Lernen" 
                    dueDate="19.10.2023"
                    checked={true}
                />
                <Todo 
                    todoName="nicht aufhören zu Lernen" 
                    dueDate="22.10.2023"
                    checked={true}
                />
            </ul>
        </div>
    )
}
