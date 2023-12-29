import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const AddTodoHandler = (id: number, text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id, text }]);
  };

  return (
    <div className="App">
      <Todos items={todos} />
      <NewTodo onAddTodo={AddTodoHandler} todos={todos} />
    </div>
  );
}

export default App;
