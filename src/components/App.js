/**
 * Created by kaisersayeed on 1/13/18.
 */

import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilteredTodoListContainer from '../containers/FilteredTodoList'
import Footer from './Footer'

const App = () => (
    <div>
      This is a simple Todo App.
      <AddTodo/>
      <hr/>
      <FilteredTodoListContainer/>
      <Footer/>
    </div>
);

export default App;

