import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/todoReducer';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };
  console.log(state);
  

  return (
    <div className='App'>
      <div className="task-form">
        <input value={inputValue} onChange={handleChanges} />
        <button
          onClick={() => dispatch({ type: 'ADD_TODO', payload: inputValue })}
        >
          Add Todo
        </button>
      </div>
      <div className="task-container">
        {state.map((todo) => (
          <p>{todo.item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
