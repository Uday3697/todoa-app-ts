import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import styled from 'styled-components';
import './App.css'

const AppWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 50px lime;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <h1 style={{color:'green'}}>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </AppWrapper>
  );
};

export default App;
