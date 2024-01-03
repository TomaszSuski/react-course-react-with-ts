import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import TodosContext from "../store/todo-context";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    addTodo(enteredText);
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
