import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log("Fetched:", res.data);
        setData(res.data[0]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const navigate = useNavigate();
  if (!data) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <Sidebar />

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
            <p className="card-score">{data.totalTasks}</p>
            <button className="btn" onClick={() => navigate("/task")}>
              See Tasks
            </button>
          </div>

          <div className="card">
            <h2 className="card-title">Current Task</h2>
            <p className="card-score">{data.currentTasks}</p>
            <button className="btn" onClick={() => navigate("/task")}>
              Write task
            </button>
          </div>

          <div className="card">
            <h2 className="card-title">Journaling</h2>
            <p className="card-subtitle">{data.journalingMsg}</p>
            <p className="card-subtitle">{data.journals}</p>
            <button className="btn" onClick={() => navigate("/journal")}>
              Write Journal
            </button>
          </div>

          <div className="card">
            <h2 className="card-title">Meditation</h2>
            <p className="card-subtitle">{data.meditationMsg}</p>
            <button className="btn" onClick={() => navigate("/meditation")}>
              Do Meditation
            </button>
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
                    data: data.chartData,
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
              {data.calendarEvents.map((event, i) => (
                <div key={i}>{event}</div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
