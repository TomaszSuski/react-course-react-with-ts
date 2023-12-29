import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo(1, 'Learn React'),
    new Todo(2, 'Learn TypeScript'),
  ]
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
