import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

type TodoProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoProps) {
  return <li className={classes.item}>{todo.text}</li>;
}
