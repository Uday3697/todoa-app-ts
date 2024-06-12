import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../features/tasks/tasksSlice';

const TaskInputWrapper = styled.div`
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  width: calc(100% - 22px);
  margin-bottom: 10px; /* Add bottom margin for spacing */
  resize: vertical; /* Allow vertical resizing */
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: green;
  margin-top: 10px;
  box-shadow: 2px 2px 5px green;
  width: 100px;

  @media screen and (max-width: 768px) {
    width: 50%; /* Set button width to 50% of the container for smaller screens */
  }
`;

const TaskInput: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <TaskInputWrapper>
      <form onSubmit={handleSubmit}>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          rows={3} // Set the number of rows for textarea
        />
        <Button type="submit">Add</Button>
      </form>
    </TaskInputWrapper>
  );
};

export default TaskInput;
