import React, {Component} from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

class TodoListContainer extends Component {
  render() {
   return <TodoList todoList={this.props.todos}/>;
  }
}

const mapStateToProps = ({todos}) => {
  return {todos};
};

export default connect(mapStateToProps, null)(TodoListContainer);
