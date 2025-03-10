import React from "react";
import { FaChartBar, FaUser, FaCog, FaSignOutAlt, FaClipboardList } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import "./dashboardStyles/sidebar.css";

const Sidebar = ({ setActiveSection }) => {  // Accept setActiveSection as a prop
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item" onClick={() => setActiveSection("dashboard")}>
          <FaChartBar className="sidebar-icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item" onClick={() => setActiveSection("forms")}>
          <FaClipboardList className="sidebar-icon" />
          <span>Forms</span>
        </li>
        <li className="sidebar-item" onClick={() => setActiveSection("applications")}>
          <IoIosApps className="sidebar-icon" />
          <span>Applications</span>
        </li>
        <li className="sidebar-item" onClick={() => setActiveSection("analytics")}>
          <MdAnalytics className="sidebar-icon" />
          <span>Analytics</span>
        </li>
        <li className="sidebar-item" onClick={() => setActiveSection("users")}>
          <FaUser className="sidebar-icon" />
          <span>Users</span>
        </li>
        <li className="sidebar-item" onClick={() => setActiveSection("settings")}>
          <FaCog className="sidebar-icon" />
          <span>Settings</span>
        </li>
        <li className="sidebar-item">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
