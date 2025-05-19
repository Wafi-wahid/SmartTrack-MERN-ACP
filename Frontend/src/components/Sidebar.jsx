import {
  FaTachometerAlt,
  FaClock,
  FaTasks,
  FaBook,
  FaBrain,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/dashboard.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">SmartTrack</div>
      <nav className="nav-links">
        <NavLink to="/" className="nav-btn" end>
          <FaTachometerAlt className="nav-icon" /> Dashboard
        </NavLink>
        <NavLink to="/calender" className="nav-btn">
          <FaClock className="nav-icon" /> Timeline
        </NavLink>
        <NavLink to="/task" className="nav-btn">
          <FaTasks className="nav-icon" /> Tasks
        </NavLink>
        <NavLink to="/journal" className="nav-btn">
          <FaBook className="nav-icon" /> Journaling
        </NavLink>
        <NavLink to="/meditation" className="nav-btn">
          <FaBrain className="nav-icon" /> Meditation
        </NavLink>
      </nav>
      <button className="logout-btn">Logout</button>
    </aside>
  );
}
