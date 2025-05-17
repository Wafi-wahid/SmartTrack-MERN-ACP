import React from "react";

import {
  FaTachometerAlt,
  FaClock,
  FaTasks,
  FaBook,
  FaSpa,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">SmartTrack</div>

      <div className="nav-links">
        <div className="nav-btn">
          <FaTachometerAlt className="nav-icon" />
          <span>DashBoard</span>
        </div>
        <div className="nav-btn">
          <FaClock className="nav-icon" />
          <span>Timeline</span>
        </div>
        <div className="nav-btn">
          <FaTasks className="nav-icon" />
          <span>Tasks</span>
        </div>
        <div className="nav-btn">
          <FaBook className="nav-icon" />
          <span>Journaling</span>
        </div>
        <div className="nav-btn">
          <FaSpa className="nav-icon" />
          <span>Meditation</span>
        </div>
        <div className="nav-btn">
          <FaCog className="nav-icon" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
