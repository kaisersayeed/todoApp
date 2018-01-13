import React from 'react'

const Todo = ({todo, toggleTodo}) => (
  <li
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
    onClick={(event)=> onTodoItemClick(event, todo.id, toggleTodo)}
    >
    {todo.text}
  </li>
);

const onTodoItemClick = (event, id, toggleTodo) => {
  event.preventDefault();
  toggleTodo(id);
};

export default Todo;
