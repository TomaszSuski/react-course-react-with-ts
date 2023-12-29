import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
  items: Todo[];
};

export default function Todos({ items }: TodosProps) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
}

// example from the course video
// props is an object that contains all the attributes that we pass to our component and built in prop children

// const Todos: React.FC<{items:string[]}> =>(props) {
//     return <ul>{props.children}</ul>;
//   }
