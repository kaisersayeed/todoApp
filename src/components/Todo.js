import React from 'react'

const Todo = ({todo, toggleTodo}) => (
  <li onClick={(e)=>{
    e.preventDefault();
    toggleTodo(todo.id)
  }}>
    {todo.text}
  </li>
);

export default Todo;
