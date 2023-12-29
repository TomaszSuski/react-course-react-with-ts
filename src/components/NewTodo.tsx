import React from "react";
import Todo from "../models/todo";

const NewTodo: React.FC<{ onAddTodo: (id: number, text: string) => void, todos: Todo[] }> = (props) => {
  const textInputRef = React.useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    const newId = props.todos.length >= 1 ? props.todos[props.todos.length - 1].id + 1 : 1;
    props.onAddTodo(newId, enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;