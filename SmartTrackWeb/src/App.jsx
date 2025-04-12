import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  FaBell,
  FaUserCircle,
  FaTachometerAlt,
  FaClock,
  FaTasks,
  FaCog,
  FaEnvelope,
  FaFolder,
  FaApple,
  FaBook,
  FaPeace,
} from "react-icons/fa";

import "/Users/wafiwahid/University Folder/ACP_Project/SmartTrack-MERN-ACP/SmartTrackWeb/src/App.css";
function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">SmartTrack</div>
        <nav className="nav-links">
          <div className="nav-btn">
            <FaTachometerAlt className="nav-icon" /> DashBoard
          </div>
          <div className="nav-btn">
            <FaClock className="nav-icon" /> Timeline
          </div>
          <div className="nav-btn">
            <FaTasks className="nav-icon" /> Tasks
          </div>
          <div className="nav-btn">
            <FaBook className="nav-icon" /> Journaling
          </div>
          <div className="nav-btn">
            <FaBrain className="nav-icon" /> Meditation
          </div>
          <div className="nav-btn">
            <FaCog className="nav-icon" /> Settings
          </div>
        </nav>
        <button className="logout-btn">Logout</button>
      </aside>

      <main className="main-content">
        <div className="header">
          <h1 className="title">Overview</h1>
          <div className="header-right">
            <input className="search-input" placeholder="Search..." />
            <FaBell className="icon bell-icon" />
            <FaUserCircle className="icon profile-icon" />
          </div>
        </div>

        <div className="stats-grid">
          <div className="card">
            <h2 className="card-title">Total Tasks</h2>
            <p className="card-score">718+</p>
            <p className="card-subtitle">111% more than last year</p>
          </div>

          <div className="card">
            <h2 className="card-title">Current Task</h2>
            <p className="card-score">2/45</p>
            <p className="card-subtitle warning">
              You completed over 37% tasks. Keep it up!
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Journaling</h2>
            <p className="card-subtitle">Write to reflect daily</p>
          </div>

          <div className="card">
            <h2 className="card-title">Meditation</h2>
            <p className="card-subtitle">Calm your mind</p>
          </div>
        </div>

        <div className="chart-grid">
          <div className="card chart-card">
            <h3 className="chart-title">Tasks Done</h3>
            <Line
              data={{
                labels: [
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Tasks",
                    data: [20, 35, 50, 80, 40, 30, 60, 70, 65],
                    borderColor: "#8B5CF6",
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  x: { grid: { color: "#333" } },
                  y: { grid: { color: "#333" } },
                },
              }}
            />
          </div>

          <div className="card calendar-card">
            <h3 className="chart-title">Calendar</h3>
            <div className="calendar-subtext">
              Upcoming meetings and deadlines
            </div>
            <div className="calendar-events">
              April 12 - Team sync @ 10AM
              <br />
              April 14 - Project deadline
              <br />
              April 18 - Meditation challenge
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
