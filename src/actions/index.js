let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text,
  };
};


export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
    id,
  });