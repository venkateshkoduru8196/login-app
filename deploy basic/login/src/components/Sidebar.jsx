import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>MyApp</h2>
      </div>
      <div>
        <Link to="/profile" className="nav-item">Profile</Link>
        <Link to="/settings" className="nav-item">Settings</Link>
        <Link to="/help" className="nav-item">Help</Link>
      </div>
    </div>
  );
};

export default Sidebar;