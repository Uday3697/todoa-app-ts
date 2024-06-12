import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import styled from 'styled-components';
import './App.css';

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
    padding: 8px;
  }
`;

const Title = styled.h1`
  color: green;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust font size for smaller screens */
  }
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Title>To-Do App</Title>
      <TaskInput />
        <TaskList />
    </AppWrapper>
  );
};

export default App;
