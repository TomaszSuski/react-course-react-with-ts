import React from "react";
import Todo from "../models/todo";

type TodoProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoProps) {
  return <li>{todo.text}</li>;
}
