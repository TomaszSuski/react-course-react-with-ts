import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

type TodoProps = {
  todo: Todo;
  removeTodo: (id: number) => void;
};

export default function TodoItem({ todo, removeTodo }: TodoProps) {
  return <li className={classes.item} onClick={()=>removeTodo(todo.id)}>{todo.text}</li>;
}
