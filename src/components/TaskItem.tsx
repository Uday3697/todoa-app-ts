import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Task } from '../features/tasks/types';
import { deleteTask, toggleTaskCompletion, editTask } from '../features/tasks/tasksSlice';

const Item = styled.li<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.completed ? '#d3ffd3' : '#fff')};
  margin-bottom: 10px;
  border-radius: 4px;
  border:1px solid grey
`;

const Text = styled.span<{ completed: boolean }>`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const Button = styled.button`
  margin-left: 10px;
  font-size: 14px;
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
      <div>
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
