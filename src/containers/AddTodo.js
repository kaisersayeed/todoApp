import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };

    this.onInputChange = (event)=> {
      this.setState({ todoInput: event.target.value });
    };

    this.onFormSubmit = (event) => {
      event.preventDefault();

      const todo = this.state.todoInput;

      if(!todo.trim()) {
        return;
      }
      this.props.addTodo(todo);
      this.setState({todoInput: ''});
    };
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

const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({addTodo}, dispatch);
};

const mapStateToProps = ({todos})=> {
  return {todos};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
