/**
 * Created by kaisersayeed on 1/13/18.
 */

import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoListContainer from '../containers/TodoList'
import Footer from './Footer'

const App = () => (
    <div>
      This is a simple Todo App.
      <AddTodo/>
      <hr/>
      <TodoListContainer/>
      <Footer/>
    </div>
);

export default App;

