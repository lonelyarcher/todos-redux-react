import React from 'react';

import AddTodoContainer from './AddTodoContainer';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';

const App = () => (
  <div>

    <AddTodoContainer />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;