// import './App.css';

import { CreateTodoButton } from "./Component/CreateTodoButton";
import { TodoCounter } from "./Component/TodoCounter";
import { TodoItem } from "./Component/TodoItem";
import { TodoList } from "./Component/TodoList";
import { TodoSearch } from "./Component/TodoSearch";

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Estudiar react",
    completed: false,
  },
  {
    text: "Practicar mucho",
    completed: false,
  },
];

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>


      <TodoList>
        {todos.map((todo, i) => (
          <TodoItem key={i} text={todo.text} />
          ))}
      </TodoList>
      
          <CreateTodoButton/>
    </>
  );
}

export default App;
