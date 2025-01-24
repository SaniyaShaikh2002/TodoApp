import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="avatar"
        />
        <h3>Hey, User!</h3>
      </div>
      <ul className="nav">
        <li>All Tasks</li>
        <li>Today</li>
        <li>Important</li>
        <li>Planned</li>
        <li>Assigned to Me</li>
      </ul>
      <button className="add-list">+ Add List</button>
    </div>
  );
}

export default Sidebar;

