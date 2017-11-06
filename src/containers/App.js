import React from 'react';

import AddTodo from '../components/AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <h1>App</h1>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;