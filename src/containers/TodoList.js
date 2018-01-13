import React, {Component} from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {bindActionCreators} from 'redux'
import {toggleTodo} from '../actions'

class TodoListContainer extends Component {
  render() {
   return <TodoList toggleTodo={this.props.toggleTodo} todoList={this.props.todos}/>;
  }
}

const mapStateToProps = ({todos}) => {
  console.log('todos ', todos);
  return {todos};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleTodo}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
