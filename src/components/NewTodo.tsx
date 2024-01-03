import React, { useRef } from "react";
import Todo from "../models/todo";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{
  onAddTodo: (id: number, text: string) => void;
  todos: Todo[];
}> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    const newId =
      props.todos.length >= 1 ? props.todos[props.todos.length - 1].id + 1 : 1;
    props.onAddTodo(newId, enteredText as string);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler} className={classes.form}>
      <div>
        <label htmlFor="todo-text" >Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit" >ADD TODO</button>
    </form>
  );
};

export default NewTodo;
