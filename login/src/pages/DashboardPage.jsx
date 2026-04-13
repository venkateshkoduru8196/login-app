import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardCard from '../components/DashboardCard';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="dashboard-main">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard cards */}
        <div className="dashboard-cards">
          <DashboardCard title="Total Students" value="1200" />
          <DashboardCard title="Total Faculty" value="50" />
          <DashboardCard title="Total Colleges" value="10" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;