import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import styled from 'styled-components';
import TaskItem from './TaskItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
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
