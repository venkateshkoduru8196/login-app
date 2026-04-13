import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topbar.css'; // Import the updated CSS for Topbar

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Handle logout and navigate to the home page
  };

  return (
    <div className="topbar">
      <span>Username</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Topbar;