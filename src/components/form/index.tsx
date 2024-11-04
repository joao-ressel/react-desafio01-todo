import { useState } from 'react';
import "./style.css";
import { PlusCircle } from "@phosphor-icons/react";


interface FormProps {
    addTodo: (text: string) => void;
  }


export const Form: React.FC<FormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add <PlusCircle size={20}/> </button>
    </form>
  );
}