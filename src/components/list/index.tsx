import React from "react";

import "./style.css";
import { Todo } from "../../interfaces/todo";
import { Trash } from "@phosphor-icons/react";

interface ListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const List: React.FC<ListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="todo-checkbox"
          />
          <span onClick={() => toggleTodo(todo.id)} className="todo-text">
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} className="delete-button">
            <Trash size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
};
