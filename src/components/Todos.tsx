import React from "react";
import Todo from "../models/todo";

type TodosProps = {
  items: Todo[];
};

export default function Todos({ items }: TodosProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

// example from the course video
// props is an object that contains all the attributes that we pass to our component and built in prop children

// const Todos: React.FC<{items:string[]}> =>(props) {
//     return <ul>{props.children}</ul>;
//   }
