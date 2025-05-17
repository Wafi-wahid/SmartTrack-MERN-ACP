import "../styles/task.css";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaClock,
  FaTasks,
  FaBook,
  FaBrain,
  FaCog,
  FaUserCircle,
  FaPencilAlt,
} from "react-icons/fa";

const TaskManage = () => {
  const [todayTasks, setTodayTasks] = useState([
    {
      name: "Finish monthly reporting",
      stage: "In progress",
      priority: "High",
      team: "Marketing 02",
      isEditing: false,
    },
    {
      name: "Contract signing",
      stage: "In progress",
      priority: "Medium",
      team: "Operations",
      isEditing: false,
    },
    {
      name: "Market overview keynote",
      stage: "In progress",
      priority: "High",
      team: "Customer Care",
      isEditing: false,
    },
  ]);

  const [tomorrowTasks, setTomorrowTasks] = useState([
    {
      name: "Brand proposal",
      stage: "Not started",
      priority: "High",
      team: "Marketing 02",
      isEditing: false,
    },
    {
      name: "Social media review",
      stage: "In progress",
      priority: "Medium",
      team: "Operations",
      isEditing: false,
    },
    {
      name: "Report - Week 30",
      stage: "Not started",
      priority: "Low",
      team: "Operations",
      isEditing: false,
    },
  ]);

  const [weekTasks, setWeekTasks] = useState([
    {
      name: "Order check-ins",
      stage: "In progress",
      priority: "Medium",
      team: "Retails",
      due: "Wednesday",
      isEditing: false,
    },
    {
      name: "HR reviews",
      stage: "Not started",
      priority: "Medium",
      team: "People",
      due: "Wednesday",
      isEditing: false,
    },
    {
      name: "Report - Week 30",
      stage: "Not started",
      priority: "Low",
      team: "Development",
      due: "Friday",
      isEditing: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [newTask, setNewTask] = useState({
    name: "",
    due: "",
    stage: "",
    priority: "",
    team: "",
  });

  const handleDelete = (title, indexToRemove) => {
    const updateList = (list, setter) =>
      setter(list.filter((_, i) => i !== indexToRemove));
    if (title === "Today") updateList(todayTasks, setTodayTasks);
    else if (title === "Tomorrow") updateList(tomorrowTasks, setTomorrowTasks);
    else updateList(weekTasks, setWeekTasks);
  };

  const handleEditToggle = (title, index) => {
    const toggleEdit = (list, setter) => {
      const updated = list.map((task, i) =>
        i === index ? { ...task, isEditing: !task.isEditing } : task
      );
      setter(updated);
    };

    if (title === "Today") toggleEdit(todayTasks, setTodayTasks);
    else if (title === "Tomorrow") toggleEdit(tomorrowTasks, setTomorrowTasks);
    else toggleEdit(weekTasks, setWeekTasks);
  };

  const handlePriorityChange = (title, index, newPriority) => {
    const updatePriority = (list, setter) => {
      const updated = list.map((task, i) =>
        i === index ? { ...task, priority: newPriority } : task
      );
      setter(updated);
    };

    if (title === "Today") updatePriority(todayTasks, setTodayTasks);
    else if (title === "Tomorrow")
      updatePriority(tomorrowTasks, setTomorrowTasks);
    else updatePriority(weekTasks, setWeekTasks);
  };

  const handleAddTask = () => {
    const taskToAdd = { ...newTask, isEditing: false };
    if (selectedSection === "Today") setTodayTasks([...todayTasks, taskToAdd]);
    else if (selectedSection === "Tomorrow")
      setTomorrowTasks([...tomorrowTasks, taskToAdd]);
    else if (selectedSection === "This Week")
      setWeekTasks([...weekTasks, taskToAdd]);
    setNewTask({ name: "", due: "", stage: "", priority: "", team: "" });
    setSelectedSection("");
    setShowModal(false);
  };

  const TaskSection = ({ title, tasks }) => (
    <div className="taskSection">
      <h3 className="sectionTitle">{title}</h3>
      <table className="taskTable">
        <thead>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Stage</th>
            <th>Priority</th>
            <th>Team</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>
                {title === "Today"
                  ? "Today"
                  : title === "Tomorrow"
                  ? "Tomorrow"
                  : task.due || "—"}
              </td>
              <td>
                <span
                  className={`badge stage ${task.stage
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {task.stage}
                </span>
              </td>
              <td>
                {task.isEditing ? (
                  <select
                    value={task.priority}
                    onChange={(e) =>
                      handlePriorityChange(title, index, e.target.value)
                    }
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                ) : (
                  <span
                    className={`badge priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>
                )}
              </td>
              <td>{task.team}</td>
              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditToggle(title, index)}
                  >
                    {task.isEditing ? "Save" : "Edit"}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(title, index)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="Task">
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
          <h1 className="title">My tasks</h1>
          <div className="header-right">
            <input className="search-input" placeholder="Search..." />
            <FaPencilAlt
              className="icon pencil-icon"
              onClick={() => setShowModal(true)}
            />
            <FaUserCircle className="icon profile-icon" />
          </div>
        </div>

        <div className="taskContainer">
          <TaskSection title="Today" tasks={todayTasks} />
          <TaskSection title="Tomorrow" tasks={tomorrowTasks} />
          <TaskSection title="This Week" tasks={weekTasks} />
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {!selectedSection ? (
              <>
                <h2 className="modal-title">
                  Where do you want to add the task?
                </h2>
                <div className="section-select">
                  <button onClick={() => setSelectedSection("Today")}>
                    Today
                  </button>
                  <button onClick={() => setSelectedSection("Tomorrow")}>
                    Tomorrow
                  </button>
                  <button onClick={() => setSelectedSection("This Week")}>
                    This Week
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="modal-title">Add Task to {selectedSection}</h2>
                <input
                  className="modal-input"
                  placeholder="Task Name"
                  value={newTask.name}
                  onChange={(e) =>
                    setNewTask({ ...newTask, name: e.target.value })
                  }
                />
                <select
                  className="modal-input"
                  value={newTask.stage}
                  onChange={(e) =>
                    setNewTask({ ...newTask, stage: e.target.value })
                  }
                >
                  <option value="">Select Stage</option>
                  <option value="In progress">In progress</option>
                  <option value="Not started">Not started</option>
                </select>
                <select
                  className="modal-input"
                  value={newTask.priority}
                  onChange={(e) =>
                    setNewTask({ ...newTask, priority: e.target.value })
                  }
                >
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <input
                  className="modal-input"
                  placeholder="Team"
                  value={newTask.team}
                  onChange={(e) =>
                    setNewTask({ ...newTask, team: e.target.value })
                  }
                />
                <div className="modal-buttons">
                  <button className="save-btn" onClick={handleAddTask}>
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManage;
