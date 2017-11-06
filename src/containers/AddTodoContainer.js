import { connect } from 'react-redux';
import {default as Component} from '../components/AddTodo';
const AddTodoContainer = connect()(Component);
export default AddTodoContainer; 