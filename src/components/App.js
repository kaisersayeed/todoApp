/**
 * Created by kaisersayeed on 1/13/18.
 */

import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoListContainer from '../containers/TodoList'

const App = () => (
    <div>
      This is a simple Todo App.
      <AddTodo/>
      <hr/>
      <TodoListContainer/>
    </div>
);

export default App;

