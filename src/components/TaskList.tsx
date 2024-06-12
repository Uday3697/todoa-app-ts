import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import styled from 'styled-components';
import TaskItem from './TaskItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 400px; /* Set maximum height */
  overflow-y: auto; /* Add vertical scrollbar when content overflows */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */

  /* Hide scrollbar in Webkit-based browsers (e.g., Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Enable word break */
  word-break: break-word;
`;

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <List>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
