import React, { useReducer, useState, useEffect } from 'react';
import { initialState, reducer } from './reducers/todoReducer';
import './App.css';
import styled from 'styled-components';


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
      <StyledHeader>Get Sh!t Done v2</StyledHeader>
      <StyledContainer>
      <div className="task-form">
        <StyledSubHeader>Add Todo's</StyledSubHeader>
        <StyledInput
        className='form-input' 
        value={inputValue} 
        onChange={handleChanges}
        placeholder="Type your task here" />
        <AddButton
         className='form-button'
          onClick={() => dispatch({ type: 'ADD_TODO', payload: inputValue })}
        >
          Add Todo
        </AddButton>
        <br />
        <ClearButton className='filterTodos' onClick={() => filterTodos()}>
        Clear Completed Tasks
      </ClearButton>
      </div>
      <div className="task-container">
      <StyledSubHeader>NEED TO DO:</StyledSubHeader>
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
          <CompletedButton
          className='done-button' 
          onClick={() => markCompleted(todo.id)}>
            Complete!
            </CompletedButton>
        </div>
      ))}
      </div>
      </StyledContainer>
    </div>
    
  );
}
export default App

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #f9f9f9;
height: 100%;
width: 90%;
`
const AddButton = styled.button`
  background: #247BA0;
  color: #FFF;
  font-weight: bold;
  padding: 5px;
  margin: 10px;
  border: 0;
`
const ClearButton = styled.button`
  background: #1F487E;
  color: #FFF;
  font-weight: bold;
  padding: 5px;
  margin: 10px;
  border: 0;
`
const CompletedButton = styled.button`
  background: #FB3640;
  color: #FFF;
  font-weight: bold;
  padding: 5px;
  margin: 10px;
  border: 0;
`

const StyledInput = styled.input`
  padding: 5px;
  margin: 10px;
  border: 1px dashed #1D3461;
`

const StyledHeader = styled.h2`
 font-size: 2.5rem;
 font-weight: bold;
 color: #FB3640;
`
const StyledSubHeader = styled.h3`
 font-size: 1.5rem;
 font-weight: bold;
 color: #1D3461;
 text-decoration: overline underline;
`