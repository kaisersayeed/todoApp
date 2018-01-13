import React, {Component} from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {bindActionCreators} from 'redux'
import {toggleTodo} from '../actions'

class FilteredTodoListContainer extends Component {
  render() {
   return <TodoList
       toggleTodo={this.props.toggleTodo}
       todoList={this.props.todos}
   />;
  }
}

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};


const mapStateToProps = ({todos, visibilityFilter}) => {
  return {todos: getFilteredTodos(todos, visibilityFilter)};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleTodo}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredTodoListContainer);
