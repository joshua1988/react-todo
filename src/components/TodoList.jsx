function TodoList({ todos, onTodoRemove }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => onTodoRemove(todo)}>remove</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList