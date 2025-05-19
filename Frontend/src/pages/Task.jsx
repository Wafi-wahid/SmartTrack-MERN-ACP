import "../styles/task.css";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaPencilAlt, FaUserCircle } from "react-icons/fa";

const Task = () => {
  const [tasks, setTasks] = useState({
    Today: [
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
    ],
    Tomorrow: [
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
    ],
    "This Week": [
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
    ],
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [newTask, setNewTask] = useState({
    name: "",
    due: "",
    stage: "",
    priority: "",
    team: "",
  });

  const updateTaskList = (section, updater) => {
    setTasks((prev) => ({ ...prev, [section]: updater(prev[section]) }));
  };

  const handleDelete = (section, index) => {
    updateTaskList(section, (list) => list.filter((_, i) => i !== index));
  };

  const handleEditToggle = (section, index) => {
    updateTaskList(section, (list) =>
      list.map((task, i) =>
        i === index ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const handlePriorityChange = (section, index, newPriority) => {
    updateTaskList(section, (list) =>
      list.map((task, i) =>
        i === index ? { ...task, priority: newPriority } : task
      )
    );
  };

  const handleAddTask = () => {
    updateTaskList(selectedSection, (list) => [
      ...list,
      { ...newTask, isEditing: false },
    ]);
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
                    .replace(/ /g, "-")}`}
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
      <Sidebar />

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
          {Object.entries(tasks).map(([section, items]) => (
            <TaskSection key={section} title={section} tasks={items} />
          ))}
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
                  {Object.keys(tasks).map((section) => (
                    <button
                      key={section}
                      onClick={() => setSelectedSection(section)}
                    >
                      {section}
                    </button>
                  ))}
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

export default Task;
