import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Settings from './Settings';
import Applications from './Applications';
import Users from './Users';
import './dashboardStyles/dashboardView.css';
import Dashboard from './DashboardContent';

function DashboardView() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className='view-container'>
      <Sidebar setActiveSection={setActiveSection} />

      <div className='content'>
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "settings" && <Settings />}
        {activeSection === "applications" && <Applications />}
        {activeSection === "users" && <Users />}
      </div>
    </div>
  );
}

export default DashboardView;
