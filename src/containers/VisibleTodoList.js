import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { withRouter } from 'react-router';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, ownProp) => {
  return {
    todos: getVisibleTodos(state.todos, ownProp.match.params.filter || 'all'),
  };
};



const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick : toggleTodo }
)(TodoList));

export default VisibleTodoList;