import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (id: number, text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id, text }]);
  };
  const removeTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} todos={todos} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
