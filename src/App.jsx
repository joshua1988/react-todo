import { useState } from "react"
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);
    setTodos((currentTodos) => {
      return [...currentTodos, todo]
    })
  }

  const removeTodo = (todo) => {
    const result = todos.filter(todoItem => {
      if (todoItem !== todo) {
        return true;
      }
    })
    setTodos(result);
    localStorage.removeItem(todo);
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  )
}

export default App
