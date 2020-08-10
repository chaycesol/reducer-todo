import React, { useReducer, useState, useEffect } from 'react';
import { initialState, reducer } from './reducers/todoReducer';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };
  console.log(state);
  
  const markCompleted = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: {id} })
  };

  const filterTodos = () => {
    dispatch({ type: 'FILTER_TODOS' });
  };

  useEffect(() => {
    console.log(state);
  }, [state])
  return (
    <div className='App'>
      <div className="task-form">
        <input 
        className='form-input' 
        value={inputValue} 
        onChange={handleChanges} />
        <button
         className='form-button'
          onClick={() => dispatch({ type: 'ADD_TODO', payload: inputValue })}
        >
          Add Todo
        </button>
        <button className='filterTodos' onClick={() => filterTodos()}>
        Filter out Completed
      </button>
      </div>
      <div className="task-container">
      {state.map((todo) => (
        <div key={todo.id}>
          <span
            style={
              todo.completed
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            {todo.item}
          </span>
          <button 
          className='done-button' 
          onClick={() => markCompleted(todo.id)}>
            Complete!
            </button>
        </div>
      ))}
      </div>
    </div>
  );
}
export default App
