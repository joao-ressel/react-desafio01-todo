import { useState } from "react";
import { Todo } from "./interfaces/todo";
import { Form } from "./components/form";
import { List } from "./components/list";
import "./style.css";
import logo from "./assets/Logo.png";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="logo-back">
        <img src={logo} alt="Logo todo" />
      </div>
      <div className="app">
        <Form addTodo={addTodo} />
        <div className="todo-info">
          <span>Tarefas criadas {todos.length}</span>
          <span>
            Concluídas {todos.filter((todo) => todo.completed).length} de {todos.length}
          </span>
        </div>
        <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};
