import React from 'react'
import Todo from './Todo'

const renderTodoList = ({todoList, toggleTodo})=> {
  return todoList.map(todo =>
    <Todo
      key={todo.id}
      todo = {todo}
      toggleTodo={toggleTodo}
    />
  )
};

const TodoList = (props) => {
  return (
    <ul>
      {renderTodoList(props)}
    </ul>
  )
};

export default TodoList;
