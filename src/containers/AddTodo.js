import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ todoInput: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    const todo = this.state.todoInput;

    if(!todo.trim()) {
      return;
    }
    this.props.addTodo(todo);
    this.setState({todoInput: ''});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
              placeholder="Add todo"
              value={this.state.todoInput}
              onChange={this.onInputChange}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo}, dispatch);
}

function mapStateToProps(state) {
  console.log('todoList', state.todos);
  return {todos: state.todos};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
