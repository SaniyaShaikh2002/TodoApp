import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import '../styles/TaskInput.css';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
