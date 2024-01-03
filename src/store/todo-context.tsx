import React from "react";
import Todo from "../models/todo";

const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (id: number, text: string) => void;
  removeTodo: (id: number) => void;
}>({
  items: [],
  addTodo: (id: number, text: string) => {},
  removeTodo: (id: number) => {},
});

export default TodosContext;

export const TodosContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodoHandler = (id: number, text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id, text }]);
  };
  const removeTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
