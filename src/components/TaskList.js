import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/actions';
import '../styles/TaskList.css';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      <h3>Task List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;


