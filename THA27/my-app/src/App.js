import './App.css';
import Addtodo from "./components/addTodo"
import List from "./components/todoList"

function App() {
  return (
    <div className="App">
      <h1>TODO LIST </h1>
      <Addtodo />
      <List />
    </div>
  );
}

export default App;