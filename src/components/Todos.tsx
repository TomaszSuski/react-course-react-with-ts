import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todo-context";

export default function Todos() {
  const { items, removeTodo } = useContext(TodosContext);
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
