import React from 'react'
import Todo from './Todo'

const renderTodoList = (todoList)=> {
  return todoList.map(todo =>
    <Todo
      key={todo.id}
      todo = {todo}
    />
  )
};

const TodoList = (props) => {
  return (
    <ul>
      {renderTodoList(props.todoList)}
    </ul>
  )
};

export default TodoList;
