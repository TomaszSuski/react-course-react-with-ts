import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type TodosProps = {
  items: Todo[];
  removeTodo: (id: number) => void;
};

export default function Todos({ items, removeTodo }: TodosProps) {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

// example from the course video
// props is an object that contains all the attributes that we pass to our component and built in prop children

// const Todos: React.FC<{items:string[]}> =>(props) {
//     return <ul>{props.children}</ul>;
//   }
