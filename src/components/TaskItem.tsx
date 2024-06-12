import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Task } from '../features/tasks/types';
import { deleteTask, toggleTaskCompletion, editTask } from '../features/tasks/tasksSlice';

const Item = styled.li<{ completed: boolean }>`
  display: flex;
  flex-direction: column; /* Change to column for smaller screens */
  justify-content: space-between;
  align-items: flex-start; /* Align items at the start */
  padding: 10px;
  background-color: ${props => (props.completed ? '#d3ffd3' : '#fff')};
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid grey;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Change back to row layout for larger screens */
    align-items: center; /* Center align items horizontally */
  }
`;

const Text = styled.span<{ completed: boolean }>`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  font-size: 14px; 
  word-wrap: break-word; 
  white-space: pre-line;
  overflow: hidden;
  width: 90%;
  margin-bottom: 5px; /* Add spacing between text and buttons */

  @media screen and (min-width: 768px) {
    flex: 1; /* Allow text to grow and take up remaining space */
    margin-bottom: 0; /* Remove bottom margin for larger screens */
  }
`;

const Button = styled.button`
  margin-left: 5px; 
  font-size: 12px; 

  @media screen and (min-width: 768px) {
    margin-left: 10px; /* Increase margin for larger screens */
  }
`;

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: editText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <Item completed={task.completed}>
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="task-edit-textarea"
        />
      ) : (
        <Text completed={task.completed}>{task.text}</Text>
      )}
      <div className='btnCon'>
        <Button onClick={handleToggle}>
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </Item>
  );
};

export default TaskItem;
